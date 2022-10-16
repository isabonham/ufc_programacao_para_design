/*
O QUE APRENDI: diferença entre js e ts >>>>> tipagens; aprendi também que dá pra chamar um método dentro de outro método;
COM QUEM APRENDI: com o professor durante a aula; tirei a dúvida sobre chamar um método dentro do outro pelo telegram quando tava resolvendo a questão em casa;
COMO APRENDI: prestando atenção no que o professor tava ensinando; tirando dúvida pelo telegram;

TEMPO: 1H
*/

class Calculator {
    batteryMax;
    battery;
    display;

    constructor(batteryMax) {
      this.batteryMax = batteryMax;
      this.battery = 0;
      this.display = 0;
    }

    chargeBattery(value) {
      this.battery += value;
      if(this.battery > this.batteryMax) {
        this.battery = this.batteryMax;
      }
    }

    useBattery() {
      if(this.battery === 0) {
        console.log("fail: bateria insuficiente");
        return false;
      }
      else {
        this.battery--;
        return true;
      }
    }

    sum(a, b) {
      if(this.useBattery()) {
        this.display = a + b;
      }
    }

    division(num, den) {
      if(this.useBattery()) {
        if(den === 0) {
          console.log("fail: divisao por zero");
        }
        else {
          this.display = num / den;
        }
      }
    }

    toString() { 
        return "display = " + this.display.toFixed(2) + ", battery = " + this.battery;
    }
}