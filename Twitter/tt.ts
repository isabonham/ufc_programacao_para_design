class User {
    private username: string
    private inbox: Inbox
    private following: Map<string, User>
    private followers: Map<string, User>
    constructor (name: string) {
        this.username = name
        this.inbox = new Inbox
        this.following = new Map<string, User>()
        this.followers = new Map<string, User>()  
    }

    getUsername() {
        return this.username;
    }

    getFollowers() {
        return this.followers.keys()
    }

    getFollowing() {
        return this.following.keys()
    }

    getTimeline() {
        return this.inbox.getTimeline()
    }

    getInbox() {
        return this.inbox
    }

    follow(seguir: User) {
        if (this.username == seguir.getUsername()){
            return console.log ("você não pode se seguir!")
        }
        this.following.set(seguir.getUsername(), seguir)
        seguir.followers.set(this.getUsername(), this)
    }

    unfollow(outro: string) {
        if (!this.following.has(outro)) {
            return console.log("Usuário não encontrado na timeline")
        }
        let deleta = this.following.get(outro)
        if (deleta !== undefined) {
           deleta.followers.delete(this.getUsername())
            this.following.delete(outro) 
            this.inbox.rmvMsg(outro)
        }
    }

    sendTwitada(twitada: Tweet) {
        this.inbox.guardarNaTimeline(twitada)
        this.inbox.guardarNosMeusTweets(twitada)
        for (let seguidores of this.followers.values()) {
            seguidores.inbox.guardarNaTimeline(twitada)
        }
    }

    like(id: number) {
        let tweet = this.inbox.getTweet(id)
        tweet.like(this.getUsername())
    }

    public unfollowAll() {
        for (let user of this.following.values()) {
            user.followers.delete(this.getUsername())
            this.following.delete(user.getUsername())
        }
    }
    public rejectAll() {
        for (let user of this.followers.values()) {
            user.following.delete(this.getUsername())
            this.followers.delete(user.getUsername())
        }
    }

    public toString() :string {
        let followers = this.followers.keys()
        let following = this.following.keys()
        return `${this.username} \n Seguindo [${[...following].join(", ")}] \n Seguidores [${[...followers].join(", ")}]`
    }

    showInbox() {      
        return `Timeline de ${this.username}:\n${this.inbox.toString()}` 
    }
}

class Tweet {
    private id: number
    private sender: string
    private msg: string
    private likes: Array<string> 
    private rt: Tweet | null
    private deleted: boolean
    constructor(id:number, sender: string, msg:string) {
        this.id = id
        this.sender = sender
        this.msg = msg
        this.likes = new Array()
        this.rt = null
        this.deleted = false
    }

    getSender() {
        return this.sender
    }

   public getId() {
        return this.id
    }

    getMsg() {
        return this.msg
    }

    getLikes() {
        return this.likes
    }

    setDeleted() {
        this.deleted = true
        this.msg = "Esse tweet foi deletado"
        this.sender =""
    }

    isDeleted(): boolean {
        return this.deleted
    }
    
    like(username: string) {
        this.likes.push(username)
    }

    setRT(rt: Tweet) {
        this.rt = rt
    }

    toString() {
        let tweet = `(${this.id}) ${this.sender}: ${this.msg} (Likes:${[this.getLikes()].join(" , ")})`
        if (this.rt !== null)
        tweet += `\n    ~Retweeted: (${this.rt.getId()}) ${this.rt.getSender()}: ${this.rt.getMsg()}`
        return tweet 
    }
}

class Inbox {
    private timeline: Map<number, Tweet>
    private myTweets: Map<number, Tweet>
    constructor() {
        this.timeline = new Map<number, Tweet>()
        this.myTweets = new Map<number, Tweet>()
    }

    public getTimeline(): Array<Tweet> {
        let saida = new Array()
        for (let tweets of this.timeline.values()) {
            if(tweets.isDeleted() == false)
            saida.push(tweets)
        }
        saida = [...saida].sort((a, b) => b.getId() - a.getId()) 
        return saida
    }

    public getTweet(id:number): Tweet{
        let tweet: undefined | Tweet = this.timeline.get(id)    
        if (tweet === undefined){
        throw new Error("Tweet não encontrado")
        }
        return tweet  
    }
    
    getMyTweets() {
        return this.myTweets
    }

    public guardarNaTimeline(tweet: Tweet) {
        this.timeline.set(tweet.getId(), tweet)
    }

    public guardarNosMeusTweets(tweet: Tweet) {
        this.myTweets.set(tweet.getId(), tweet)
    }

    public rmvMsg(usuario: string) { 
        for(let tweets of this.timeline.values()) {
            if (tweets.getSender() == usuario)
                this.timeline.delete(tweets.getId())
         }
    }

    toString() {
        return `${this.getTimeline().join("\n")}`
    }
}

class Controller {
    private users: Map<string, User>
    private nextTweetId: number
    private tweets: Map<number, Tweet>
    constructor () {
        this.users = new Map<string, User>()
        this.nextTweetId = 0
        this.tweets = new Map<number, Tweet>()
    }

    public getUser(user: string): User | undefined {
        if (user != undefined)
        return this.users.get(user)
    }

    public cadastrar(newuser: User) {
        if (this.users.has(newuser.getUsername())) {
           return console.log ("Nome já está em uso")
        }
        this.users.set(newuser.getUsername(), newuser)
    }

    public sendTwitada(sender: string, msg: string)  {
        if (!this.users.has(sender)) {
            return console.log("Usuário inexistente")
        }
       let tweet: Tweet = this.criarTweet(sender, msg)
       this.tweets.set(this.nextTweetId, tweet)
       let quemTwitou = this.users.get(sender)
       if (quemTwitou != undefined)
       quemTwitou.sendTwitada(tweet) 
    }

    public sendRt(sender: string, twId: number, rtMsg: string){
        let user = this.users.get(sender)
        if (user == undefined) 
            throw new Error("Usuário inexistente")
        let tweet:Tweet = user.getInbox().getTweet(twId)
        let rt = this.criarTweet(sender, rtMsg)
        rt.setRT(tweet)
        user.sendTwitada(rt)
     }
    
    public criarTweet(usuario: string, msg: string) : Tweet {
        this.nextTweetId++
        let tweet: Tweet = new Tweet(this.nextTweetId, usuario, msg)
        return tweet 
    }

    public rmvUser(user: string) {
        let usuario: undefined | User = this.users.get(user)
        if (usuario == undefined)
        throw new Error("Usuário não existe")
        usuario.unfollowAll()
        usuario.rejectAll()
        for(let tweet of usuario.getInbox().getMyTweets().values()){
             tweet.setDeleted()
        }
        this.users.delete(user)
    }
    
    public toString() {
        let saida = ""
        let saida2 = new Array()
        for(let twiteiros of this.users.values()) {
            saida += `${twiteiros.toString()}\n`
        }    
        saida += "\n" 
        for (let timeline of this.users.values()) {
            let users = this.users.get(timeline.getUsername())
            if (users == undefined)
            throw new Error("Isso nunca vai cair")
            saida += `${users.showInbox()}\n`
        
        }
       
        return saida
    }
}