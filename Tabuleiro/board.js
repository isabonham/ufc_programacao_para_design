var Player = /** @class */ (function () {
    function Player(label) {
        this.label = label;
        this.pos = 0;
        this.free = true;
    }
    Player.prototype.getLabel = function () {
        return this.label;
    };
    Player.prototype.getPos = function () {
        return this.pos;
    };
    Player.prototype.setPos = function (pos) {
        this.pos += pos;
    };
    Player.prototype.setFree = function (free) {
        this.free = free;
    };
    Player.prototype.isFree = function () {
        if (this.free) {
            return true;
        }
        return false;
    };
    Player.prototype.toString = function () {
        return "Player " + this.label + " at " + this.pos + " is " + (this.free ? "free" : "free");
    };
    return Player;
}());
var Board = /** @class */ (function () {
    function Board(nPlayers, size) {
        this.size = size + 1;
        this.trapList = [];
        this.running = true;
        this.players = [];
        for (var i = 1; i <= nPlayers; i++) {
            this.players.push(new Player(i));
        }
    }
    Board.prototype.addTrap = function (pos) {
        this.trapList.push(pos);
    };
    Board.prototype.rollDice = function (value) {
        if (!this.running) {
            console.log("game is over");
            return;
        }
        var playerTime = this.players.shift();
        if (playerTime.isFree()) {
            playerTime.setPos(value);
            // verifica se o jogador venceu
            if (playerTime.getPos() === this.size) {
                this.running = false;
                console.log("player" + playerTime.getLabel() + " ganhou");
            }
            else if (playerTime.getPos() > this.size) {
                var x = playerTime.getPos();
                playerTime.setPos(-x);
                playerTime.setPos(this.size - 1);
                this.running = false;
                console.log("player" + playerTime.getLabel() + " ganhou");
            }
            else {
                console.log("player" + playerTime.getLabel() + " andou para " + playerTime.getPos());
            }
            // verifica se caiu em armadilha
            for (var i = 0; i < this.trapList.length; i++) {
                if (playerTime.getPos() === this.trapList[i]) {
                    playerTime.setFree(false);
                    console.log("player" + playerTime.getLabel() + " caiu em uma armadilha");
                }
            }
        }
        else {
            if (value % 2 !== 0) {
                console.log("player" + playerTime.getLabel() + " continua preso");
            }
            else {
                playerTime.setFree(true);
                console.log("player" + playerTime.getLabel() + " se libertou");
            }
        }
        this.players.push(playerTime);
    };
    Board.prototype.toString = function () {
        var str = "";
        for (var _i = 0, _a = this.players; _i < _a.length; _i++) {
            var p = _a[_i];
            var line = Array(this.size).fill(".");
            line[p.getPos()] = "" + p.getLabel();
            str += "player" + p.getLabel() + ": " + line.join("") + "\n";
        }
        var traps = Array(this.size).fill(".");
        for (var _b = 0, _c = this.trapList; _b < _c.length; _b++) {
            var t = _c[_b];
            traps[t] = "x";
        }
        str += "traps__: " + traps.join("");
        return str;
    };
    return Board;
}());
