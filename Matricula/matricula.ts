class Aluno {
    private id: string;
    private discps: Map<string, Discp>;

    public constructor(id: string) {
        this.id = id;
        this.discps = new Map();
    }

    public getId() {
        return this.id;
    }

    public addDiscp(discp: Discp) {
        if (this.discps.has(discp.getId())) {
            return;
        }
        this.discps.set(discp.getId(), discp);
        discp.addAluno(this);
    }

    public rmDiscp(discp: string) {
        let d = this.discps.get(discp) 
        if (d === undefined) {
            return;           
        }
        this.discps.delete(discp);
        d.rmAluno(this.id);
    }
}

class Discp {
    private id: string;
    private alunos: Map<string, Aluno>;

    public getId() {
        return this.id;
    }

    public addAluno (aluno: Aluno) {
        if (this.alunos.has(aluno.getId())) {
            return;
        }
        this.alunos.set(aluno.getId(), aluno);
        aluno.addDiscp(this);
    }

    public rmAluno(aluno: string) {
        let a = this.alunos.get(aluno) 
        if (a === undefined) {
            return;           
        }
        this.alunos.delete(aluno);
        a.rmDiscp(this.id);
    }
}