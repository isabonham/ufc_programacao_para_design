class Client {
    private name: string;
    private fone: string;
    private id: number;

    public constructor (name: string, fone: string, id: number) {
        this.name = name;
        this.fone = fone;
        this.id = 0;
    }
    public getName(): string {
        return this.name;
    }

    public getFone(): string {
        return this.fone;
    }

    public getId(): number {
        return this.id;
    }

    public setName(name: string) {
        this.name = name;
    }

    public setFone(fone: string) {
        this.fone = fone;
    }
    
    public setId(id: number) {
        this.id = id;
    }

    public toString(): string {
        return this.name + ":" + this.id;
    }
}

class Cinema {
    private seat: Array<Client | null>;
    private size: number;

    public constructor (size: number) {
        this.size = size;
        this.seat = new Array();
        for (let i = 0; i < size; i++) {
            this.seat.push(null);
        }
    }

    public reservar (name: string, fone: string, id: number): boolean {
        if (id > this.size) {
            console.log ("fail: cadeira nao existe");
            return false;
        }
        if (this.seat[id] !== null) {
            console.log ("fail: cadeira ja esta ocupada");
            return false;
        }
        
        for (let s of this.seat) {
            if (s !== null && s.getName() === name) {
                console.log ("fail: cliente ja esta no cinema");
                return false;
            }
        }

        this.seat[id] = new Client(name, fone, id);
        return true;
    }

    public cancelar (name: string): boolean {
        for (let i = 0; i < this.seat.length; i++) {
            if (this.seat[i] !== null && this.seat[i]!.getName() === name) {
                this.seat[i] = null;
                return true;
            }
        }
        console.log ("fail: cliente nao esta no cinema");
        return false;
    }

    toString(): string{
        let response = "[";
        for (let i = 0; i < this.size; i++) {
            if (this.seat[i] === null) {
                response += "-";
                
            }
            else {
                response += this.seat[i]!.getName() + ":" + this.seat[i]!.getFone();
            }
            if (i !== this.seat.length - 1) {
                response += " ";
            }
            
        }
        response += "]";
        return response;
    }
}