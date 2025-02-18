//1. Verificação de Idade

var prompt = require("prompt-sync")();

let idade = prompt("Qual sua idade?");

// Converte a idade para um número
idade = Number(idade);

// Verifica a faixa etária
if (idade < 18) {
    console.log("Você é menor de idade.");
} else if (idade <= 60) {
    console.log("Você é adulto.");
} else {
    console.log("Você é idoso.");
}




