class Macarrao {
    protected tipo: string;
    protected preparo: number;
    protected time: number;

    public constructor(tipo: string, preparo: number) {
        this.tipo = tipo;
        this.preparo = preparo; 
        this.time = 0;
    }

    public cozinhar(): any {
        this.time++;
        if(this.time < this.preparo) {
            return console.log("cozinhando");
        }
        if(this.preparo === this.time) {
            return console.log("seu macarrão está no ponto");
        }
        if(this.time > this.preparo) {
            return console.log("seu macarrão passou do ponto");
        }
    }

    public toString() {
        return (`macarrão ${this.tipo}, preparo de ${this.preparo} minutos`);
    }
}

class Chines extends Macarrao {
    protected molho: string;

    public constructor(molho: string, tipo: string, preparo: number) {
        super(tipo, preparo);
        this.molho = molho;
    }
    
    public cozinhar(): any {
        this.time++;
        if(this.time < this.preparo) {
            return (`seu macarrão com molho ${this.molho} está cozinhando`);
        }
        if( this.time === this.preparo) {
            return  (`seu macarrão com molho ${this.molho} está no ponto`);
        }
        if(this.time > this.preparo) {
            return  (`seu macarrão com molho ${this.molho} passou do ponto`);
        }
    }

    public toString() {
        return (super.toString() +` com molho ${this.molho}`);
    }

}

class Yakissoba extends Chines {
    protected sabor: string;
    protected yakissoba: string;
    protected alergico: boolean;

    public constructor(sabor: string, molho: string, tipo: string, preparo: number) {
        super(molho, tipo, preparo);
        this.yakissoba = "yakissoba";
        this.alergico = false;
        this.sabor = sabor;
    }

    public cozinhar() {
        this.time++;
        if(this.time < this.preparo) {
            return console.log(`seu yakissoba de ${this.sabor} com molho ${this.molho} está cozinhando`);
        }
        if( this.time == this.preparo) {
            return  console.log(`seu yakissoba de ${this.sabor} com molho ${this.molho} está no ponto`);
        }
        if(this.time > this.preparo) {
            return  console.log(`seu yakissoba de ${this.sabor} com molho ${this.molho} passou do ponto`);
        }
    }

    getRandomIntInclusive(min: number, max:number): number {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    public alergiaCheck(): boolean {
        let iei = this.getRandomIntInclusive(1, 4);
        if(iei == 1) {
            return true;
        }
        else { 
            return false;
        }
    }

    public comer() {
        if(this.alergico === true) {
            return console.log("garganta inflamada demais para comer");
        }
        if (this.alergiaCheck() === true) {
            console.log(`o cliente teve alergia a ${this.sabor} e foi para o hospital`);
            this.alergico = true;
        }
        else if (this.time > this.preparo) {
           console.log(`a comida queimada está horrivel!!`);
        }
        else if (this.time === this.preparo) {
           console.log(`a comida está deliciosa`);
        }
        else if (this.time < this.preparo) {
           console.log(`a comida está crua!!`);
        }
        return true
    }

    public toString() {
       return (super.toString() + ` sabor ${this.sabor} `);
    }
}