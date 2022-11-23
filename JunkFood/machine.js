var Slot = /** @class */ (function () {
    function Slot(name, quantity, price) {
        this.name = name;
        this.quantity = quantity;
        this.price = price;
    }
    Slot.prototype.getName = function () {
        return this.name;
    };
    Slot.prototype.getPrice = function () {
        return this.price;
    };
    Slot.prototype.getQuantity = function () {
        return this.quantity;
    };
    Slot.prototype.setName = function (name) {
        this.name = name;
    };
    Slot.prototype.setPrice = function (price) {
        this.price = price;
    };
    Slot.prototype.setQuantity = function (quantity) {
        this.quantity += quantity;
    };
    Slot.prototype.toString = function () {
        return this.name + " : " + this.quantity + " U : " + this.price.toFixed(2) + " RS]";
    };
    return Slot;
}());
var Machine = /** @class */ (function () {
    function Machine(capacity) {
        this.capacity = capacity;
        this.cash = 0;
        this.slots = [];
        for (var i = 0; i < this.capacity; i++) {
            this.slots.push(new Slot("  empty", 0, 0));
        }
    }
    Machine.prototype.getSlot = function (index) {
        if (this.slots.length === 0) {
            return null;
        }
        return this.slots[index];
    };
    Machine.prototype.getProfit = function () {
        return this.profit;
    };
    Machine.prototype.getCash = function () {
        return this.cash;
    };
    Machine.prototype.setSlot = function (index, slot) {
        if (index < 0 || index > this.capacity) {
            console.log("fail: indice nao existe");
            return false;
        }
        if (slot === null) {
            this.slots[index] = new Slot("  empty", 0, 0);
            return false;
        }
        this.slots[index] = new Slot(slot.getName(), slot.getQuantity(), slot.getPrice());
        return true;
    };
    Machine.prototype.clearSlot = function (index) {
        this.setSlot(index, new Slot("  empty", 0, 0));
    };
    Machine.prototype.insertCash = function (cash) {
        this.cash += cash;
    };
    Machine.prototype.withdrawCach = function () {
        this.profit = this.cash;
        this.cash = 0;
        console.log("voce recebeu " + this.profit.toFixed(2) + " RS");
        return this.profit;
    };
    Machine.prototype.buyItem = function (index) {
        if (index < 0 || index > this.capacity) {
            console.log("fail: indice nao existe");
            return false;
        }
        if (this.cash < this.slots[index].getPrice()) {
            console.log("fail: saldo insuficiente");
            return false;
        }
        if (this.slots[index].getQuantity() <= 0) {
            console.log("fail: espiral sem produtos");
            return false;
        }
        this.slots[index].setQuantity(-1);
        this.cash -= this.slots[index].getPrice();
        console.log("voce comprou um " + this.slots[index].getName());
        return true;
    };
    Machine.prototype.toString = function () {
        var line = "";
        line += "saldo: " + this.cash.toFixed(2) + "\n";
        for (var i = 0; i < this.capacity; i++) {
            line += i + " [ ";
            line += "" + this.slots[i];
            if (i < this.capacity - 1) {
                line += "\n";
            }
        }
        return line;
    };
    return Machine;
}());
