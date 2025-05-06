// Criando a matriz do tabuleiro
let tabuleiro = [
    ["X", "O", "X"],
    ["O", "X", "O"],
    ["X", "O", "X"]
];

// a. Acessar o elemento da segunda linha e terceira coluna
let elemento = tabuleiro[1][2]; // linha 1 (segunda), coluna 2 (terceira)
console.log("Elemento da segunda linha, terceira coluna:", elemento);

// b. Percorrer todos os elementos com for aninhado
console.log("Todos os elementos do tabuleiro:");
for (let i = 0; i < tabuleiro.length; i++) {
    for (let j = 0; j < tabuleiro[i].length; j++) {
        console.log(`Posição [${i}][${j}] = ${tabuleiro[i][j]}`);
    }
}
