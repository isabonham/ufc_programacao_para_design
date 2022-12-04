class Person {
    private name: string;
    private age: number;

    public constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    public getName(): string {
        return this.name;
    }

    public getAge(): number {
        return this.age;
    }

    public toString(): string {
        return this.name + ":" + this.age;
    }
}

class Motoca {
    potency: number = 1;
    time: number = 0;
    person: Person | null;
  
    public constructor(potency: number = 1) {
        this.potency = potency;
        this.time = 0;
        this.person = null;
    }
  
    has(): boolean {
        if(this.person === null) {
            return false;
        }
        return true;
    }

    inserir(person: Person): boolean {
        if(this.has()) {
            console.log("fail: busy motorcycle");
            return false;
        }
        this.person = person;
        return true;
    }
  
    remover(): Person | null {
        if(!this.has()) {
            console.log("fail: empty motorcycle");
            return null;
        }
        let aux = this.person;
        this.person = null;
        return aux;
    }
  
    comprarTempo(value: number) {
        this.time += value;
    }
  
    drive(time: number): void {
        if(this.person!.getAge() <= 10) {
            if(this.time <= 0) {
                console.log("fail: buy time first");
                return;
            }
            else if(time > this.time) {
                console.log("fail: time finished after " + this.time + " minutes");
                this.time = 0;
                return;
            }
            this.time -= time;
            return;
        }
        console.log("fail: too old to drive");
    }
  
    buzinar(): string {
        let buzina = "P";
        for (let i = 0; i < this.potency; i++) {
            buzina += "e";
        }
        buzina += "m";
        return buzina;
    }
  
    public toString(): string {
      return `power:${this.potency}, time:${this.time}, person:` + 
              "(" +  (this.person === null ? "empty" : "" + this.person) + ")";
    }

}