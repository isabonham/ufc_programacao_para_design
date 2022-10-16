var Caculator = /** @class */ (function () {
    function Caculator(batteryMax) {
        this.batteryMax = batteryMax;
        this.battery = 0;
        this.display = 0;
    }
    Caculator.prototype.chargeBattery = function (value) {
        this.battery += value;
        if (this.battery > this.batteryMax) {
            this.battery = this.batteryMax;
        }
    };
    Caculator.prototype.useBattery = function () {
        if (this.battery === 0) {
            console.log("fail: bateria insuficiente");
            return false;
        }
        else {
            this.battery--;
            return true;
        }
    };
    Caculator.prototype.sum = function (a, b) {
        if (this.useBattery()) {
            this.display = a + b;
        }
    };
    Caculator.prototype.division = function (num, den) {
        if (this.useBattery()) {
            if (den === 0) {
                console.log("fail: divisao por zero");
            }
            else {
                this.display = num / den;
            }
        }
    };
    Caculator.prototype.toString = function () {
        return "display = " + this.display.toFixed(2) + ", battery = " + this.battery;
    };
    return Caculator;
}());