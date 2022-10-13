class Pet {
    private nome: string;
    private tipo: string;
    public constructor(nome: string, tipo: string) {
        this.nome = nome;
        this.tipo = tipo;
    }
    public getTipo(): string {
        return this.tipo;
    }
    public setTipo(value: string) {
        this.tipo = value;
    }
    public getNome(): string {
        return this.nome;
    }
    public setNome(value: string) {
        this.nome = value;
    }
    public toString(): string {
        return `${this.nome}:${this.tipo}`;
    }
}

function main() {
    let sacola: Array<Pet> = new Array();
    sacola.push(new Pet("chaninha", "gato"));
    sacola.push(new Pet("garfield", "gato"));
    sacola.push(new Pet("pluto", "cachorro"));
    sacola.push(new Pet("tom", "gato"));
    sacola.push(new Pet("sabrina", "humana"));

    // tirando os não gatos da sacola
    // let i = 0;
    // while (i < sacola.length) {
    //     if (sacola[i].getTipo() !== "gato") {
    //         sacola.splice(i, 1);
    //     } else {
    //         i += 1;
    //     }
    // }

    // pegando só os gatos
    // let sacola_gatos = sacola
    //     .filter(elem => elem.getTipo() == "gato")
    //     .map(elem => elem.getNome());
    
    // let nomes_gatos: string[] = [];
    // for (let elem of sacola) {
    //     if (elem.getTipo() == "gato")
    //         nomes_gatos.push(elem.getNome());
    // }

    // pegar só os cachorros
    let somente_cachorros = sacola
        .filter(elem => elem.getTipo() === "cachorro")
        .map(elem => elem.getNome());
    console.log(somente_cachorros);

    // sacola só com gatos
    let gatos = sacola
        .filter(elem => elem.getTipo() === "gato")

    console.log(gatos);
        
    // sacola só com quem não é gato
    let sem_gatos = sacola
        .filter(elem => elem.getTipo() !== "gato")

    console.log(sem_gatos);
}

main()
