class Carro {
    public pass: number;
    public passMax: number;
    public gas: number;
    public gasMax: number;
    public km: number;

    public constructor () {
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
    
    fuel(gas: number) {
      this.gas += gas;
      if(this.gas > this.gasMax) {
        this.gas = this.gasMax;
      }
    }

    drive (km: number) {
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

let carro1 = new Carro();

//#__case inicializar
console.log("\n#__case inicializar\n");

console.log("" + carro1);
carro1.enter();
carro1.enter();
console.log("" + carro1);
carro1.enter();
console.log("" + carro1);
carro1.leave();
carro1.leave();
carro1.leave();
console.log("" + carro1);

//#__case abastecer
console.log("\n#__case abastecer\n");

carro1.fuel(60);
console.log("" + carro1);

//#__case dirigir vazio
console.log("\n#__case dirigir vazio\n");

carro1.drive(10);

//#__case dirigir
console.log("\n#__case dirigir\n");

carro1.enter();
carro1.drive(10);
console.log("" + carro1);

//#__case para longe
console.log("\n#__case para longe\n");

carro1.drive(70);
carro1.drive(10);
console.log("" + carro1);

//#__case enchendo o tanque
console.log("\n#__case enchendo o tanque\n");

carro1.fuel(200);
console.log("" + carro1);

//#__end__
console.log("\n#__end__\n");