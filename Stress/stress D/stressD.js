// ------------------- Leitura e Escrita ------------------
let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.shift();
let write = text => process.stdout.write("" + text);
let puts = text => console.log(text);

// function occurr(vet) { //todo
    
// }

function teams(vet) {
  let saida = "[";
  let aux = 1;

  for (let i = 0; i < vet.length; i++) {
    if (vet[i] === vet[i+1]) {
      aux++;
    }
    else {
      if (i === vet.length - 1 ) {
        saida += vet[i] + ":" + aux;
      }
      else {
        saida += vet[i] + ":" + aux + ", ";
      }
      aux = 1;
    }
  }
  saida += "]";
  return saida;
}

function mnext(vet) {
  let v = vet.slice();
  let new_vet = vet.fill(0);
  
  for (let i = 0; i <= v.length - 1; i++) {
    if (v[i] > 0 && (v[i - 1] < 0 || v[i + 1] < 0)) {
      new_vet[i] = 1;
    }
  }
  return new_vet;
}

function alone(vet) {
  let v = vet.slice();
  let new_vet = vet.fill(0);

  for (let i = 0; i <= v.length - 1; i++) {
    if (v.length === 1) {
      if (v[i] > 0) {
        new_vet[i] = 1;
      }
    }
    else {
      if (i == 0) {
        if (v[i + 1] > 0 && v[i] > 0) {
          new_vet[i] = 1;
        }
      }
      else if (i == v.length - 1) {
        if (v[i - 1] > 0 && v[i] > 0) {
          new_vet[i] = 1;
        }
      }
      else {
        if ((v[i + 1] > 0 && v[i - 1] > 0 && v[i] > 0)) {
          new_vet[i] = 1;
        }
      }
    }
  }
  return new_vet;
}

function couple(vet) {
  let saida = 0;

  for (let i = 0; i < vet.length; i++) {
    for (let j = 0; j < vet.length; j++) {
      if (vet[i] > 0 && vet[j] < 0) {
        if (Math.abs(vet[i] === Math.abs(vet[j]))) {
          saida++;
          vet.splice(i, 1);
          vet.splice(j, 1);
        }
      }
    }
  }

  return saida;
}

// function has_subseq(vet, seq, pos) { //todo
// }

function subseq(vet, seq) {
  for (let i = 0; i < vet.length; i++) {
    if (vet[i] === seq[0]) {
      let cont = 0;
      for (let j = 0; j < seq.length; j++) {
        if (vet[i+j] === seq[j]) {
          cont++;
        }
      }
      if (cont === seq.length) {
        return i;
      }
    }
  }
  return -1;
}

// function erase (vet, pos) { //todo

// }

// function clear (vet, value) { //todo

// }

function to_vet(token) {
    let size = token.length;
    let inside = token.substring(1, size - 1);
    return inside === "" ? [] : inside.split(",").map(x => +x)
}

function fmt(vet) {
    return "[" + vet.join(", ") + "]";
}

function fmtpair(vet) {
    return fmt(vet.map((x) => {
        let [key, value] = x;
        return "" + key + ":" + value;
    }));
}

// ------------------- MAIN -------------------

function main() {
    let chain = new Map();
    let ui = [];

    chain.set("occurr",      () => puts(     occurr(to_vet(ui[1]))));
    chain.set("teams",       () => puts(     teams(to_vet(ui[1]))));
    chain.set("mnext",       () => puts(fmt( mnext(to_vet(ui[1])))));
    chain.set("alone",       () => puts(fmt( alone(to_vet(ui[1])))));
    chain.set("couple",      () => puts(     couple(to_vet(ui[1]))));
    chain.set("subseq",      () => puts(     subseq(to_vet(ui[1]), to_vet(ui[2]), +ui[3])));
    chain.set("erase",       () => puts(fmt( erase(to_vet(ui[1]), to_vet(ui[2])))));
    chain.set("clear",       () => puts(fmt( clear(to_vet(ui[1]), +ui[2]))));


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
            puts("$" + line);
            
        ui.splice(0); //apagar tudo
        line.split(" ").forEach(x => ui.push(x));
        
        let cmd = ui[0];
        if (cmd == "end") {
            return;
        } else if (chain.has(cmd)) {
            chain.get(cmd)();
        } else {
            puts("fail: command not found");
        }
    }
}

main();