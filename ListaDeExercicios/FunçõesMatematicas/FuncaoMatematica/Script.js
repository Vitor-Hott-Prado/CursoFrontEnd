// 1. Gerar um número aleatório entre 1 e 100 e exibir no console.
let numeroAleatorio = Math.floor(Math.random() * 100) + 1;
console.log("Número aleatório entre 1 e 100:", numeroAleatorio);

// 2. Função para calcular a raiz quadrada de um número
function calcularRaizQuadrada(numero) {
    return Math.sqrt(numero);
}
console.log("Raiz quadrada de 16:", calcularRaizQuadrada(16));

// 3. Função para retornar o maior número entre dois números utilizando Math.max()
function maiorNumero(num1, num2) {
    return Math.max(num1, num2);
}
console.log("Maior entre 10 e 20:", maiorNumero(10, 20));

// 4. Solicitar ao usuário um número decimal e exibir o arredondamento
let numeroDecimal = parseFloat(prompt("Digite um número decimal:"));

console.log("Número arredondado para cima:", Math.ceil(numeroDecimal));   // Arredonda para cima
console.log("Número arredondado para baixo:", Math.floor(numeroDecimal)); // Arredonda para baixo
console.log("Número arredondado para o inteiro mais próximo:", Math.round(numeroDecimal)); // Arredonda para o inteiro mais próximo
