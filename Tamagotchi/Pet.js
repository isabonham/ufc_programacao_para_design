var Pet = /** @class */ (function () {
    function Pet(energy, hungry, clean) {
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
    Pet.prototype.setEnergy = function (value) {
        if (this.energy + value > this.energyMax) {
            this.energy = this.energyMax;
            return;
        }
        if (this.energy + value <= 0) {
            this.energy = 0;
            this.alive = false;
            console.log("fail: pet morreu de fraqueza");
            return;
        }
        this.energy += value;
    };
    Pet.prototype.setHungry = function (value) {
        if ((this.hungry + value) > this.hungryMax) {
            this.hungry = this.hungryMax;
            return;
        }
        if (this.hungry + value <= 0) {
            this.hungry = 0;
            this.alive = false;
            console.log("fail: pet morreu de fome");
            return;
        }
        this.hungry += value;
    };
    Pet.prototype.setClean = function (value) {
        if (this.clean + value > this.cleanMax) {
            this.clean = this.cleanMax;
            return;
        }
        if (this.clean + value <= 0) {
            this.alive = false;
            this.clean = 0;
            console.log("fail: pet morreu de sujeira");
            return;
        }
        this.clean += value;
    };
    Pet.prototype.setDiamonds = function (value) {
        this.diamonds += value;
    };
    Pet.prototype.setAge = function (value) {
        this.age += value;
    };
    Pet.prototype.getEnergy = function () {
        return this.energy;
    };
    Pet.prototype.getHungry = function () {
        return this.hungry;
    };
    Pet.prototype.getClean = function () {
        return this.clean;
    };
    Pet.prototype.getDiamonds = function () {
        return this.diamonds;
    };
    Pet.prototype.getAge = function () {
        return this.age;
    };
    Pet.prototype.getAlive = function () {
        return this.alive;
    };
    Pet.prototype.testAlive = function () {
        if (!this.alive) {
            console.log("fail: pet esta morto");
            return false;
        }
        return true;
    };
    Pet.prototype.eat = function () {
        if (!this.testAlive()) {
            return;
        }
        this.setEnergy(-1);
        this.setHungry(4);
        this.setClean(-2);
        this.setAge(1);
    };
    Pet.prototype.play = function () {
        if (!this.testAlive()) {
            return;
        }
        this.setEnergy(-2);
        this.setHungry(-1);
        this.setClean(-3);
        this.setDiamonds(1);
        this.setAge(1);
    };
    Pet.prototype.shower = function () {
        if (!this.testAlive()) {
            return;
        }
        this.setEnergy(-3);
        this.setHungry(-1);
        this.setClean(this.cleanMax);
        this.setAge(2);
    };
    Pet.prototype.sleep = function () {
        if (!this.testAlive()) {
            return;
        }
        if (this.energy > 15) {
            console.log("fail: nao esta com sono");
            return;
        }
        this.setEnergy(this.energyMax);
        this.setAge(5);
        this.setHungry(-1);
    };
    Pet.prototype.toString = function () {
        return "E:".concat(this.energy, "/").concat(this.energyMax)
            + ", S:".concat(this.hungry, "/").concat(this.hungryMax)
            + ", L:".concat(this.clean, "/").concat(this.cleanMax)
            + ", D:".concat(this.diamonds, ", I:").concat(this.age);
    };
    return Pet;
}());
