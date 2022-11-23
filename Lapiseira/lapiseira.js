var Lead = /** @class */ (function () {
    function Lead(calibre, dureza, tamanho) {
        this.thickness = calibre;
        this.hardness = dureza;
        this.size = tamanho;
    }
    Lead.prototype.usagePerSheet = function () {
        if (this.hardness === 'HB') {
            return 1;
        }
        if (this.hardness === '2B') {
            return 2;
        }
        if (this.hardness === '4B') {
            return 4;
        }
        if (this.hardness === '6B') {
            return 6;
        }
        return 0;
    };
    Lead.prototype.getThickness = function () {
        return this.thickness;
    };
    Lead.prototype.getHardness = function () {
        return this.hardness;
    };
    Lead.prototype.getSize = function () {
        return this.size;
    };
    Lead.prototype.setSize = function (size) {
        this.size += size;
    };
    Lead.prototype.toString = function () {
        return "".concat(this.thickness, ":").concat(this.hardness, ":").concat(this.size);
    };
    return Lead;
}());
var Pencil = /** @class */ (function () {
    function Pencil(thickness) {
        this.barrel = new Array();
        this.thickness = thickness;
        this.tip = null;
    }
    Pencil.prototype.insert = function (grafite) {
        if (grafite.getThickness() > this.thickness) {
            console.log("fail: calibre incompatível");
            return false;
        }
        this.barrel.push(new Lead(grafite.getThickness(), grafite.getHardness(), grafite.getSize()));
        return true;
    };
    Pencil.prototype.remove = function () {
        this.tip = null;
        return this.tip;
    };
    Pencil.prototype.pull = function () {
        if (this.tip !== null) {
            console.log("fail: ja existe grafite no bico");
            return false;
        }
        var grafite = this.barrel.shift();
        this.tip = new Lead(grafite.getThickness(), grafite.getHardness(), grafite.getSize());
        return true;
    };
    Pencil.prototype.writePage = function () {
        if (this.tip === null) {
            console.log("fail: nao existe grafite no bico");
        }
        else if (this.tip.getSize() <= 10) {
            console.log("fail: tamanho insuficiente");
        }
        else {
            if (this.tip.getHardness() === "HB") {
                if (this.tip.getSize() - 1 < 10) {
                    var x = 10 - this.tip.getSize();
                    this.tip.setSize(x);
                    console.log("fail: folha incompleta");
                }
                else {
                    this.tip.setSize(-1);
                }
            }
            else if (this.tip.getHardness() === "2B") {
                if (this.tip.getSize() - 2 < 10) {
                    var x = 10 - this.tip.getSize();
                    this.tip.setSize(x);
                    console.log("fail: folha incompleta");
                }
                else {
                    this.tip.setSize(-2);
                }
            }
            else if (this.tip.getHardness() === "4B") {
                if (this.tip.getSize() - 4 < 10) {
                    var x = 10 - this.tip.getSize();
                    this.tip.setSize(x);
                    console.log("fail: folha incompleta");
                }
                else {
                    this.tip.setSize(-4);
                }
            }
            else if (this.tip.getHardness() === "6B") {
                if (this.tip.getSize() - 6 < 10) {
                    var x = 10 - this.tip.getSize();
                    this.tip.setSize(x);
                    console.log("fail: folha incompleta");
                }
                else {
                    this.tip.setSize(-6);
                }
            }
        }
    };
    Pencil.prototype.toString = function () {
        var response = "calibre: " + this.thickness +
            ", bico: " + (this.tip != null ? "[" + this.tip + "]" : "[]") +
            ", tambor: {";
        for (var _i = 0, _a = this.barrel; _i < _a.length; _i++) {
            var g = _a[_i];
            response += "[" + g + "]";
        }
        response += "}";
        return response;
    };
    return Pencil;
}());
