class Time {
    private hour: number = 0;
    private minute: number = 0;
    private second: number = 0;

    public constructor(hour: number, minute: number, second: number) {
        this.setHour(hour);
        this.setMinute(minute);
        this.setSecond(second);
    }

    setHour(hour: number): void {
        if(hour < 0 || hour > 24) {
            console.log("fail: hora invalida");
            return;
        }
        this.hour = hour;
    }

    setMinute(minute: number): void {
        if(minute < 0 || minute > 59) {
            console.log("fail: minuto invalido");
            return;
        }
        this.minute = minute;
    }

    setSecond(second: number): void {
        if(second < 0 || second > 59) {
            console.log("fail: segundo invalido");
            return;
        }
        this.second = second;
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
        if(this.second === 59 && this.minute === 59 && this.hour === 23) {
            this.second = 0;
            this.minute = 0;
            this.hour = 0;
            return;
        }
        else if(this.second === 59 && this.minute === 59) {
            this.second = 0;
            this.minute = 0;
            this.hour++;
            return;
        }
        else if(this.second === 59) {
            this.second = 0;
            this.minute++;
            return;
        }
        this.second++;
    }

    toString(): string {
        let p2 = n => ("" + n).padStart(2, "0");
        return p2(this.hour) + ":" + p2(this.minute) + ":" + p2(this.second);
    }
}