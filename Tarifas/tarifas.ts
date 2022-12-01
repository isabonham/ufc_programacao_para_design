enum Label {
    deposit = "deposit",
    fee = "fee",
    opening = "opening",
    reverse = "reverse",
    withdraw = "withdraw"
}

class Account {
    private balanceManager: BalanceManager
    private id : number

    public constructor(id: number) {
        this.id = id;
        this.balanceManager = new BalanceManager();
        this.balanceManager.addOperation(Label.opening, 0);
    }

    public deposit(value: number) : boolean {
        if (value < 0) {
            console.log ("fail: invalid value");
            return false;
        }
        this.balanceManager.addOperation(Label.deposit, value);
        return true;
    }

    public fee(value: number) : void {
        this.balanceManager.addOperation(Label.fee, -value);
    }
  
    // se o índice for válido e representar uma operação de tarifa
    // adicione o mesmo valor tarifado, mas com label de reverse(extorno)
    public reverse(index: number): boolean {
        if (index < 0 || index > this.balanceManager.gExtract().length) {
            console.log ("fail: index " + index + " invalid");
            return false;
        }
        else if (this.balanceManager.gExtract()[index].getLabel() !== "fee") {
            console.log ("fail: index " + index + " is not a fee");
            return false
        }
        let value = this.balanceManager.gExtract()[index].getValue();
        this.balanceManager.addOperation(Label.reverse, -value);
        return true;

    }

    public withdraw(value: number) : boolean {
        if (this.balanceManager.getBalance() - value < 0) {
            console.log ("fail: insufficient balance");
            return false;
        }
        this.balanceManager.addOperation(Label.withdraw, -value);
        return true;
    }

    public getBalanceManager(index: number) {
        return (this.balanceManager.getExtract(index));
    }

    public toString(): String {
        return "account:"+ this.id + " balance:" + this.balanceManager.getBalance();
    }
}

class BalanceManager {
    
    private balance: number;
    private extract: Array<Operation>;
    private nextId: number

    public constructor() {
        this.balance = 0;
        this.extract = new Array<Operation>;
        this.nextId = 0;
    }

    public addOperation(label: Label, value: number) {
        this.balance += value;
        this.extract.push(new Operation(this.nextId, label, value, this.balance));
        this.nextId++;
    }

    public getBalance(): number {
        return this.balance;
    }

    public setBalance(value: number) {
        this.balance += value;
    }

    public gExtract() {
        return this.extract;
    }

    public getExtract(index: number): Array<Operation> {
        let ext = new Array<Operation>;
        if (index === 0) {
            return this.extract;
        }
        else {
            for (let i = this.extract.length - 1; i > this.extract.length - index - 1; i--) {
                ext.unshift(this.extract[i]);
            }
            return ext;
        }
    }

    public toString(): String {
        return "" + this.extract;
    }
}

class Operation {
    private index: number;
    private label: Label;
    private value: number
    private balance: number
    
    public constructor(index: number, label: Label, value: number, balance: number) {
        this.index = index;
        this.label = label;
        this.value = value;
        this.balance = balance;        
    }
  
    public toString() : String {
        let index = this.index.toString();
        let value = this.value.toString();
        let balance = this.balance.toString();

        return index.padStart(2) + ": "
             + this.label.padStart(8) + ": "
             + value.padStart(4) + ": "
             + balance.padStart(4);
    }

    public getBalance(): number {
        return this.balance;
    }
    public getIndex(): number {
        return this.index;
    }
    public getLabel() : Label {
        return this.label;
    }
    public getValue() : number {
        return this.value;
    }
}