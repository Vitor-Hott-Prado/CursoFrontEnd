let cores = ["azul", "vermelho", "verde", "azul", "amarelo", "verde", "azul"];

function contarCores(array) {
    let contagem = {};
    array.forEach(cor => {
        contagem[cor] = (contagem[cor] || 0) + 1;
    });
    return contagem;
}

console.log(contarCores(cores));


// Desafio 2 - FizzBuzz com Arrays
let numeros = [];

for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        numeros.push("FizzBuzz");
    } else if (i % 3 === 0) {
        numeros.push("Fizz");
    } else if (i % 5 === 0) {
        numeros.push("Buzz");
    } else {
        numeros.push(i);
    }
}

console.log(numeros);
/*
Saída esperada:
[
  1, 2, 'Fizz', 4, 'Buzz',
  'Fizz', 7, 8, 'Fizz', 'Buzz',
  11, 'Fizz', 13, 14, 'FizzBuzz',
  16, 17, 'Fizz', 19, 'Buzz'
]
*/
