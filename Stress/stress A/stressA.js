let lines = require("fs").readFileSync(0).toString().split("\n");
let read = () => lines.shift();
let show = text => process.stdout.write("" + text);
let puts = text => console.log(text)

// in: existe determinado valor na fila? **********
function inside(vet, value) {
    for (let elem of vet) {
        if (value === elem) {
            return true;
        }
    }
    return false;
}

// index_of: qual posição aparece X na fila pela primeira vez? **********
function index_of(vet, value) {
    let index = 0;
    for (let i = 0; i < vet.length; i++) {
        if (value === vet[i]){
            index = i;
            return index;
        }
    }
    return -1;
}

// find_if: qual a posição do primeiro homem da fila? **********
function find_if(vet) {
    let index = -1;
    for (let i = 0; i < vet.length; i++) {
        if (vet[i] > 0) {
            index = i;
        }
        return index;
    }
    return index;
}

// min_element: qual a posição do menor valor da lista?
function min_element(vet) {
    let index = -1;
    let min = Infinity;
    for (let i = 0; i < vet.length; i++) {
        if (vet[i] < min) {
            min = vet[i];
            index = i;
        }
    }
    return index;
}

// find_min_if: qual a posição do homem mais calmo? **********
function find_min_if (vet) {
    let index = -1;
    let min = Infinity;
    for (let i = 0; i < vet.length; i++) {
        if (vet[i] > 0 && vet[i] < min) {
            min = vet[i];
            index = i;
        }
    }
    return index;
}

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

// average: qual a média de stress?
function average (vet) {
    let soma = 0;
    for (let elem of vet) {
        soma += Math.abs(elem);
    }
    return (soma/vet.length);
}

// half_compare: qual metade da lista é mais estressada? [draw, first, second]
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

//Função principal
function main() {
    while (true) {
        let line = read();
        puts("$" + line);

        let ui = line.split(" ");
        let cmd = ui[0];
        
        if (cmd === "end") {
            break;
        }
        else if (cmd === "in") {
            puts(inside(to_vet(ui[1]), +ui[2]));
        }
        else if (cmd === "index_of") {
            puts(index_of(to_vet(ui[1]), +ui[2]));
        }
        else if (cmd === "find_if") {
            puts(find_if(to_vet(ui[1])));
        }
        else if (cmd === "min_element") {
            puts(min_element(to_vet(ui[1])));
        }
        else if (cmd === "find_min_if") {
            puts(find_min_if(to_vet(ui[1])));
        }
        else if (cmd === "count") {
            puts(count(to_vet(ui[1]), +ui[2]));
        }
        else if (cmd === "average") {
            puts(average(to_vet(ui[1])).toFixed(2));
        }
        else if (cmd === "half_compare") {
            puts(half_compare(to_vet(ui[1])));
        }
        else if (cmd === "more_men") {
            puts(more_men(to_vet(ui[1])));
        }
        else if (cmd === "sex_battle") {
            puts(sex_battle(to_vet(ui[1])));
        }
    }
}

main();