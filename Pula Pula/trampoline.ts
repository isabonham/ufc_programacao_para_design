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
        return `${this.name}, ${this.age}`;
    }

}

class Trampoline {
    playing : Array<Kid | null>;
    waiting : Array<Kid>;

    public constructor(){
        this.playing = new Array<Kid>(); 
        this.waiting = new Array<Kid>();
    }
  
    arrive(kid: Kid): boolean {
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
        this.playing.unshift(this.waiting.pop()!);
    }

    leave() {
        if(this.playing.length == 0) {
            return "não há ninguem no pulapula";
        }
        this.waiting.unshift(this.playing.pop()!);
    }

    remove(kid: string) {
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
        let response = "[";
        for (let i = 0; i < this.waiting.length; i++) {
            response += this.waiting[i]!.getName() + ":" + this.waiting[i]!.getAge();
            if (i === this.waiting.length - 1) {
                response += "]";
            }
            else {
                response += ", ";
            }
        }
        if (this.waiting.length === 0) {
            response += "]";
        }

        response += " => [";
        for (let i = 0; i < this.playing.length; i++) {
            response += this.playing[i]!.getName() + ":" + this.playing[i]!.getAge();
            if (i === this.playing.length - 1) {
                response += "]";
            }
            else {
                response += ", ";
            }
        }
        if (this.playing.length === 0) {
            response += "]";
        }

        return response;
    }
}