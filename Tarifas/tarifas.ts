// essa enumeração guarda possíveis labels para as operações
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
    
    // adiciona valor à conta
    public deposit(value: number) : boolean {
        if (value < 0) {
            console.log ("fail: invalid value");
            return false;
        }
        this.balanceManager.addOperation(Label.deposit, value);
        // this.balanceManager.setBalance(value);
        return true;
    }

    // retira o dinheiro, mesmo que o balance fique negativo
    public fee(value: number) : void {
        // this.balanceManager.setBalance(-value);
        this.balanceManager.addOperation(Label.fee, -value);
    }
  
    // se o índice for válido e representar uma operação de tarifa
    // adicione o mesmo valor tarifado, mas com label de reverse(extorno)
    public reverse(index: number[]): boolean {
        console.log (index)
        for (let i = 0; i < index.length; i++) {
            if (index[i] < 0 || index[i] > this.balanceManager.getExtract.length) {
                console.log ("fail: index " + index[i] + " invalid");
            }
            // else if (this.balanceManager.getExtract[index[i]].getLabel() !== "fee") {
            //     console.log ("fail: index " + index[i] + " is not a fee");
            // }
        }
        return true;
    }
  
    // só realiza a operação se houver dinheiro suficiente na conta
    public withdraw(value: number) : boolean {
        if (this.balanceManager.getBalance() - value < 0) {
            console.log ("fail: insufficient balance");
            return false;
        }
        // this.balanceManager.setBalance(-value);
        this.balanceManager.addOperation(Label.withdraw, -value);
        return true;
    }

    public getBalanceManager(index: number) {
        return (this.balanceManager.getExtract(index));
        // return this.balanceManager.toString();
    }

    public toString(): String {
        return "account:"+ this.id + " balance:" + this.balanceManager.getBalance();
    }
}
  
//   nessa classe são efetivadas e registradas as alterações no saldo
class BalanceManager {
    
    private balance: number; // saldo do cliente
    private extract: Array<Operation>; // extrato
    private nextId: number

    public constructor() {
        this.balance = 0;
        this.extract = new Array<Operation>;
        this.nextId = 0;
    }
  
    // adiciona value ao balance
    // crie operação e adicione ao vetor de operações
    // incrementa o nextId
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

    // se qtdOp for 0, valor default, retornar todo o extrato
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

// operação guarda os dados de uma única operação
class Operation {
    private index: number;
    private label: Label;
    private value: number // valor em negativo se estiver diminuindo o saldo
    private balance: number // saldo residual apos operação
    
    public constructor(index: number, label: Label, value: number, balance: number) {
        this.index = index;
        this.label = label;
        this.value = value;
        this.balance = balance;        
    }
  
    public toString() : String {
        let value = this.value.toString();
        let balance = this.balance.toString();
        return " " + this.index + ": "
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

function main() {
  let chain = new Map();
  let ui = [];
  let conta = new Account(0);

  chain.set("show",     () => print("" + conta));
  chain.set("init",     () => conta = new Account(+ui[1]));
  chain.set("deposit",  () => conta.deposit(+ui[1]));
  chain.set("withdraw", () => conta.withdraw(+ui[1]));
  chain.set("fee",      () => conta.fee(+ui[1]));
  chain.set("extract",  () => console.log(conta.getBalanceManager(+ui[1]).map(x=> "" + x).join("\n").padStart(1)));
  chain.set("reverse",   () => conta.reverse(ui[1]));
  
  execute(chain, ui);
}

// ------------ Funções de Leitura --------------------

// Caso não interativo via moodle
let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.shift();

// Caso interativo via readline
// let readline = require("readline-sync")
// let input = () => readline.question();

// ------------ Funções de Escrita --------------------

let write = text => process.stdout.write("" + text);
let print = text => console.log(text);

// ------------ Funções de Formatação --------------------

// Função auxiliar para converter de string para vetor
// "[1,2,3,4]" para [1, 2, 3, 4]
function to_vet(token) {
    let size = token.length;
    let inside = token.substring(1, size - 1);
    return inside === "" ? [] : inside.split(",").map(x => +x)
}

//Converte de vetor para string sem inserir os espaços
//[1, 2, 3, 4] => "[1,2,3,4]"
function fmt(vet) {
    return "[" + vet.join(", ") + "]";
}

// ------------ Funções do Shell --------------------


let execute = (chain, ui) => __shell(chain, ui, true);
let shell   = (chain, ui) => __shell(chain, ui, false);

function __shell(chain, ui, on_moodle) {
    while (true) {
        if (!on_moodle)
            write("$")
        let line = input();
        if (on_moodle)
            print("$" + line);
            
        ui.splice(0); //apagar tudo
        line.split(" ").forEach(x => ui.push(x));
        
        let cmd = ui[0];
        if (cmd == "end") {
            return;
        } else if (chain.has(cmd)) {
            chain.get(cmd)();
        } else {
            print("fail: command not found");
        }
    }
}

main();