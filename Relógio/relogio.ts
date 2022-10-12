class Time {
    private hour: number = 0;
    private minute: number = 0;
    private second: number = 0;

    public constructor(hour: number, minute: number, second: number) {
        if(hour < 0 || hour > 24) {
            console.log(hour + "entrei nessa merda");
            console.log("fail: hora invalida");
        }
        else {
            this.hour = hour;
        }

        if(minute < 0 || minute > 59) {
            console.log("fail: minuto invalido");
        }
        else {
            this.minute = minute;
        }

        if(second < 0 || second > 59) {
            console.log("fail: segundo invalido");
        }
        else {
            this.second = second;
        }
    }

    setHour(hour: number): void {
        if(hour < 0 || hour > 24) {
            console.log(hour + "entrei nessa merda");
            console.log("fail: hora invalida");
        }
        else {
            this.hour = hour;
        }
    }

    setMinute(minute: number): void {
        if(minute < 0 || minute > 59) {
            console.log("fail: minuto invalido");
        }
        else {
            this.minute = minute;
        }
    }

    setSecond(second: number): void {
        if(second < 0 || second > 59) {
            console.log("fail: segundo invalido");
        }
        else {
            this.second = second;
        }
    }

    getHour(): number { 
        return this.hour;
    }

    getMinute(): number {
        return this.minute;
    }

    getSecond(): number {
        return this.second;
    }

    nextSecond(): void {
        if (this.second === 59 && this.minute === 59 && this.hour === 23) {
            this.second = 0;
            this.minute = 0;
            this.hour = 0;
        }
        else if (this.second === 59 && this.minute === 59) {
            this.second = 0;
            this.minute = 0;
            this.hour++;            
        }
        else if (this.second === 59) {
            this.second = 0;
            this.minute++;
        }
        else {
            this.second++;
        }
    }
    
    toString() {
        // let p2 = n => ("" + n).padStart(2, "0");
        return (this.hour) + ":" + (this.minute) + ":" + (this.second);
    }
}

let relogio = new Time(25, 20, 30);
console.log("" + relogio);