var Calculator = /** @class */ (function () {
    function Calculator(batteryMax) {
        this.batteryMax = batteryMax;
        this.battery = 0;
        this.display = 0;
    }
    Calculator.prototype.chargeBattery = function (value) {
        this.battery += value;
        if (this.battery > this.batteryMax) {
            this.battery = this.batteryMax;
        }
    };
    Calculator.prototype.useBattery = function () {
        if (this.battery === 0) {
            console.log("fail: bateria insuficiente");
            return false;
        }
        this.battery--;
        return true;
    };
    Calculator.prototype.sum = function (a, b) {
        if (this.useBattery()) {
            this.display = a + b;
        }
    };
    Calculator.prototype.division = function (num, den) {
        if (this.useBattery()) {
            if (den === 0) {
                console.log("fail: divisao por zero");
                return;
            }
            this.display = num / den;
        }
    };
    Calculator.prototype.toString = function () {
        return "display = " + this.display.toFixed(2) + ", battery = " + this.battery;
    };
    return Calculator;
}());
