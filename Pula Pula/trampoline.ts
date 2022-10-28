class Kid {
    private name: string;
    private age: number;

    public constructor (name : string, age : number) {
        this.name = name;
        this.age = age;
    }

    public getName(): string {
        return this.name;
    }

    public getAge(): number {
        return this.age;
    }

    toString() : string {
        return `${this.name}, ${this.age} anos`;
    }

}

class Trampoline {
    playing : Array<Kid | null>;
    waiting : Array<Kid>;
    size : number;

    constructor(size : number){
        this.playing = new Array<Kid>(); 
        this.waiting = new Array<Kid>();
        this.size = size;
    }
  
    arrive (kid: Kid) : boolean {
        this.waiting.unshift(kid);
        return true;
    }
    
    enter() {
        if (this.waiting.length == 0) {
            return "não há ninguém na fila";
        }
        if (this.size === this.playing.length) {
            return console.log("pulapula cheio");
        }
        this.playing.push(this.waiting[0]);
        this.waiting.shift();
    }

    leave() {
        if(this.playing.length == 0) {
            return "não há ninguem no pulapula";
        }
        this.waiting.push(this.playing[0]);
        this.playing.shift();
    }

    remover(kid : string) {
        if(this.waiting.length == 0 && this.playing.length == 0){
            return ("pulapula e fila vazios");
        }
        for (let i = 0; i < this.waiting.length; i++){
            if (this.waiting[i].getName() == kid) {
                this.waiting.splice(i,1);
                break;
            }
        }    
        for (let i = 0; i < this.playing.length; i++){
            if (this.playing[i]?.getName() == kid) {
               this.playing.splice(i,1);
               break;
            }
        
        }
    }

    toString() : string {
        if(this.waiting.length == 0 && this.playing.length == 0){
            return("pulapula e fila vazios");
        }
        let saida = "( ";
        for (let j = 0; j < this.playing.length; j++) {
            saida += `${this.playing[j]!.getName()} `;
        } 
        saida += ") [ ";    
        for (let i = 0; i < this.waiting.length; i++) {
            saida += `${this.waiting[i]!.getName()} `;
        }
        return saida + "]";
    }
}