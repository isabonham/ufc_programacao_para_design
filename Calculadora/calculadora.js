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

//#__case iniciar mostrar e recarregar
console.log("\n#__case iniciar mostrar e recarregar\n");

let calc1 = new Calculator(5);

console.log("" + calc1);
calc1.chargeBattery(3);
console.log("" + calc1);
calc1.chargeBattery(1);
console.log("" + calc1);
calc1.chargeBattery(1);
console.log("" + calc1);

let calc2 = new Calculator(4);

calc2.chargeBattery(2);
console.log("" + calc2);
calc2.chargeBattery(3);
console.log("" + calc2);

//#__case somando
console.log("\n#__case somando\n");

let calc3 = new Calculator(2);

calc3.chargeBattery(2);
calc3.sum(4, 3);
console.log("" + calc3);
calc3.sum(2, 3);
console.log("" + calc3);
calc3.sum(-4, -1);
calc3.chargeBattery(1);
console.log("" + calc3);
calc3.sum(-4, -2);
console.log("" + calc3);

//#__case dividindo
console.log("\n#__case dividindo\n");

let calc4 = new Calculator(3);

calc4.chargeBattery(3);
calc4.division(6, 3);
calc4.division(7, 0);
console.log("" + calc4);
calc4.division(7, 2);
calc4.division(10, 2);
console.log("" + calc4);

//#__end__
console.log("\n#__end__\n");