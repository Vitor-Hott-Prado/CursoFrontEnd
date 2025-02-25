// Criar um programa que receba Varias Notas e Calcule a Média
const prompt = require("prompt-sync")();

let vetorNota = [];

let contador = 0;
let continuar = true;
while (continuar) {
  console.log("1. Digitar Nova Nota");
  console.log("2. Calcular Media");
  console.log("3. Sair");
  let operacao = prompt("Escolher Opção Desejada");
  switch (operacao) {
    case "1":
      contador++;
      let nota = Number(prompt("Digite a Nota do aluno:" + contador + ":"));
      vetorNota.push(nota);
      break;
    case "2":
      let media = vetorNota.reduce((x, y) => x + y, 0) / vetorNota.length;
    console.log("A media da Sala é"+ media);
    
      break;
    case "3":
       continuar = false;
       console.log("Saindo");
            
      break;

    default:
      break;
  }
}
