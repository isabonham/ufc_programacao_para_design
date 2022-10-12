class Pessoa {
  private name: string;
  private age: number;

  public constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  public getAge(): number {
    return this.age;
  }
  public getname(): string {
    return this.name;
  }

  public toString(): string {
    return this.name + ":" + this.age;
  }
}

class Motoca {
  potencia: number = 1;
  time: number = 0;
  pessoa: Pessoa | null;

  constructor(potencia: number = 1) {
      this.potencia = potencia;
      this.time = 0;
      this.pessoa = null;
  }

  inserir(pessoa: Pessoa): boolean {
    if (this.pessoa == null) {
        this.pessoa = pessoa;
        return true;
    }
    else {
      console.log("fail: busy motorcycle");
      return false;
    }
  }

  remover(): Pessoa | null {
    if (this.pessoa == null) {
      console.log("fail: empty motorcycle");
      return null;
    }
    else {
      let aux = this.pessoa;
      this.pessoa = null;
      return aux;
    }
  }

  comprarTempo(value: number) {
    this.time += value;
  }

  drive(time: number): void {
    if (this.pessoa!.getAge() <= 10) {
      if (this.time <= 0) {
        console.log("fail: buy time first");
      }
      else if (time > this.time) {
        console.log("fail: time finished after " + this.time + " minutes");
        this.time = 0;
      }
      else {
        this.time -= time;
      }
    }
    else {
      console.log("fail: too old to drive");
    }
  }

  buzinar(): string {
    let buzina = "P";
    for (let i = 0; i < this.potencia; i++) {
      buzina += "e";
    }
    buzina += "m";

    return buzina;
  }

  public toString(): string {
    return `power:${this.potencia}, time:${this.time}, person:` + 
            "(" +  (this.pessoa === null ? "empty" : "" + this.pessoa) + ")";
  }
}