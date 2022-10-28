enum Cents {
    C10,
    C25,
    C50,
    C100
}

class Coin {
    private value: number;
    private volume: number;
    private label: string;
    
    public constructor(cents: Cents) {
        switch (cents) {
            case Cents.C10:
                this.value = 0.10;
                this.volume = 1;
                this.label = "C10"
                break;
            case Cents.C25:
                this.value = 0.25;
                this.volume = 2;
                this.label = "C25"
                break;
            case Cents.C50:
                this.value = 0.50;
                this.volume = 3;
                this.label = "C50"
                break;
            case Cents.C100:
                this.value = 1.00;
                this.volume = 4;
                this.label = "C100"
                break;
        }
    }

    public getValue(): number {
        return this.value;
    }

    public getVolume(): number {
        return this.volume;
    }

    public getLabel(): string {
        return this.label;
    }

    public toString(): string {
        return `value: ${this.value},
                volume: ${this.volume},
                label: ${this.label}`;
    }
}

class Item {
    private label: string;
    private volume: number;

    public constructor(label: string, volume: number) {
        this.label = label;
        this.volume = volume;
    }

    public getLabel(): string {
        return this.label;
    }

    public getVolume(): number {
        return this.volume;
    }

    public setVolume(volume: number): void {
        this.volume += volume;
    }

    public setLabel(label: string): void {
        this.label = label;
    }

    public toString(): string {
        return `${this.label}`;
    }
}

class Pig {
    private items: string[];
    private volumeMax: number;
    private volume: number;
    private value: number;
    private broken: boolean;

    public constructor(volumeMax: number) {
        this.items = new Array<string>();
        this.volumeMax = volumeMax;
        this.volume = 0;
        this.value = 0;
        this.broken = false;
    }

    public addItem(item: Item): boolean {
        if (this.broken) {
            console.log ("fail: the pig is broken");
            return false;
        }
        else if (item.getVolume() + this.volume > this.volumeMax) {
            console.log ("fail: the pig is full");
            return false;
        }
        this.volume += item.getVolume();
        this.items.push(item.getLabel());
        return true;
    }

    public addCoin(coin: Coin): boolean {
        console.log ("" + coin);
        if (this.broken) {
            console.log ("fail: the pig is broken");
            return false;
        }
        else if (coin.getVolume() + this.volume > this.volumeMax) {
            console.log ("fail: the pig is full");
            return false;
        }
        this.volume += coin.getVolume();
        this.value += coin.getValue();
        return true;
    }

    public breakPig(): boolean { //todo
    }

    public getCoins() : number {
        if (this.broken === true) {
            let aux = this.value;
            this.value = 0;
            return aux;
        }
        console.log ("fail: you must break the pig first");
        return 0;
    }

    public getItems(): string {
        if (this.broken === true) {
            let aux = this.items.join(", ");
            this.items = [];
            return "[" + aux + "]";
        }
        console.log ("fail: you must break the pig first");
        return "[]";
    }
    
    public toString(): string {
        let response = "";
        response = "[" + this.items.join(", ") + "]" + " : ";
        response += this.value.toFixed(2) + "$ : ";
        response += this.volume + "/" + this.volumeMax;
        response += " : " + (this.broken? "broken" : "unbroken");
        return response;
    }
}