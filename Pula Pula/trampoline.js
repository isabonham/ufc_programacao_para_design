var Kid = /** @class */ (function () {
    function Kid(name, age) {
        this.name = name;
        this.age = age;
    }
    Kid.prototype.getName = function () {
        return this.name;
    };
    Kid.prototype.getAge = function () {
        return this.age;
    };
    Kid.prototype.toString = function () {
        return "".concat(this.name, ", ").concat(this.age);
    };
    return Kid;
}());
var Trampoline = /** @class */ (function () {
    function Trampoline() {
        this.playing = new Array();
        this.waiting = new Array();
    }
    Trampoline.prototype.arrive = function (kid) {
        this.waiting.unshift(kid);
        return true;
    };
    Trampoline.prototype.enter = function () {
        if (this.waiting.length == 0) {
            return "não há ninguém na fila";
        }
        if (this.size === this.playing.length) {
            return console.log("pulapula cheio");
        }
        this.playing.unshift(this.waiting[this.waiting.length - 1]);
        this.waiting.pop();
    };
    Trampoline.prototype.leave = function () {
        if (this.playing.length == 0) {
            return "não há ninguem no pulapula";
        }
        var kid = this.playing[this.playing.length - 1];
        this.waiting.unshift(kid);
        this.playing.pop();
    };
    Trampoline.prototype.remove = function (kid) {
        var _a;
        if (this.waiting.length == 0 && this.playing.length == 0) {
            return ("pulapula e fila vazios");
        }
        for (var i = 0; i < this.waiting.length; i++) {
            if (this.waiting[i].getName() == kid) {
                this.waiting.splice(i, 1);
                break;
            }
        }
        for (var i = 0; i < this.playing.length; i++) {
            if (((_a = this.playing[i]) === null || _a === void 0 ? void 0 : _a.getName()) == kid) {
                this.playing.splice(i, 1);
                break;
            }
        }
    };
    Trampoline.prototype.toString = function () {
        var response = "[";
        for (var i = 0; i < this.waiting.length; i++) {
            response += this.waiting[i].getName() + ":" + this.waiting[i].getAge();
            if (i === this.waiting.length - 1) {
                response += "]";
            }
            else {
                response += ", ";
            }
        }
        if (this.waiting.length === 0) {
            response += "]";
        }
        response += " => [";
        for (var i = 0; i < this.playing.length; i++) {
            response += this.playing[i].getName() + ":" + this.playing[i].getAge();
            if (i === this.playing.length - 1) {
                response += "]";
            }
            else {
                response += ", ";
            }
        }
        if (this.playing.length === 0) {
            response += "]";
        }
        return response;
    };
    return Trampoline;
}());
