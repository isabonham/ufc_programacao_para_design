class Cliente {
    id: string;
    contas: Array<Conta>;

    public constructor(id: string) {
        this.id = id;
        this.contas = new Array();
    }
    
    addConta(conta: Conta) {
        this.contas.push(conta);
    }

    toString() {
        return `${this.id} [${this.contas[0].getId()}, ${this.contas[1].getId()}]`
    }
}

abstract class Conta {
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

    depositar(value:number): boolean {
        this.balance += value;
        return true;
    }

    attMensal() {
    }

    transferir(outra: Conta, value: number): boolean {
        if(this.balance - value < 0) {
            console.log("fail: saldo insuficiente");
            return false;
        }
        outra.balance += value;
        return true;
    }

    sacar(value: number): boolean {
        if (this.balance - value < 0) {
            console.log("fail: saldo insuficiente");
            return false;
        }
        this.balance -= value;
        return true;
    }

    toString() {
        return `${this.id}:${this.idCliente}:${this.balance.toFixed(2)}:${this.type}`;
    }

    getId() {
        return this.id;
    }

    getBalance() {
        return this.balance;
    }
}

class CC extends Conta {
    public constructor(id: number, idCliente: string) {
        super(id, idCliente);
        this.type = "CC";
    }

    attMensal(): void {
        this.balance -= 20;
    }
}

class CP extends Conta {
    public constructor(id: number, idCliente: string) {
        super(id, idCliente);
        this.type = "CP";
    }

    attMensal(): void {
        this.balance += this.balance*0.01;
    }
}

class Banco {
    contas: Map<number, Conta>;
    clientes: Map<string, Cliente>;
    proximoIdConta: number;

    public constructor() {
        this.contas = new Map();
        this.clientes = new Map();
        this.proximoIdConta = 0;
    }

    addCliente(cliente: string) {
        if (this.clientes.has(cliente)) {
            return console.log("Cliente já cadastrado");
        }

        let cli: Cliente = new Cliente(cliente);
        let cc: CC = new CC(this.proximoIdConta, cliente);
        this.proximoIdConta++;
        let cp: CP = new CP(this.proximoIdConta, cliente);
        this.proximoIdConta++;
        cli.addConta(cc);
        cli.addConta(cp);
        this.clientes.set(cliente, cli);
        this.contas.set(cc.getId(), cc);
        this.contas.set(cp.getId(), cp);
    }

    depositar(idConta: number, value: number): boolean {
        let conta = this.contas.get(idConta);
        if (conta === undefined){
            console.log("fail: conta nao existe");
            return false;
        }
        conta!.depositar(value);
        return true;
    }

    attMensal() {
        for (let contas of this.contas.values()) {
            contas.attMensal();
        }
    }

    transferir(contaDe: number, contaPara: number, value: number) {
        let de = this.contas.get(contaDe);
        let para = this.contas.get(contaPara);
        if (de === undefined || para === undefined ){
            console.log("fail: conta nao encontrada");
            return false;
        }
        de!.transferir(para, value);
    }

    sacar (idConta: number, value: number) {
        let conta = this.contas.get(idConta);
        if (conta === undefined) {
            console.log("fail: conta nao existe");
        }
        conta!.sacar(value);
    }

    toString() {
        let saida =`Clients:\n`;
        for (let cli of this.clientes.values()) {
            saida += "- ";
            saida += `${cli.toString()}\n`;
        }
        saida += `Accounts:\n`;
        for (let con of this.contas.values()) {
            saida += `${con.toString()}\n`;
        }      
        return saida;
    }
}