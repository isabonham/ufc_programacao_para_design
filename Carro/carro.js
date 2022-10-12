/*
O QUE APRENDI: o que são atributos e para que servem os métodos;
COM QUEM APRENDI: com o professor durante a aula;
COMO APRENDI: prestando atenção no que o professor tava ensinando;

TEMPO: 1H 30min >>>>> tempo da aula
*/

class Car {
    pass;
    passMax;
    gas;
    gasMax;
    km;

    constructor() {
      this.pass = 0;
      this.passMax = 2;
      this.gas = 0;
      this.gasMax = 100;
      this.km = 0;
    }

    toString() {
      return "pass: " + this.pass + ", gas: " + this.gas + ", km: " + this.km;
    }

    enter() {
      if(this.pass === this.passMax) {
        console.log("fail: limite de pessoas atingido");
      }
      else {
        this.pass += 1;
      }
    }

    leave() {
      if(this.pass === 0) {
        console.log("fail: nao ha ninguem no carro");
      }
      else {
        this.pass -= 1;
      }
    }
    
    fuel(gas) {
      this.gas += gas;
      if(this.gas > this.gasMax) {
        this.gas = this.gasMax;
      }
    }

    drive(km) {
      if(this.pass === 0) {
        console.log("fail: nao ha ninguem no carro");
        return;
      }
      else if(this.gas === 0) {
        console.log("fail: tanque vazio");
        return;
      }
      else if(km > this.gas){
        console.log("fail: tanque vazio apos andar "+ this.gas + " km");
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
    }    
}

let car = new Car();

//#__case inicializar
console.log("\n#__case inicializar\n");

console.log("" + car);
car.enter();
car.enter();
console.log("" + car);
car.enter();
console.log("" + car);
car.leave();
car.leave();
car.leave();
console.log("" + car);

//#__case abastecer
console.log("\n#__case abastecer\n");

car.fuel(60);
console.log("" + car);

//#__case dirigir vazio
console.log("\n#__case dirigir vazio\n");

car.drive(10);

//#__case dirigir
console.log("\n#__case dirigir\n");

car.enter();
car.drive(10);
console.log("" + car);

//#__case para longe
console.log("\n#__case para longe\n");

car.drive(70);
car.drive(10);
console.log("" + car);

//#__case enchendo o tanque
console.log("\n#__case enchendo o tanque\n");

car.fuel(200);
console.log("" + car);

//#__end__
console.log("\n#__end__\n");