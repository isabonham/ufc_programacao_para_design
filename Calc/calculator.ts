class Calculator {
    public batteryMax: number;
    public battery: number;
    public display: number;

    public constructor(batteryMax: number) {
        this.batteryMax = batteryMax;
        this.battery = 0;
        this.display = 0;
    }

    chargeBattery(value: number): void {
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
        this.battery--;
        return true;
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
                return
            }
            this.display = num / den;
        }
    }

    toString(): string {
        return "display = " + this.display.toFixed(2) + ", battery = " + this.battery;
    }
}