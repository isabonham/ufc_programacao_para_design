/*
O QUE APRENDI: diferença entre js e ts >>>>> tipagens; aprendi também que dá pra chamar um método dentro de outro método;
COM QUEM APRENDI: com o professor durante a aula; tirei a dúvida sobre chamar um método dentro do outro pelo telegram quando tava resolvendo a questão em casa;
COMO APRENDI: prestando atenção no que o professor tava ensinando; tirando dúvida pelo telegram;

TEMPO: 1H
*/

class Calculator {
    public batteryMax: number;
    public battery: number;
    public display: number;

    public constructor(batteryMax: number) {
      this.batteryMax = batteryMax;
      this.battery = 0;
      this.display = 0;
    }

    chargeBattery(value: number) {
      this.battery += value;
      if(this.battery > this.batteryMax) {
        this.battery = this.batteryMax;
      }
    }

    useBattery(): boolean {
      if(this.battery === 0) {
        console.log("fail: bateria insuficiente");
        return false;
      }
      else {
        this.battery--;
        return true;
      }
    }

    sum(a: number, b: number) {
      if(this.useBattery()) {
        this.display = a + b;
      }
    }

    division(num: number, den: number) {
      if(this.useBattery()) {
        if(den === 0) {
          console.log("fail: divisao por zero");
        }
        else {
          this.display = num / den;
        }
      }
    }

    toString(): string { 
        return "display = " + this.display.toFixed(2) + ", battery = " + this.battery;
    }
}

// CASOS DE TESTE

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