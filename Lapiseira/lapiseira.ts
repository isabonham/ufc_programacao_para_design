class Lead {
    private thickness: number;
    private hardness: string;
    private size: number;

    public constructor(calibre: number, dureza: string, tamanho: number) {
        this.thickness = calibre;
        this.hardness = dureza;
        this.size = tamanho;
    }

    public usagePerSheet(): number {
        if (this.hardness === 'HB') {
            return 1;
        }
        if (this.hardness === '2B') {
            return 2;
        }
        if (this.hardness === '4B') {
            return 4;
        }
        if (this.hardness === '6B') {
            return 6;
        }
        return 0;
    }

    public getThickness(): number {
        return this.thickness;
    }

    public getHardness(): string {
        return this.hardness;
    }

    public getSize(): number {
        return this.size;
    }

    public setSize(size: number): void {
        this.size += size;
    }

    public toString(): string {
        return `${this.thickness}:${this.hardness}:${this.size}`;
    }
}

class Pencil {
    private thickness: number;
    private tip: Lead | null;
    private barrel: Array<Lead> = new Array<Lead>();

    public constructor(thickness: number) {
        this.thickness = thickness;
        this.tip = null;
    }

    public insert(grafite: Lead): boolean {
        if (grafite.getThickness() > this.thickness) {
            console.log ("fail: calibre incompatível");
            return false;
        }
        if (this.tip !== null) {
            console.log ("teste, o bico está cheio então vou inserir no tambor")
            this.barrel.push(new Lead(grafite.getThickness(), grafite.getHardness(), grafite.getSize()));
        }
        this.tip = new Lead(grafite.getThickness(), grafite.getHardness(), grafite.getSize());
        return true;
    }

    public remove(): Lead | null {
        this.tip = null;
        return this.tip;
    }

    public pull(): boolean {
        return true
    }

    writePage(): void {
        if (this.tip === null) {
            console.log ("fail: nao existe grafite");
        }
        else if (this.tip.getSize() <= 10) {
            console.log ("fail: tamanho insuficiente");
        }
        else {
            if (this.tip.getHardness() === "HB") {
                if (this.tip.getSize() - 1 < 10) {
                    let x = 10 - this.tip.getSize();
                    this.tip.setSize(x);
                    console.log ("fail: folha incompleta");
                }
                else {
                    this.tip.setSize(-1);
                }
            }
            else if (this.tip.getHardness() === "2B") {
                if (this.tip.getSize() - 2 < 10) {
                    let x = 10 - this.tip.getSize();
                    this.tip.setSize(x);
                    console.log ("fail: folha incompleta");
                }
                else {
                    this.tip.setSize(-2);
                }
            }
            else if (this.tip.getHardness() === "4B") {
                if (this.tip.getSize() - 4 < 10) {
                    let x = 10 - this.tip.getSize();
                    this.tip.setSize(x);
                    console.log ("fail: folha incompleta");
                }
                else {
                    this.tip.setSize(-4);
                }
            }
            else if (this.tip.getHardness() === "6B") {
                if (this.tip.getSize() - 6 < 10) {
                    let x = 10 - this.tip.getSize();
                    this.tip.setSize(x);
                    console.log ("fail: folha incompleta");
                }
                else {
                    this.tip.setSize(-6);
                }
            }
        }
    }

    public toString(): string {
        let response =  "calibre: " + this.thickness +
                        ", bico: " + (this.tip != null ? "[" + this.tip + "]" : "[]") +
                        ", tambor: {";

        for(let g of this.barrel) {
            response += "[" + g + "]";
        }

        response += "}";

        return response;
    }
}