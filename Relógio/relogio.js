/*
O QUE APRENDI: posso fazer verificações com os atributos dos construtores também;
COM QUEM APRENDI: em casa com ajuda de um amigo;
COMO APRENDI: fiz 90% do código sozinha, com os conhecimentos de antes,
              mas no replit tava dando um erro que eu não sabia o que era, até que pedi ajuda do meu amigo
              e ele notou que no teste o objeto era criado do zero e dava erro justamente porque eu
              não fazia as verificações no construtor do relógio;

TEMPO: 45min >>>>> + 30min quebrando a cabeça pra entender porque não tava funcionando
                   + 15 min com meu amigo vendo o que tava errado
*/
var Time = /** @class */ (function () {
    function Time(hour, minute, second) {
        this.hour = 0;
        this.minute = 0;
        this.second = 0;
        if (hour < 0 || hour > 24) {
            console.log("fail: hora invalida");
        }
        else {
            this.hour = hour;
        }
        if (minute < 0 || minute > 59) {
            console.log("fail: minuto invalido");
        }
        else {
            this.minute = minute;
        }
        if (second < 0 || second > 59) {
            console.log("fail: segundo invalido");
        }
        else {
            this.second = second;
        }
    }
    Time.prototype.setHour = function (hour) {
        if (hour < 0 || hour > 24) {
            console.log(hour + "entrei nessa merda");
            console.log("fail: hora invalida");
        }
        else {
            this.hour = hour;
        }
    };
    Time.prototype.setMinute = function (minute) {
        if (minute < 0 || minute > 59) {
            console.log("fail: minuto invalido");
        }
        else {
            this.minute = minute;
        }
    };
    Time.prototype.setSecond = function (second) {
        if (second < 0 || second > 59) {
            console.log("fail: segundo invalido");
        }
        else {
            this.second = second;
        }
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
    };
    Time.prototype.toString = function () {
        // let p2 = n => ("" + n).padStart(2, "0");
        return (this.hour) + ":" + (this.minute) + ":" + (this.second);
    };
    return Time;
}());
var relogio = new Time(0, 0, 0);
// CASOS DE TESTE
// #__case set
console.log("\n#__case set\n");
console.log("" + relogio);
// #__case set
console.log("\n#__case set\n");
relogio.setHour(10);
relogio.setMinute(2);
relogio.setSecond(30);
console.log("" + relogio);
// #__case set2
console.log("\n#__case set2\n");
relogio.setHour(15);
relogio.setMinute(50);
relogio.setSecond(59);
console.log("" + relogio);
// #__case error
console.log("\n#__case error\n");
relogio.setHour(25);
relogio.setMinute(10);
relogio.setSecond(30);
console.log("" + relogio);
// #__case error2
console.log("\n#__case error2\n");
relogio.setHour(1);
relogio.setMinute(70);
relogio.setSecond(50);
console.log("" + relogio);
// #__case error3
console.log("\n#__case error3\n");
relogio.setHour(23);
relogio.setMinute(59);
relogio.setSecond(70);
console.log("" + relogio);
// #__case next
console.log("\n#__case next\n");
relogio.setHour(15);
relogio.setMinute(59);
relogio.setSecond(59);
console.log("" + relogio);
// #__case next2
console.log("\n#__case next2\n");
relogio.nextSecond();
console.log("" + relogio);
// ----- END -----
var relogio2 = new Time(0, 0, 0);
// #__case set
console.log("\n#__case set\n");
relogio2.setHour(23);
relogio2.setMinute(59);
relogio2.setSecond(59);
console.log("" + relogio);
// #__case next3
console.log("\n#__case next3\n");
relogio2.nextSecond();
console.log("" + relogio2);
// ----- END -----
// #__case init
console.log("\n#__case init\n");
var relogio3 = new Time(10, 20, 30);
console.log("" + relogio3);
// #__case init2
console.log("\n#__case init2\n");
var relogio4 = new Time(90, 20, 30);
console.log("" + relogio4);
// #__case init3
console.log("\n#__case init3\n");
var relogio5 = new Time(90, 100, 60);
console.log("" + relogio5);
// ----- END -----
