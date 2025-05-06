// Criando o array
let palavras = ["JavaScript", "é", "uma", "linguagem", "poderosa"];

// a. Usando join para formar uma frase
let frase = palavras.join(" ");
console.log("Frase completa:", frase);

// b. Adicionando "muito" na posição correta (antes de "poderosa")
palavras.splice(4, 0, "muito"); // posição 4, não remove nada, insere "muito"

let novaFrase = palavras.join(" ");
console.log("Frase com 'muito':", novaFrase);
