// ------------------- Leitura e Escrita ------------------
let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.shift();
let write = text => process.stdout.write("" + text);
let print = text => console.log(text)

// count: quantas vezes o valor X apareceu na fila?
function count (vet, value) {
    let cont = 0;
    for (let elem of vet) {
        if (value === elem) {
            cont++;
        }
    }
    return cont;
}

// sum: qual a soma de todos os valores de stress da fila?
function sum(vet) {
    let sum = 0;
    for (let elem of vet) {
        sum += Math.abs(elem);
    }
    return sum;
}

// average: qual a média de stress?
function average (vet) {
    let soma = 0;
    for (let elem of vet) {
        soma += Math.abs(elem);
    }
    return (soma/vet.length);
}

// more_men_or_women: existem mais homens ou mulheres? [draw, men, women]
function more_men (vet) {
    let men = 0;
    let women = 0;
    for (let elem of vet) {
        if (elem > 0) {
            men++;
        }
        else {
            women++;
        }
    }
    if (women === men) {
        return ("draw");
    }
    return (women > men ? "women" : "men");
}

// half_compare: qual metade da lista é mais estressada?
function half_compare (vet) {
    let size = vet.length;
    let meio = Math.floor(size / 2);
    let v_first = soma_vet(vet, 0, meio);
    if (size % 2 === 1) {
        meio += 1;
    }
    let v_second = soma_vet(vet, meio, size);
    if (v_first === v_second) {
        return ("draw");
    }
    return (v_first > v_second ? "first" : "second");
}

// sex_battle: quem é mais estressado em média? [draw, men, women]
function sex_battle (vet) {
    let women = 0;
    let men = 0;
    let s_women = 0;
    let s_men = 0;
    for (let elem of vet) {
        if (elem > 0) {
            men += Math.abs(elem);
            s_men++;
        }
        else {
            women += Math.abs(elem);
            s_women++;
        }
    }
    let m_women = women / s_women;
    let m_men = men / s_men;
    if (m_women === m_men) {
        return ("draw");
    }
    return (m_women > m_men ? "women" : "men");
}

function soma_vet (vet, inicio, fim) {
    let soma = 0;
    for (let i = inicio; i < fim; i++) {
        soma += Math.abs(vet[i]);
    }
    return soma;
}

function to_vet(token) {
    let size = token.length;
    let inside = token.substring(1, size - 1);
    return inside === "" ? [] : inside.split(",").map(x => +x)
}

// ------------------- MAIN -------------------

function main() {
    let chain = new Map();
    let ui = [];

    chain.set("count",        () => print(       count(to_vet(ui[1]), +ui[2])   ));
    chain.set("sum",          () => print(         sum(to_vet(ui[1]))           ));
    chain.set("average",      () => print(     average(to_vet(ui[1])).toFixed(2)));
    chain.set("more_men",     () => print(    more_men(to_vet(ui[1]))           ));
    chain.set("half_compare", () => print(half_compare(to_vet(ui[1]))           ));
    chain.set("sex_battle",   () => print(  sex_battle(to_vet(ui[1]))           ));

    execute(chain, ui);
}

// ------------------- Funções do Shell -------------------

let execute = (chain, ui) => __shell(chain, ui, true);
let shell   = (chain, ui) => __shell(chain, ui, false);

function __shell(chain, ui, on_moodle) {
    while (true) {
        if (!on_moodle)
            write("$")
        let line = input();
        if (on_moodle)
            print("$" + line);
            
        ui.splice(0); //apagar tudo
        line.split(" ").forEach(x => ui.push(x));
        
        let cmd = ui[0];
        if (cmd == "end") {
            return;
        } else if (chain.has(cmd)) {
            chain.get(cmd)();
        } else {
            print("fail: command not found");
        }
    }
}

main();