//create enumeration
enum Cents {
    C10,
    C25,
    C50,
    C100
}

class Coin { //todo
    private value: number;
    private volume: number;
    private label: string;
    
    public constructor(cents: Cents) { //todo
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


class Item { //todo
    private label: string;
    private volume: number;

    public constructor(label: string, volume: number) { //todo
    }
    public getLabel(): string { //todo
    }
    public getVolume(): number { //todo
    }
    public setVolume(volume: number): void { //todo
    }
    public setLabel(label: string): void { //todo
    }
    public toString(): string { //todo
    }
}

class Pig { //todo
    private items: string[];
    private volumeMax: number;
    private volume: number;
    private value: number;
    private broken: boolean;

    public constructor(volumeMax: number) { //todo
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

    public toString(): string { //todo
    }
}