// ------------------- Leitura e Escrita ------------------
let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.shift();
let show = text => process.stdout.write("" + text);
let puts = text => console.log(text)

// get_men: retorne uma lista com os homens.
function get_men(vet) {
    vet_men = [];
    for (let elem of vet) {
        if (elem > 0) {
            vet_men.push(elem);
        }
    }
    return vet_men;
}

// get_calm_women: retorne uma lista com as mulheres stress menor que 10.
function get_calm_women(vet) {
    vet_calm_women = [];
    for (let elem of vet) {
        if (elem < 0 && elem > -10) {
            vet_calm_women.push(elem);
        }
    }
    return vet_calm_women;
}

// sort: ordene a lista pelo valor real
function sort(vet) {
    for (let i = 0; i < vet.length - 1; i++) {
        for (let j = 0; j < vet.length - 1 - i; j++) {
            if (vet[j] > vet[j+1]) {
                let aux = vet[j];
                vet[j] = vet[j+1];
                vet[j+1] = aux;
            }
        }
    }
    return vet;
}

// sort_stress: ordene a lista por nível de stress
function sort_stress(vet) {
    for (let i = 0; i < vet.length - 1; i++) {
        for (let j = 0; j < vet.length - 1 - i; j++) {
            if (Math.abs(vet[j]) > Math.abs(vet[j+1])) {
                let aux = vet[j];
                vet[j] = vet[j+1];
                vet[j+1] = aux;
            }
        }
    }
    return vet;
}

// reverse: retorne uma nova lista invertida
function reverse(vet) {
    let new_vet = [];
    let size = vet.length;
    for (let i = 0; i < vet.length; i++) {
        new_vet.push(vet[size - 1]);
        size--;
    }
    return new_vet;
}

// reverse_inplace: inverta a lista
function reverse_inplace(vet) {
    for (let i = 0, j = vet.length - 1; i < j; i++, j--) {
        let aux = vet[i];
        vet[i] = vet[j];
        vet[j] = aux;
    }
    return vet;
}

// unicos: retorne uma lista sem repetição de valores
function unique(vet) {
    for (let i = 0; i < vet.length; i++) {
        for (let j = 0; j < vet.length; j++) {
            if (i !== j && vet[i] === vet[j]) {
                vet.splice(j, 1);
            }
        }
    }
    return vet;
}

// repetidos: retorne uma lista apenas com os valores repetidos
function repeated(vet) {
    let new_vet = [];
    for (let i = 0; i < vet.length; i++) {
        for (let j = 0; j < vet.length; j++) {
            if (i !== j && vet[i] === vet[j]) {
                new_vet.push(vet[i]);
                vet.splice(j, 1);
            }
        }
    }
    sort(new_vet);
    return new_vet;
}

function to_vet(token) {
    let size = token.length;
    let inside = token.substring(1, size - 1);
    return inside === "" ? [] : inside.split(",").map(x => +x)
}

function fmt(vet) {
    return "[" + vet.join(", ") + "]";
}

//Função principal >>> replit & moodle

function main() {
    while (true) {
        let line = input();
        puts("$" + line)
        let ui = line.split(" ");
        let cmd = ui[0];
        if (cmd === "end") {
            break;
        }
        else if (cmd === "get_men") {
            puts(fmt(get_men(to_vet(ui[1]))));
        }
        else if (cmd === "get_calm_women") {
            puts(fmt(get_calm_women(to_vet(ui[1]))));
        }
        else if (cmd === "sort") {
            puts(fmt(sort(to_vet(ui[1]))));
        }
        else if (cmd === "sort_stress") {
            puts(fmt(sort_stress(to_vet(ui[1]))));
        }
        else if (cmd === "reverse") {
            puts(fmt(reverse(to_vet(ui[1]))));
        }
        else if (cmd === "reverse_inplace") {
            puts(fmt(reverse_inplace(to_vet(ui[1]))));
        }
        else if (cmd === "unique") {
            puts(fmt(unique(to_vet(ui[1]))));
        }
        else if (cmd === "repeated") {
            puts(fmt(repeated(to_vet(ui[1]))));
        }
        else {
            puts("warning: command not found")
        }
    }
}

main();