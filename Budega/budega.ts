class Person {
    private name: string;
    
    public constructor(name: string) {
        this.name = name;
    }

    public getName(): string {
        return this.name;
    }
    public setName(value: string) {
        this.name = value;
    }
    
    public toString() {
        return this.name;
    }
}

class Budega {
    private cashier: Array<Person|null>;
    private waiting: Array<Person>;

    public constructor(nCashiers: number) {
        this.cashier = new Array();
        this.waiting = new Array();

        for(let i = 0; i < nCashiers; i++) {
            this.cashier.push(null);
        }
    }

    public chegar(person: Person) {
        this.waiting.push(person);
    }

    public chamar(index: number): boolean {
        if(index < 0 || index >= this.cashier.length) {
            console.log("fail: indice invalido");
            return false;
        }
        if(this.cashier[index] !== null) {
            console.log("fail: caixa ocupado");
            return false;
        }

        if(this.waiting.length === 0) {
            console.log("fail: sem clientes");
            return false;
        }
        this.cashier[index] = this.waiting.shift()!;
        return true;
    }

    public finalizar(index: number): boolean {
        if(index < 0 || index >= this.cashier.length) {
            console.log("fail: caixa inexistente");
            return false;
        }
        if(this.cashier[index] === null) {
            console.log("fail: caixa vazio");
            return false;
        }
        this.cashier[index] = null;
        return true;
    }

    public furarFila(furao: Person, besta: string): boolean {
        for(let i = 0; i < this.waiting.length; i++) {
            if (this.waiting[i].getName() === besta) {
                this.waiting.splice(i, 0, furao);
                return true;
            }
        }
        return false;
    }

    public guardarLugar(furao: Person, amigo: string): boolean {
        for(let i = 0; i < this.waiting.length; i++) {
            if (this.waiting[i].getName() === amigo) {
                let amg = this.waiting.splice(i, 1, furao);
                this.waiting.push(amg[0]);
                return true;
            }
        }
        return false;
    }

    public abandonar(name: string) {
        for(let i = 0; i < this.cashier.length; i++) {
            // let person = this.cashier[i];
            // if (person !== null && person.getName() === name) {
            if (this.cashier[i]?.getName() === name) {
                this.cashier[i] = null;
            }
        }
    }

    public toString(): string {
        let saida = "Caixas: |";
        for(let i = 0; i < this.cashier.length; i++) {
            if(this.cashier[i] === null) {
                saida += " " + i + ":----- |";
            }
            else if(i === 0) {
                saida += " " + i + ": ";
                saida += this.cashier?.[i] + " |";
            }
            else{
                saida += " " + i + ":";
                saida += this.cashier?.[i] + " |";
            }
        }
        saida += "\nEspera: [";
        for (let i = 0; i < this.waiting.length; i++) {
            if (i !== this.waiting.length - 1) {
                saida += this.waiting[i] + ", ";
            }
            else {
                saida += this.waiting[i];
            }
        }
        saida += "]";

        return saida;
    }
}