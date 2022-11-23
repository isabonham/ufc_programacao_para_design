var Pessoa = /** @class */ (function () {
    function Pessoa(name, age) {
        this.name = name;
        this.age = age;
    }
    Pessoa.prototype.getAge = function () {
        return this.age;
    };
    Pessoa.prototype.getname = function () {
        return this.name;
    };
    Pessoa.prototype.toString = function () {
        return this.name + ":" + this.age;
    };
    return Pessoa;
}());
var Motoca = /** @class */ (function () {
    function Motoca(potencia) {
        if (potencia === void 0) { potencia = 1; }
        this.potencia = 1;
        this.time = 0;
        this.potencia = potencia;
        this.time = 0;
        this.pessoa = null;
    }
    Motoca.prototype.inserir = function (pessoa) {
        if (this.pessoa == null) {
            this.pessoa = pessoa;
            return true;
        }
        else {
            console.log("fail: busy motorcycle");
            return false;
        }
    };
    Motoca.prototype.remover = function () {
        if (this.pessoa == null) {
            console.log("fail: empty motorcycle");
            return null;
        }
        else {
            var aux = this.pessoa;
            this.pessoa = null;
            return aux;
        }
    };
    Motoca.prototype.comprarTempo = function (value) {
        this.time += value;
    };
    Motoca.prototype.drive = function (time) {
        if (this.pessoa.getAge() <= 10) {
            if (this.time <= 0) {
                console.log("fail: buy time first");
            }
            else if (time > this.time) {
                console.log("fail: time finished after " + this.time + " minutes");
                this.time = 0;
            }
            else {
                this.time -= time;
            }
        }
        else {
            console.log("fail: too old to drive");
        }
    };
    Motoca.prototype.buzinar = function () {
        var buzina = "P";
        for (var i = 0; i < this.potencia; i++) {
            buzina += "e";
        }
        buzina += "m";
        return buzina;
    };
    Motoca.prototype.toString = function () {
        return "power:".concat(this.potencia, ", time:").concat(this.time, ", person:") +
            "(" + (this.pessoa === null ? "empty" : "" + this.pessoa) + ")";
    };
    return Motoca;
}());
