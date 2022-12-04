class Client {
    id: string;
    accounts: Array<Account>;

    public constructor(id: string) {
        this.id = id;
        this.accounts = new Array();
    }
    
    public addAccount(account: Account) {
        this.accounts.push(account);
    }

    public toString() {
        return `${this.id} [${this.accounts[0].getId()}, ${this.accounts[1].getId()}]`
    }
}

abstract class Account {
    balance: number;
    idCliente: string;
    id: number;
    type: string;

    public constructor(id: number, idCliente: string) {
        this.balance = 0;
        this.idCliente = idCliente;
        this.id = id;
        this.type = "";
    }

    public deposite(value:number): boolean {
        this.balance += value;
        return true;
    }

    public attMensal() {
    }

    public transfer(account1: Account, account2: Account, value: number): boolean {
        if(this.balance - value < 0) {
            console.log("fail: saldo insuficiente");
            return false;
        }
        account1.balance -= value;
        account2.balance += value;
        return true;
    }

    public withdraw(value: number): boolean {
        if(this.balance - value < 0) {
            console.log("fail: saldo insuficiente");
            return false;
        }
        this.balance -= value;
        return true;
    }
 
    public getId(): number {
        return this.id;
    }
    
    public getBalance(): number {
        return this.balance;
    }

    public toString() {
        return `${this.id}:${this.idCliente}:${this.balance.toFixed(2)}:${this.type}`;
    }
}

class CC extends Account {
    public constructor(id: number, idCliente: string) {
        super(id, idCliente);
        this.type = "CC";
    }

    public attMensal(): void {
        this.balance -= 20;
    }
}

class CP extends Account {
    public constructor(id: number, idCliente: string) {
        super(id, idCliente);
        this.type = "CP";
    }

    public attMensal(): void {
        this.balance += this.balance*0.01;
    }
}

class Bank {
    accounts: Map<number, Account>;
    clients: Map<string, Client>;
    NextId: number;

    public constructor() {
        this.accounts = new Map();
        this.clients = new Map();
        this.NextId = 0;
    }

    public addCliente(client: string) {
        if(this.clients.has(client)) {
            return console.log("Cliente já cadastrado");
        }

        let cli: Client = new Client(client);
        let cc: CC = new CC(this.NextId, client);
        this.NextId++;
        let cp: CP = new CP(this.NextId, client);
        this.NextId++;
        cli.addAccount(cc);
        cli.addAccount(cp);
        this.clients.set(client, cli);
        this.accounts.set(cc.getId(), cc);
        this.accounts.set(cp.getId(), cp);
    }

    public deposite(idAccount: number, value: number): boolean {
        let account = this.accounts.get(idAccount);
        if(account === undefined){
            console.log("fail: conta nao existe");
            return false;
        }
        account!.deposite(value);
        return true;
    }

    public attMensal() {
        for(let accounts of this.accounts.values()) {
            accounts.attMensal();
        }
    }

    public transfer(accountFrom: number, accountForf: number, value: number) {
        let from = this.accounts.get(accountFrom);
        let forf = this.accounts.get(accountForf);
        if(from === undefined || forf === undefined ){
            console.log("fail: conta nao encontrada");
            return false;
        }
        from!.transfer(from, forf, value);
    }

    public withdraw(idAccount: number, value: number) {
        let account = this.accounts.get(idAccount);
        if(account === undefined) {
            console.log("fail: conta nao existe");
        }
        account!.withdraw(value);
    }

    public toString(): string {
        let saida =`Clients:\n`;
        for(let cli of this.clients.values()) {
            saida += "- ";
            saida += `${cli.toString()}\n`;
        }
        saida += `Accounts:\n`;
        for(let acc of this.accounts.values()) {
            saida += `${acc.toString()}\n`;
        }      
        return saida;
    }
}