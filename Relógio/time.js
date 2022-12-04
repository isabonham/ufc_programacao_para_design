var Time = /** @class */ (function () {
    function Time(hour, minute, second) {
        this.hour = 0;
        this.minute = 0;
        this.second = 0;
        this.setHour(hour);
        this.setMinute(minute);
        this.setSecond(second);
    }
    Time.prototype.setHour = function (hour) {
        if (hour < 0 || hour > 24) {
            console.log("fail: hora invalida");
            return;
        }
        this.hour = hour;
    };
    Time.prototype.setMinute = function (minute) {
        if (minute < 0 || minute > 59) {
            console.log("fail: minuto invalido");
            return;
        }
        this.minute = minute;
    };
    Time.prototype.setSecond = function (second) {
        if (second < 0 || second > 59) {
            console.log("fail: segundo invalido");
            return;
        }
        this.second = second;
    };
    Time.prototype.getHour = function () {
        return this.hour;
    };
    Time.prototype.getMinute = function () {
        return this.minute;
    };
    Time.prototype.getSecond = function () {
        return this.second;
    };
    Time.prototype.nextSecond = function () {
        if (this.second === 59 && this.minute === 59 && this.hour === 23) {
            this.second = 0;
            this.minute = 0;
            this.hour = 0;
            return;
        }
        else if (this.second === 59 && this.minute === 59) {
            this.second = 0;
            this.minute = 0;
            this.hour++;
            return;
        }
        else if (this.second === 59) {
            this.second = 0;
            this.minute++;
            return;
        }
        this.second++;
    };
    Time.prototype.toString = function () {
        var p2 = function (n) { return ("" + n).padStart(2, "0"); };
        return p2(this.hour) + ":" + p2(this.minute) + ":" + p2(this.second);
    };
    return Time;
}());
