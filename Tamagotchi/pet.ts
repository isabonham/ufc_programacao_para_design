class Pet {
    private energyMax: number;
    private hungryMax: number;
    private cleanMax: number;

    private energy: number;
    private hungry: number;
    private clean: number;

    private diamonds: number;
    private age: number;
    private alive: boolean;

    public constructor(energy: number, hungry: number, clean: number) {
        this.energyMax = energy;
        this.hungryMax = hungry;
        this.cleanMax = clean;

        this.energy = energy;
        this.hungry = hungry;
        this.clean = clean;

        this.diamonds = 0;
        this.age = 0;
        this.alive = true;
    }

    public setEnergy(value: number) {
        if(this.energy + value > this.energyMax) {
            this.energy = this.energyMax;
            return;
        }
        if(this.energy + value <= 0) {
            this.energy = 0;
            this.alive = false;
            console.log("fail: pet morreu de fraqueza");
            return;
        }
        this.energy += value;
    }

    public setHungry(value: number) {
        if(this.hungry + value > this.hungryMax) {
            this.hungry = this.hungryMax;
            return;
        }
        if(this.hungry + value <= 0) {
            this.hungry = 0;
            this.alive = false;
            console.log("fail: pet morreu de fome");
            return;
        }
        this.hungry += value;
    }

    public setClean(value: number) {
        if(this.clean + value > this.cleanMax) {
            this.clean = this.cleanMax;
            return;
        }
        if(this.clean + value <= 0) {
            this.alive = false;
            this.clean = 0;
            console.log("fail: pet morreu de sujeira");
            return;
        }
        this.clean += value;
    }

    public setDiamonds(value: number) {
        this.diamonds += value;
    }

    public setAge(value: number) {
        this.age += value;
    }

    public getEnergy(): number {
        return this.energy;
    }
    
    public getHungry(): number {
        return this.hungry;
    }

    public getClean(): number {
        return this.clean;
    }

    public getDiamonds(): number {
        return this.diamonds;
    }

    public getAge(): number {
        return this.age;
    }

    public getAlive(): boolean {
        return this.alive;
    }

    private testAlive(): boolean {
        if (!this.alive) {
            console.log("fail: pet esta morto");
            return false;
        }
        return true;
    }

    public eat() {
        if (!this.testAlive()) { 
            return;
        }
        this.setEnergy(-1);
        this.setHungry(4);
        this.setClean(-2);
        this.setAge(1);
    }

    public play() {
        if (!this.testAlive()) {
            return;
        }
        this.setEnergy(-2);
        this.setHungry(-1);
        this.setClean(-3);
        this.setDiamonds(1);
        this.setAge(1);
    }

    public shower() {
        if(!this.testAlive()){ 
            return;
        }
        this.setEnergy(-3);
        this.setHungry(-1);
        this.setClean(this.cleanMax);
        this.setAge(2);
    }

    public sleep() {
        if(!this.testAlive()){ 
            return;
        }
        if (this.energy > 15) {
            console.log ("fail: nao esta com sono");
            return;
        }
        this.setEnergy(this.energyMax);
        this.setAge(5);
        this.setHungry(-1);
    }

    public toString(): string {
        return  `E:${this.energy}/${this.energyMax}` 
            + `, S:${this.hungry}/${this.hungryMax}` 
            + `, L:${this.clean}/${this.cleanMax}` 
            + `, D:${this.diamonds}, I:${this.age}`;
    }
}