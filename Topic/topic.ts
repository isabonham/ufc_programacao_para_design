class Pass {
    private name: string;
    private age: number;

    public constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    public getName(): string {
        return this.name;
    }

    public getAge(): number {
        return this.age;
    }

    public setName(name: string) {
        this.name = name;
    }

    public setAge(age: number) {
        this.age = age;
    }

    public toString(): string {
        return this.name + ":" + this.age;
    }
}

class Topic {
    private seat: Array<Pass | null>;
    private size: number;
    private preference: number;

    public constructor(size: number, preference: number) {
        this.size = size;
        this.preference = preference;
        this.seat = new Array();
        for(let i = 0; i < this.size; i++) {
            this.seat.push(null);
        }
    }

    public inserir(name: string, age: number): boolean {
        for(let s of this.seat) {
            if(s !== null && s.getName() === name) {
                console.log("fail: " + name + " ja esta na topic");
                return false;
            }
        }

        if(age > 65) {
            for(let i = 0; i < this.preference; i++) {
                if(this.seat[i] === null) {
                    this.seat[i] = new Pass(name, age);
                    return true;
                }
            }
            for(let j = this.preference; j < this.size; j++) {
                if(this.seat[j] === null) {
                    this.seat[j] = new Pass(name, age);
                    return true;
                }
            }
        }
        else {
            for(let j = this.preference; j < this.size; j++) {
                if(this.seat[j] === null) {
                    this.seat[j] = new Pass(name, age);
                    return true;
                }
            }
            for(let i = 0; i < this.preference; i++) {
                if(this.seat[i] === null) {
                    this.seat[i] = new Pass(name, age);
                    return true;
                }
            }
        }
        
        console.log("fail: topic lotada");
        return false;
    }

    public sair(name: string): boolean {
        for(let i = 0; i < this.seat.length; i++) {
            if(this.seat[i] !== null && this.seat[i]!.getName() === name) {
                this.seat[i] = null;
                return true;
            }
        }
        console.log("fail: " + name + " nao esta na topic");
        return false;
    }

    toString(): string{
        let response = "[";
        for(let i = 0; i < this.preference; i++) {
            if(this.seat[i] === null) {
                response += "@ ";
            }
            else {
                response += "@" + this.seat[i]!.getName() + ":" + this.seat[i]!.getAge() + " ";
            }
        }
        for(let i = this.preference; i < this.size; i++) {
            if(this.seat[i] === null) {
                response += "=";
            }
            else {
                response += "=" + this.seat[i]!.getName() + ":" + this.seat[i]!.getAge();
            }
            if(i !== this.size - 1) {
                response += " ";
            }

        }
        response += "]";
        return response;
    }
}