class Lead {
    private thickness: number;
    private hardness: string;
    private size: number;

    public constructor(calibre: number, dureza:string, tamanho: number) {
        this.thickness = calibre;
        this.hardness = dureza;
        this.size = tamanho;
    }

    public toString(): string {
        return `${this.thickness}:${this.hardness}:${this.size}`;
    }

    public usagePerSheet(): number {
        if (this.hardness === 'HB')
            return 1;
        if (this.hardness === '2B')
            return 2;
        if (this.hardness === '4B')
            return 4;
        return 6;
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
        this.size = size;
    }
}
class Pencil {
    private thickness: number;
    private tip: Lead | null;
    private barrel: Array<Lead> = new Array<Lead>();

    public constructor(thickness: number) {
        this.thickness = thickness;

    }

    public insert(lead: Lead): boolean {
        return true
    }

    public remove(): Lead | null {
        return null;
    }

    public pull(): boolean {
        return true
    }

    public writePage(): void { //todo

    }
    public toString(): string {
        let saida =  "calibre: " + this.thickness + ", bico: " +
                (this.tip != null ? "[" + this.tip + "]" : "[]") + ", tambor: {";
        for(let g of this.barrel) {
            saida += "[" + g + "]";
        }  
        saida += "}";

        return saida;
    }
}