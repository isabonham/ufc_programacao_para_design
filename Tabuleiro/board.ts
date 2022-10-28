class Player {
    private label: number;
    private pos: number;
    private free: boolean;

    constructor(label: number) {
        this.label = label;
        this.pos = 0;
        this.free = true;
    }

    public getLabel(): number {
        return this.label;
    }

    public getPos(): number {
        return this.pos;
    }

    public setPos(pos: number) {
        this.pos += pos;
    }

    public setFree(free: boolean): void {
        this.free = free;
    }

    public isFree(): boolean {
        if (this.free) {
            return true;
        }
        return false;
    }

    toString(): string {
        return "Player " + this.label + " at " + this.pos + " is " + (this.free ? "free" : "free");
    }
}

class Board {
    trapList: number[]; // posição das armadilhas
    running : boolean;   // se o jogo acabou
    size    : number;
    players : Player[]; // lista de jogadores

    constructor(nPlayers: number, size: number) {
        this.size = size + 1;
        this.trapList = [];
        this.running = true;
        this.players = [];
        for (let i = 1; i <= nPlayers; i++) {
            this.players.push(new Player(i));
        }
    }

    addTrap(pos: number) {
        this.trapList.push(pos);
    }

    rollDice(value: number) {
        if (!this.running) {
            console.log("game is over");
            return;
        }
        let playerTime = this.players.shift();
        
        if (playerTime!.isFree()) {
            playerTime!.setPos(value);

            // verifica se o jogador venceu
            if (playerTime!.getPos() === this.size) {
                this.running = false;
                console.log ("player" + playerTime!.getLabel() + " ganhou");
            }
            else if (playerTime!.getPos() > this.size) {
                let x = playerTime!.getPos();
                playerTime!.setPos(-x);
                playerTime!.setPos(this.size - 1);
                this.running = false;
                console.log ("player" + playerTime!.getLabel() + " ganhou");
            }
            else {
                console.log ("player" + playerTime!.getLabel() + " andou para " + playerTime!.getPos());
            }

            // verifica se caiu em armadilha
            for (let i = 0; i < this.trapList.length; i++) {
                if (playerTime!.getPos() === this.trapList[i]) {
                    playerTime!.setFree(false);
                    console.log ("player" + playerTime!.getLabel() + " caiu em uma armadilha");
                }
            }
        }
        else {
            if (value % 2 !== 0) {
                console.log ("player" + playerTime!.getLabel() + " continua preso");
            }
            else {
                playerTime!.setFree(true);
                console.log ("player" + playerTime!.getLabel() + " se libertou");
            }
        }

        this.players.push(playerTime!);
    }
    
    toString() {
        let str = "";
        for(let p of this.players) {
            let line: string[] = Array(this.size).fill(".");
            line[p.getPos()] = "" + p.getLabel();
            str += "player" + p.getLabel() + ": " + line.join("") + "\n";
        }

        let traps = Array(this.size).fill(".");
        for (let t of this.trapList) {
            traps[t] = "x";
        }
        str += "traps__: " + traps.join("");
        return str;
    }
}