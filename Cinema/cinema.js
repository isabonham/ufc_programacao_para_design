var Client = /** @class */ (function () {
    function Client(name, fone, id) {
        this.name = name;
        this.fone = fone;
        this.id = 0;
    }
    Client.prototype.getName = function () {
        return this.name;
    };
    Client.prototype.getFone = function () {
        return this.fone;
    };
    Client.prototype.getId = function () {
        return this.id;
    };
    Client.prototype.setName = function (name) {
        this.name = name;
    };
    Client.prototype.setFone = function (fone) {
        this.fone = fone;
    };
    Client.prototype.setId = function (id) {
        this.id = id;
    };
    Client.prototype.toString = function () {
        return this.name + ":" + this.id;
    };
    return Client;
}());
var Cinema = /** @class */ (function () {
    function Cinema(size) {
        this.size = size;
        this.seat = new Array();
        for (var i = 0; i < size; i++) {
            this.seat.push(null);
        }
    }
    Cinema.prototype.reservar = function (name, fone, id) {
        if (id > this.size) {
            console.log("fail: cadeira nao existe");
            return false;
        }
        if (this.seat[id] !== null) {
            console.log("fail: cadeira ja esta ocupada");
            return false;
        }
        for (var _i = 0, _a = this.seat; _i < _a.length; _i++) {
            var s = _a[_i];
            if (s !== null && s.getName() === name) {
                console.log("fail: cliente ja esta no cinema");
                return false;
            }
        }
        this.seat[id] = new Client(name, fone, id);
        return true;
    };
    Cinema.prototype.cancelar = function (name) {
        for (var i = 0; i < this.seat.length; i++) {
            if (this.seat[i] !== null && this.seat[i].getName() === name) {
                this.seat[i] = null;
                return true;
            }
        }
        console.log("fail: cliente nao esta no cinema");
        return false;
    };
    Cinema.prototype.toString = function () {
        var response = "[";
        for (var i = 0; i < this.size; i++) {
            if (this.seat[i] === null) {
                response += "-";
            }
            else {
                response += this.seat[i].getName() + ":" + this.seat[i].getFone();
            }
            if (i !== this.seat.length - 1) {
                response += " ";
            }
        }
        response += "]";
        return response;
    };
    return Cinema;
}());
