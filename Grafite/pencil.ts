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
        if(this.hardness === 'HB')
            return 1;
        if(this.hardness === '2B')
            return 2;
        if(this.hardness === '4B')
            return 4;
        if(this.hardness === '6B')
            return 6;
        return 0;
    }

    public getThickness(): number {
        return this.thickness;
    }

    public getSize(): number {
        return this.size;
    }

    public getHardness(): string {
        return this.hardness;
    }

    public setSize(value: number): void {
        this.size = value;
    }

    public setHardness(value: string): void {
        this.hardness = value;
    }

    public setThickness(value: number): void {
        this.thickness = value;
    }

    public toString(): string {
        //return "Grafite: " + this.calibre + ":" + this.dureza + ":" + this.tamanho;
        return `${this.thickness}:${this.hardness}:${this.size}`;
    }
}

class Pencil {
    private thickness: number;
    private tip: Lead | null;

    public constructor(thickness: number) {
        this.thickness = thickness;
        this.tip = null;
    }

    public hasGrafite(): boolean {
        if(this.tip !== null) {
            return true;
        }
        return false;
    }

    public insert(grafite: Lead): boolean {
        if(grafite.getThickness() > this.thickness) {
            console.log ("fail: calibre incompativel");
            return false;
        }
        if(this.hasGrafite()) {
            console.log ("fail: ja existe grafite");
            return false;
        }
        this.tip = new Lead(grafite.getThickness(), grafite.getHardness(), grafite.getSize());
        return true;
    }

    public remove(): Lead | null {
        this.tip = null;
        return this.tip;
    }

    writePage(): void {
        if(!this.hasGrafite()) {
            console.log ("fail: nao existe grafite");
        }
        else if(this.tip!.getSize() <= 10) {
            console.log ("fail: tamanho insuficiente");
        }
        else {
            let finalSize = this.tip!.getSize() - this.tip!.usagePerSheet();
            if(finalSize >= 10) {
                this.tip!.setSize(finalSize);
                return;
            }
            this.tip!.setSize(10);
            console.log ("fail: folha incompleta");
        }
    }

    public toString(): string {
        return "calibre: " + this.thickness +
                ", grafite: " + (this.tip != null ? "[" + this.tip.toString() + "]" : "null");
    }
}