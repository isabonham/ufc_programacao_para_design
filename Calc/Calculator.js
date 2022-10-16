/*
O QUE APRENDI: diferença entre js e ts >>>>> tipagens; aprendi também que dá pra chamar um método dentro de outro método;
COM QUEM APRENDI: com o professor durante a aula; tirei a dúvida sobre chamar um método dentro do outro pelo telegram quando tava resolvendo a questão em casa;
COMO APRENDI: prestando atenção no que o professor tava ensinando; tirando dúvida pelo telegram;

TEMPO: 1H
*/
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