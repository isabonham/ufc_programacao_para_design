var Lead = /** @class */ (function () {
    function Lead(calibre, dureza, tamanho) {
        this.thickness = calibre;
        this.hardness = dureza;
        this.size = tamanho;
    }
    Lead.prototype.usagePerSheet = function () {
        if (this.hardness === 'HB')
            return 1;
        if (this.hardness === '2B')
            return 2;
        if (this.hardness === '4B')
            return 4;
        if (this.hardness === '6B')
            return 6;
        return 0;
    };
    Lead.prototype.getThickness = function () {
        return this.thickness;
    };
    Lead.prototype.getSize = function () {
        return this.size;
    };
    Lead.prototype.getHardness = function () {
        return this.hardness;
    };
    Lead.prototype.setSize = function (value) {
        this.size += value;
    };
    Lead.prototype.setHardness = function (value) {
        this.hardness = value;
    };
    Lead.prototype.setThickness = function (value) {
        this.thickness = value;
    };
    Lead.prototype.toString = function () {
        //return "Grafite: " + this.calibre + ":" + this.dureza + ":" + this.tamanho;
        return "".concat(this.thickness, ":").concat(this.hardness, ":").concat(this.size);
    };
    return Lead;
}());
var Pencil = /** @class */ (function () {
    function Pencil(thickness) {
        this.thickness = thickness;
        this.tip = null;
    }
    Pencil.prototype.hasGrafite = function () {
        if (this.tip !== null) {
            return true;
        }
        return false;
    };
    Pencil.prototype.insert = function (grafite) {
        if (grafite.getThickness() > this.thickness) {
            console.log("fail: calibre incompativel");
            return false;
        }
        if (this.hasGrafite()) {
            console.log("fail: ja existe grafite");
            return false;
        }
        this.tip = new Lead(grafite.getThickness(), grafite.getHardness(), grafite.getSize());
        return true;
    };
    Pencil.prototype.remove = function () {
        this.tip = null;
        return this.tip;
    };
    Pencil.prototype.writePage = function () {
        if (!this.hasGrafite()) {
            console.log("fail: nao existe grafite");
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
        return "calibre: " + this.thickness +
            ", grafite: " + (this.tip != null ? "[" + this.tip.toString() + "]" : "null");
    };
    return Pencil;
}());
