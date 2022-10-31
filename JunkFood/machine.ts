class Slot {
    private name: string;
    private quantity: number;
    private price: number;

    public constructor (name : string, quantity: number, price: number) {
        this.name = name;
        this.quantity = quantity;
        this.price = price;
    }

    public getName(): string {
        return this.name;
    }

    public getPrice(): number {
        return this.price;
    }

    public getQuantity(): number {
        return this.quantity;
    }

    public setName(name: string) {
        this.name = name;
    }

    public setPrice(price: number) {
        this.price = price;
    }
    
    public setQuantity(quantity: number) {
        this.quantity += quantity;
    }
    
    public toString() : string {
        return this.name + " : " + this.quantity + " U : " + this.price.toFixed(2) + " RS]";
    }
}

class Machine {
    private slots: Array<Slot|null>;
    private profit: number;
    private cash: number;
    private capacity: number;

    public constructor (capacity: number) {
        this.capacity = capacity;
        this.cash = 0;
        this.slots = [];
        for (let i = 0; i < this.capacity; i++) {
            this.slots.push(new Slot("  empty", 0, 0));
        }
    }

    public getSlot(index: number) {
        if (this.slots.length === 0) {
            return null;
        }
        return this.slots[index];
    }

    public getProfit(): number {
        return this.profit;
    }

    public getCash(): number {
        return this.cash;
    }

    public setSlot(index: number, slot: Slot|null): boolean {
        if (index < 0 || index > this.capacity) {
            console.log ("fail: indice nao existe");
            return false;
        }

        if (slot === null) {
            this.slots[index] = new Slot("  empty", 0, 0);
            return false;
        }

        this.slots[index] = new Slot(slot.getName(), slot.getQuantity(), slot.getPrice());
        return true;
    }

    clearSlot(index: number) {
        this.setSlot(index, new Slot("  empty", 0, 0));
    }

    insertCash(cash: number) {
        this.cash += cash;
    }

    withdrawCach(): number {
        this.profit = this.cash;
        this.cash = 0;
        console.log ("voce recebeu " + this.profit.toFixed(2) + " RS");
        return this.profit;
    }

    buyItem(index: number): boolean {
        if (index < 0 || index > this.capacity) {
            console.log ("fail: indice nao existe");
            return false;
        }

        if (this.cash < this.slots[index]!.getPrice()) {
            console.log ("fail: saldo insuficiente");
            return false;
        }

        if (this.slots[index]!.getQuantity() <= 0) {
            console.log ("fail: espiral sem produtos");
            return false;
        }

        this.slots[index]!.setQuantity(-1);
        this.cash -= this.slots[index]!.getPrice();
        console.log ("voce comprou um " + this.slots[index]!.getName());
        return true;
    }
    
    public toString() : string {
        let line = "";
        line += "saldo: " + this.cash.toFixed(2) + "\n";
        for (let i = 0; i < this.capacity; i++) {
            line += i + " [ ";
            line += "" + this.slots[i];
                    
            if (i < this.capacity - 1) {
                line += "\n";
            }
        }
        return line;
    }
}