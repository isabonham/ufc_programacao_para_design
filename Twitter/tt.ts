class User {
    private username: string;
    private inbox: Inbox;
    private following: Map<string, User>;
    private followers: Map<string, User>;

    public constructor(name: string) {
        this.username = name;
        this.inbox = new Inbox;
        this.following = new Map<string, User>();
        this.followers = new Map<string, User>();
    }

    public getUsername() {
        return this.username;
    }

    public getFollowers() {
        return this.followers.keys();
    }

    public getFollowing() {
        return this.following.keys();
    }

    public getTimeline() {
        return this.inbox.getTimeline();
    }

    public getInbox() {
        return this.inbox;
    }

    public follow(user: User) {
        if(this.username === user.getUsername()) {
            console.log("fail: você não pode se seguir!");
            return false;
        }
        this.following.set(user.getUsername(), user);
        user.followers.set(this.getUsername(), this);
    }

    public unfollow(user: string) {
        if (!this.following.has(user)) {
            return console.log("Usuário não encontrado na timeline");
        }
        let d = this.following.get(user);
        if (d !== undefined) {
            d.followers.delete(this.getUsername());
            this.following.delete(user) ;
            this.inbox.rmvMsg(user);
        }
    }

    public twittar(tweet: Tweet) {
        this.inbox.Timeline(tweet);
        this.inbox.Tweets(tweet);
        for (let seguidores of this.followers.values()) {
            seguidores.inbox.Timeline(tweet);
        }
    }

    public like (id: number) {
        let tweet = this.inbox.getTweet(id);
        tweet.like(this.getUsername());
    }

    public unfollowAll() {
        for (let user of this.following.values()) {
            user.followers.delete(this.getUsername());
            this.following.delete(user.getUsername());
        }
    }

    public rejectAll() {
        for (let user of this.followers.values()) {
            user.following.delete(this.getUsername());
            this.followers.delete(user.getUsername());
        }
    }

    public toString() :string {
        let followers = this.followers.keys();
        let following = this.following.keys();
        return `${this.username}\n  seguidos   [${[...following].join(", ")}]\n  seguidores [${[...followers].join(", ")}]`;
    }

    public showInbox() {      
        return `${this.username}\n${this.inbox.toString()}`;
    }
}

class Tweet {
    private id: number;
    private sender: string;
    private msg: string;
    private likes: Array<string>;
    private rt: Tweet | null;
    private deleted: boolean;

    public constructor(id:number, sender: string, msg:string) {
        this.id = id;
        this.sender = sender;
        this.msg = msg;
        this.likes = new Array();
        this.rt = null;
        this.deleted = false;
    }

    public getSender() {
        return this.sender;
    }

    public getId() {
        return this.id;
    }

    public getMsg() {
        return this.msg;
    }

    public getLikes() {
        return this.likes;
    }

    public setDeleted() {
        this.deleted = true;
        this.msg = "Esse tweet foi deletado";
        this.sender = "";
    }

    public isDeleted() {
        return this.deleted;
    }
    
    public like(username: string) {
        this.likes.push(username);
    }

    public setRT(rt: Tweet) {
        this.rt = rt;
    }

    public toString() {
        let likes = ` [${[this.getLikes()].sort().join(", ")}]`;
        if (this.getLikes().length === 0) {
            likes = "";
        }
        let saida = `${this.id}:${this.sender} (${this.msg})${likes}\n`;
        return saida; 
    }
}

class Inbox {
    private timeline: Map<number, Tweet>;
    private myTweets: Map<number, Tweet>;

    public constructor() {
        this.timeline = new Map<number, Tweet>();
        this.myTweets = new Map<number, Tweet>();
    }

    public getTimeline(): Array<Tweet> {
        let saida = new Array();
        for (let tweets of this.timeline.values()) {
            if(tweets.isDeleted() === false) {
                saida.push(tweets);
            }
        }
        saida = [...saida].sort((a, b) => b.getId() - a.getId());
        return saida;
    }

    public getTweet(id:number): Tweet {
        let tweet: undefined | Tweet = this.timeline.get(id);
        if (tweet === undefined) {
            throw new Error("Tweet não encontrado");
        }
        return tweet;
    }
    
    public getMyTweets() {
        return this.myTweets;
    }

    public Timeline(tweet: Tweet) {
        this.timeline.set(tweet.getId(), tweet)
    }

    public Tweets(tweet: Tweet) {
        this.myTweets.set(tweet.getId(), tweet)
    }

    public rmvMsg(user: string) { 
        for(let tweets of this.timeline.values()) {
            if (tweets.getSender() === user) {
                this.timeline.delete(tweets.getId());
            }
        }
    }

    public toString() {
        return `${this.getTimeline().join("\n")}`
    }
}

class Controller {
    private users: Map<string, User>;
    private nextTweetId: number;
    private tweets: Map<number, Tweet>;
    
    public constructor () {
        this.users = new Map<string, User>();
        this.nextTweetId = 0;
        this.tweets = new Map<number, Tweet>();
    }

    public getUser(user: string): User | undefined {
        if (user !== undefined) {
            return this.users.get(user);
        }
    }

    public cadastrar(newuser: string): boolean {
        if (this.users.has(newuser)) {
           console.log ("Nome já está em uso");
           return false;
        }
        let user = new User(newuser);
        this.users.set(newuser, user);
        return true;
    }

    public Twittar(user: string, msg: string)  {
        if (!this.users.has(user)) {
            return console.log("Usuário inexistente");
        }
        let tweet: Tweet = this.createTweet(user, msg);
        this.tweets.set(this.nextTweetId, tweet);
        let sender = this.users.get(user);
        if (sender != undefined) {
            sender.twittar(tweet);
        }
    }

    public rt(sender: string, twId: number, rtMsg: string) {
        let user = this.users.get(sender);
        if (user === undefined) {
            throw new Error("Usuário inexistente");
        }
        let tweet:Tweet = user.getInbox().getTweet(twId);
        let rt = this.createTweet(sender, rtMsg);
        rt.setRT(tweet);
        user.twittar(rt);
     }
    
    public createTweet(user: string, msg: string): Tweet {
        let tweet: Tweet = new Tweet(this.nextTweetId, user, msg);
        this.nextTweetId++;
        return tweet;
    }

    public rmvUser(user: string) {
        let usuario: undefined | User = this.users.get(user);
        if (usuario === undefined) {
            throw new Error("Usuário não existe");
        }
        usuario.unfollowAll();
        usuario.rejectAll();
        for(let tweet of usuario.getInbox().getMyTweets().values()) {
             tweet.setDeleted();
        }
        this.users.delete(user);
    }
    
    public toString() {
        let saida = ""
        let saida2 = new Array()
        for(let twiteiros of this.users.values()) {
            saida += `${twiteiros.toString()}\n`
        }
        return saida;
    }
}




function main() {
  let chain = new Map();
  let ui = [];
  let tt = new Controller();

  chain.set("show", () => print("" + tt));
  chain.set("add",  () => tt.cadastrar(ui[1]));
  chain.set("follow", () => {let one = tt.getUser(ui[1])!; let two = tt.getUser(ui[2])!; one.follow(two);});
  chain.set("twittar", () => {let user = ui[1]; let msg = ""; for (let i = 2; i < ui.length; i++) {msg += ui[i] + " ";} tt.Twittar(user, msg)});
  chain.set("timeline",   () => {let user = tt.getUser(ui[1]); if (user === undefined) {console.log("fail: usuario nao encontrado")} else {console.log("" + user.getTimeline())}});
  chain.set("like", () => {let user = tt.getUser(ui[1])!; user.like(+ui[2])});
  chain.set("unfollow", () => {let user = tt.getUser(ui[1])!; user.unfollow(ui[2])});
  chain.set("rt", () => {let msg = ""; for (let i = 3; i < ui.length; i++) {msg += ui[i] + " ";} tt.rt(ui[1], +ui[2], msg)});
  
  execute(chain, ui);
}

// ------------ Funções de Leitura --------------------

// Caso não interativo via moodle
let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.shift();

// Caso interativo via readline
// let readline = require("readline-sync")
// let input = () => readline.question();

// ------------ Funções de Escrita --------------------

let write = text => process.stdout.write("" + text);
let print = text => console.log(text);

// ------------ Funções de Formatação --------------------

// Função auxiliar para converter de string para vetor
// "[1,2,3,4]" para [1, 2, 3, 4]
function to_vet(token) {
    let size = token.length;
    let inside = token.substring(1, size - 1);
    return inside === "" ? [] : inside.split(",").map(x => +x)
}

//Converte de vetor para string sem inserir os espaços
//[1, 2, 3, 4] => "[1,2,3,4]"
function fmt(vet) {
    return "[" + vet.join(", ") + "]";
}

// ------------ Funções do Shell --------------------


let execute = (chain, ui) => __shell(chain, ui, true);
let shell   = (chain, ui) => __shell(chain, ui, false);

function __shell(chain, ui, on_moodle) {
    while (true) {
        if (!on_moodle)
            write("$")
        let line = input();
        if (on_moodle)
            print("$" + line);
            
        ui.splice(0); //apagar tudo
        line.split(" ").forEach(x => ui.push(x));
        
        let cmd = ui[0];
        if (cmd == "end") {
            return;
        } else if (chain.has(cmd)) {
            chain.get(cmd)();
        } else {
            print("fail: command not found");
        }
    }
}

main();