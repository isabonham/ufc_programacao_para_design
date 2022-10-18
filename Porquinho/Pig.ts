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
    
    public constructor(cents: Cents) {
        
    }
    public toString(): string { //todo
    }
    public getValue(): number { //todo
    }
    public getVolume(): number { //todo
    }
    public getLabel(): string { //todo
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
    private broken: boolean = false;

    public constructor(volumeMax: number) {
        this.volumeMax = volumeMax;
    }

    public addItem(item: Item): boolean {
        if (!this.broken) {
            this.items.push(item.getLabel());
            return true;
        }
        return false;
    }

    public addCoin(coin: Coin): boolean { //todo
    }

    public breakPig(): boolean {

    }

    public getCoins() : number { //todo
    }

    public getItems(): string { //todo
    }

    public toString(): string { //todo
    }
}