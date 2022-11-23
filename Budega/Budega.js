var Pessoa = /** @class */ (function () {
    function Pessoa(nome) {
        this.nome = nome;
    }
    Pessoa.prototype.getNome = function () {
        return this.nome;
    };
    Pessoa.prototype.setNome = function (value) {
        this.nome = value;
    };
    Pessoa.prototype.toString = function () {
        return this.nome;
    };
    return Pessoa;
}());
var Budega = /** @class */ (function () {
    function Budega(qtdCaixas) {
        this.caixas = new Array();
        this.espera = new Array();
        for (var i = 0; i < qtdCaixas; i++) {
            this.caixas.push(null);
        }
    }
    Budega.prototype.chegar = function (pessoa) {
        this.espera.push(pessoa);
    };
    Budega.prototype.chamar = function (indice) {
        if (indice < 0 || indice >= this.caixas.length) {
            console.log("fail: indice invalido");
            return false;
        }
        if (this.caixas[indice] !== null) {
            console.log("fail: caixa ocupado");
            return false;
        }
        if (this.espera.length === 0) {
            console.log("fail: sem clientes");
            return false;
        }
        this.caixas[indice] = this.espera.shift();
        return true;
    };
    Budega.prototype.finalizar = function (indice) {
        if (indice < 0 || indice >= this.caixas.length) {
            console.log("fail: caixa inexistente");
            return false;
        }
        if (this.caixas[indice] === null) {
            console.log("fail: caixa vazio");
            return false;
        }
        this.caixas[indice] = null;
        return true;
    };
    // public furarFila (furao: Pessoa, besta: string): boolean {
    //     for (let i = 0; i < this.espera.length; i++) {
    //         if (this.espera[i].getNome() === besta) {
    //             this.espera.splice(i, 0, furao);
    //             return true;
    //         }
    //     }
    //     return false;
    // }
    // public guardarLugar (furao: Pessoa, amigo: string): boolean {
    //     for (let i = 0; i < this.espera.length; i++) {
    //         if (this.espera[i].getNome() === amigo) {
    //             let amg = this.espera.splice(i, 1, furao);
    //             this.espera.push(amg[0]);
    //             return true;
    //         }
    //     }
    //     return false;
    // }
    // public abandonar (nome: string) {
    //     for (let i = 0; i < this.caixas.length; i++) {
    //         // let pessoa = this.caixas[i];
    //         // if (pessoa !== null && pessoa.getNome() === nome) {
    //         if (this.caixas[i]?.getNome() === nome) {
    //             this.caixas[i] = null;
    //         }
    //     }
    // }
    Budega.prototype.toString = function () {
        var _a, _b;
        var saida = "Caixas: |";
        for (var i = 0; i < this.caixas.length; i++) {
            if (this.caixas[i] === null) {
                saida += " " + i + ":----- |";
            }
            else if (i === 0) {
                saida += " " + i + ": ";
                saida += ((_a = this.caixas) === null || _a === void 0 ? void 0 : _a[i]) + " |";
            }
            else {
                saida += " " + i + ":";
                saida += ((_b = this.caixas) === null || _b === void 0 ? void 0 : _b[i]) + " |";
            }
        }
        saida += "\nEspera: [";
        for (var i = 0; i < this.espera.length; i++) {
            if (i !== this.espera.length - 1) {
                saida += this.espera[i] + ", ";
            }
            else {
                saida += this.espera[i];
            }
        }
        saida += "]";
        return saida;
    };
    return Budega;
}());
function main() {
    // CASOS DE TESTE
    //#__case iniciar
    console.log("\n#__case iniciar\n");
    var budega1 = new Budega(2);
    console.log("" + budega1);
    //#__case arrive
    console.log("\n#__case arrive\n");
    budega1.chegar(new Pessoa("joão"));
    budega1.chegar(new Pessoa("maria"));
    budega1.chegar(new Pessoa("ana"));
    console.log("" + budega1);
    //#__case call
    console.log("\n#__case call\n");
    budega1.chamar(0);
    console.log("" + budega1);
    //#__case finish
    console.log("\n#__case finish\n");
    budega1.finalizar(0);
    console.log("" + budega1);
    //#__case iniciar2
    console.log("\n#__case iniciar2\n");
    var budega2 = new Budega(3);
    console.log("" + budega2);
    budega2.chegar(new Pessoa("joão"));
    budega2.chegar(new Pessoa("maria"));
    console.log("" + budega2);
    //#__case call
    console.log("\n#__case call\n");
    budega2.chamar(0);
    budega2.chamar(0);
    console.log("" + budega2);
    //#__case empty waiting
    console.log("\n#__case empty waiting\n");
    budega2.chamar(1);
    console.log("" + budega2);
    //#__case empty waiting
    console.log("\n#__case empty waiting\n");
    budega2.chamar(2);
    //#__case finish
    console.log("\n#__case finish\n");
    budega2.finalizar(0);
    budega2.finalizar(1);
    console.log("" + budega2);
    //#__case error
    console.log("\n#__case error\n");
    budega2.finalizar(3);
    budega2.finalizar(1);
}
main();
