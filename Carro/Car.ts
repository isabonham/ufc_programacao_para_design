class Car {
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

    drive(km: number) {
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