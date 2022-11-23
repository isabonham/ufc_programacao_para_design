var Cents;
(function (Cents) {
    Cents[Cents["C10"] = 0] = "C10";
    Cents[Cents["C25"] = 1] = "C25";
    Cents[Cents["C50"] = 2] = "C50";
    Cents[Cents["C100"] = 3] = "C100";
})(Cents || (Cents = {}));
var Coin = /** @class */ (function () {
    function Coin(cents) {
        switch (cents) {
            case Cents.C10:
                this.value = 0.10;
                this.volume = 1;
                this.label = "C10";
                break;
            case Cents.C25:
                this.value = 0.25;
                this.volume = 2;
                this.label = "C25";
                break;
            case Cents.C50:
                this.value = 0.50;
                this.volume = 3;
                this.label = "C50";
                break;
            case Cents.C100:
                this.value = 1.00;
                this.volume = 4;
                this.label = "C100";
                break;
        }
    }
    Coin.prototype.getValue = function () {
        return this.value;
    };
    Coin.prototype.getVolume = function () {
        return this.volume;
    };
    Coin.prototype.getLabel = function () {
        return this.label;
    };
    Coin.prototype.toString = function () {
        return "value: ".concat(this.value, ",\n                volume: ").concat(this.volume, ",\n                label: ").concat(this.label);
    };
    return Coin;
}());
var Item = /** @class */ (function () {
    function Item(label, volume) {
        this.label = label;
        this.volume = volume;
    }
    Item.prototype.getLabel = function () {
        return this.label;
    };
    Item.prototype.getVolume = function () {
        return this.volume;
    };
    Item.prototype.setVolume = function (volume) {
        this.volume += volume;
    };
    Item.prototype.setLabel = function (label) {
        this.label = label;
    };
    Item.prototype.toString = function () {
        return "".concat(this.label);
    };
    return Item;
}());
var Pig = /** @class */ (function () {
    function Pig(volumeMax) {
        this.items = new Array();
        this.volumeMax = volumeMax;
        this.volume = 0;
        this.value = 0;
        this.broken = false;
    }
    Pig.prototype.addItem = function (item) {
        if (this.broken) {
            console.log("fail: the pig is broken");
            return false;
        }
        else if (item.getVolume() + this.volume > this.volumeMax) {
            console.log("fail: the pig is full");
            return false;
        }
        this.volume += item.getVolume();
        this.items.push(item.getLabel());
        return true;
    };
    Pig.prototype.addCoin = function (coin) {
        console.log("" + coin);
        if (this.broken) {
            console.log("fail: the pig is broken");
            return false;
        }
        else if (coin.getVolume() + this.volume > this.volumeMax) {
            console.log("fail: the pig is full");
            return false;
        }
        this.volume += coin.getVolume();
        this.value += coin.getValue();
        return true;
    };
    Pig.prototype.breakPig = function () {
        if (!this.broken) {
            this.broken = true;
            this.volume = 0;
            return true;
        }
        console.log("fail: the pig is almost broken");
        return false;
    };
    Pig.prototype.getCoins = function () {
        if (this.broken === true) {
            var aux = this.value;
            this.value = 0;
            return aux;
        }
        console.log("fail: you must break the pig first");
        return 0;
    };
    Pig.prototype.getItems = function () {
        if (this.broken === true) {
            var aux = this.items.join(", ");
            this.items = [];
            return "[" + aux + "]";
        }
        console.log("fail: you must break the pig first");
        return "[]";
    };
    Pig.prototype.toString = function () {
        var response = "";
        response = "[" + this.items.join(", ") + "]" + " : ";
        response += this.value.toFixed(2) + "$ : ";
        response += this.volume + "/" + this.volumeMax;
        response += " : " + (this.broken ? "broken" : "unbroken");
        return response;
    };
    return Pig;
}());
