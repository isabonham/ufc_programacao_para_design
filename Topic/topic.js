var Pass = /** @class */ (function () {
    function Pass(name, age) {
        this.name = name;
        this.age = age;
    }
    Pass.prototype.getName = function () {
        return this.name;
    };
    Pass.prototype.getAge = function () {
        return this.age;
    };
    Pass.prototype.setName = function (name) {
        this.name = name;
    };
    Pass.prototype.setAge = function (age) {
        this.age = age;
    };
    Pass.prototype.toString = function () {
        return this.name + ":" + this.age;
    };
    return Pass;
}());
var Topic = /** @class */ (function () {
    function Topic(size, preference) {
        this.size = size;
        this.preference = preference;
        this.seat = new Array();
        for (var i = 0; i < this.size; i++) {
            this.seat.push(null);
        }
    }
    Topic.prototype.inserir = function (name, age) {
        for (var _i = 0, _a = this.seat; _i < _a.length; _i++) {
            var s = _a[_i];
            if (s !== null && s.getName() === name) {
                console.log("fail: " + name + " ja esta na topic");
                return false;
            }
        }
        if (age > 65) {
            for (var i = 0; i < this.preference; i++) {
                if (this.seat[i] === null) {
                    this.seat[i] = new Pass(name, age);
                    return true;
                }
            }
            for (var j = this.preference; j < this.size; j++) {
                if (this.seat[j] === null) {
                    this.seat[j] = new Pass(name, age);
                    return true;
                }
            }
        }
        else {
            for (var j = this.preference; j < this.size; j++) {
                if (this.seat[j] === null) {
                    this.seat[j] = new Pass(name, age);
                    return true;
                }
            }
            for (var i = 0; i < this.preference; i++) {
                if (this.seat[i] === null) {
                    this.seat[i] = new Pass(name, age);
                    return true;
                }
            }
        }
        console.log("fail: topic lotada");
        return false;
    };
    Topic.prototype.sair = function (name) {
        for (var i = 0; i < this.seat.length; i++) {
            if (this.seat[i] !== null && this.seat[i].getName() === name) {
                this.seat[i] = null;
                return true;
            }
        }
        console.log("fail: " + name + " nao esta na topic");
        return false;
    };
    Topic.prototype.toString = function () {
        var response = "[";
        for (var i = 0; i < this.preference; i++) {
            if (this.seat[i] === null) {
                response += "@ ";
            }
            else {
                response += "@" + this.seat[i].getName() + ":" + this.seat[i].getAge() + " ";
            }
        }
        for (var i = this.preference; i < this.size; i++) {
            if (this.seat[i] === null) {
                response += "=";
            }
            else {
                response += "=" + this.seat[i].getName() + ":" + this.seat[i].getAge();
            }
            if (i !== this.size - 1) {
                response += " ";
            }
        }
        response += "]";
        return response;
    };
    return Topic;
}());
