var Car = /** @class */ (function () {
    function Car() {
        this.pass = 0;
        this.passMax = 2;
        this.gas = 0;
        this.gasMax = 100;
        this.km = 0;
    }
    Car.prototype.toString = function () {
        return "pass: " + this.pass + ", gas: " + this.gas + ", km: " + this.km;
    };
    Car.prototype.enter = function () {
        if (this.pass === this.passMax) {
            console.log("fail: limite de pessoas atingido");
        }
        else {
            this.pass += 1;
        }
    };
    Car.prototype.leave = function () {
        if (this.pass === 0) {
            console.log("fail: nao ha ninguem no carro");
        }
        else {
            this.pass -= 1;
        }
    };
    Car.prototype.fuel = function (gas) {
        this.gas += gas;
        if (this.gas > this.gasMax) {
            this.gas = this.gasMax;
        }
    };
    Car.prototype.drive = function (km) {
        if (this.pass === 0) {
            console.log("fail: nao ha ninguem no carro");
            return;
        }
        else if (this.gas === 0) {
            console.log("fail: tanque vazio");
            return;
        }
        else if (km > this.gas) {
            console.log("fail: tanque vazio apos andar " + this.gas + " km");
            this.km += this.gas;
            this.gas = 0;
        }
        else {
            while (km > 0) {
                this.km++;
                this.gas--;
                km--;
            }
        }
    };
    return Car;
}());