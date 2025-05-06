// Desafio 2: Jogo da Memória
function embaralhar(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

let palavras = ["gato", "gato", "cão", "cão", "pato", "pato"];
let cartas = embaralhar([...palavras]);

let reveladas = Array(cartas.length).fill(false);

function jogarMemoria(pos1, pos2) {
    if (pos1 === pos2 || reveladas[pos1] || reveladas[pos2]) {
        console.log("Posições inválidas.");
        return;
    }

    console.log(`Carta 1: ${cartas[pos1]}, Carta 2: ${cartas[pos2]}`);

    if (cartas[pos1] === cartas[pos2]) {
        console.log("Par encontrado!");
        reveladas[pos1] = true;
        reveladas[pos2] = true;
    } else {
        console.log("Não é um par. Tente novamente.");
    }

    if (reveladas.every(c => c)) {
        console.log("Parabéns! Você encontrou todos os pares.");
    }
}

// Exemplo de jogada (no console):
console.log("Cartas embaralhadas:", cartas);
jogarMemoria(0, 1);
