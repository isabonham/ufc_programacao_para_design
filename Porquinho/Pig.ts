//create enumeration
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
    
    public constructor(value: number, volume: number, label: string) {
        this.value = value;
        this.volume = volume;
        this.label = label;
    }

    public static map = new Map<Cents, Coin> ([
        [Cents.C10, new Coin(0.10, 1, "C10")],
        [Cents.C25, new Coin(0.25, 2, "C25")],
        [Cents.C50, new Coin(0.50, 3, "C50")],
        [Cents.C100, new Coin(1.00, 4, "C100")],
    ]);

    public static get(cents: Cents): Coin {
        return this.map.get(cents)!;
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

class Item { //todo
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

class Pig { //todo
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

    public addItem(item: Item): boolean { //todo
    }

    public addCoin(coin: Coin): boolean { //todo
    }

    public breakPig(): boolean { //todo
    }

    public getCoins() : number { //todo
    }

    public getItems(): string { //todo
    }
    
    public toString(): string {
        let aux = "[" + this.items.join(", ") + "]";
        return `${aux} : ${this.value.toFixed(2)}\$ : ${this.volume}/${this.volumeMax} : ${this.broken ? "broken" : "unbroken"}`;
    }
}