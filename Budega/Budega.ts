class Pessoa {
    private nome: string;
    
    public constructor(nome: string) {
        this.nome = nome;
    }

    public getNome(): string {
        return this.nome;
    }
    public setNome(value: string) {
        this.nome = value;
    }
    
    public toString() {
        return this.nome;
    }
}

class Budega {
    private caixas: Array<Pessoa|null>;
    private espera: Array<Pessoa>;

    public constructor(qtdCaixas: number) {
        this.caixas = new Array();
        this.espera = new Array();

        for(let i = 0; i < qtdCaixas; i++) {
            this.caixas.push(null);
        }
    }

    public chegar(pessoa: Pessoa) {
        this.espera.push(pessoa);
    }

    public chamar(indice: number): boolean {
        if(indice < 0 || indice >= this.caixas.length) {
            console.log("fail: indice invalido");
            return false;
        }
        if(this.caixas[indice] !== null) {
            console.log("fail: caixa ocupado");
            return false;
        }

        if(this.espera.length === 0) {
            console.log("fail: sem clientes");
            return false;
        }
        this.caixas[indice] = this.espera.shift()!;
        return true;
    }

    public finalizar(indice: number): boolean {
        if(indice < 0 || indice >= this.caixas.length) {
            console.log("fail: caixa inexistente");
            return false;
        }
        if(this.caixas[indice] === null) {
            console.log("fail: caixa vazio");
            return false;
        }
        this.caixas[indice] = null;
        return true;
    }

    public furarFila(furao: Pessoa, besta: string): boolean {
        for(let i = 0; i < this.espera.length; i++) {
            if (this.espera[i].getNome() === besta) {
                this.espera.splice(i, 0, furao);
                return true;
            }
        }
        return false;
    }

    public guardarLugar(furao: Pessoa, amigo: string): boolean {
        for(let i = 0; i < this.espera.length; i++) {
            if (this.espera[i].getNome() === amigo) {
                let amg = this.espera.splice(i, 1, furao);
                this.espera.push(amg[0]);
                return true;
            }
        }
        return false;
    }

    public abandonar(nome: string) {
        for(let i = 0; i < this.caixas.length; i++) {
            // let pessoa = this.caixas[i];
            // if (pessoa !== null && pessoa.getNome() === nome) {
            if (this.caixas[i]?.getNome() === nome) {
                this.caixas[i] = null;
            }
        }
    }

    public toString(): string {
        let saida = "Caixas: |";
        for(let i = 0; i < this.caixas.length; i++) {
            if(this.caixas[i] === null) {
                saida += " " + i + ":----- |";
            }
            else if(i === 0) {
                saida += " " + i + ": ";
                saida += this.caixas?.[i] + " |";
            }
            else{
                saida += " " + i + ":";
                saida += this.caixas?.[i] + " |";
            }
        }
        saida += "\nEspera: [";
        for (let i = 0; i < this.espera.length; i++) {
            if (i !== this.espera.length - 1) {
                saida += this.espera[i] + ", ";
            }
            else {
                saida += this.espera[i];
            }
        }
        saida += "]";

        return saida;
    }
}