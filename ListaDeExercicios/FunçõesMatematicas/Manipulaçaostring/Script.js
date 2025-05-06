// 1. Pedir o nome do usuário e exibir a quantidade de caracteres
function exibirQuantidadeDeCaracteres() {
    let nome = prompt("Digite seu nome:");
    console.log(`O seu nome tem ${nome.length} caracteres.`);
}

exibirQuantidadeDeCaracteres();

// 2. Função que recebe uma frase e retorna a mesma frase toda em maiúsculas
function transformarMaiusculas(frase) {
    return frase.toUpperCase();
}

// Exemplo de uso:
let fraseExemplo = "JavaScript é incrível!";
console.log(transformarMaiusculas(fraseExemplo)); // "JAVASCRIPT É INCRÍVEL!"

// 3. Pedir uma frase ao usuário e substituir todas as ocorrências de "JavaScript" por "JS"
function substituirJavaScriptPorJS() {
    let frase = prompt("Digite uma frase:");
    let novaFrase = frase.replace(/JavaScript/g, "JS");
    console.log(novaFrase);
}

substituirJavaScriptPorJS();

// 4. Função que recebe um nome completo e retorna apenas o primeiro nome
function obterPrimeiroNome(nomeCompleto) {
    return nomeCompleto.split(' ')[0]; // Divide o nome completo e retorna o primeiro elemento do array
}

// Exemplo de uso:
let nomeCompleto = "João Silva";
console.log(obterPrimeiroNome(nomeCompleto)); // "João"

// 5. Pedir um texto contendo vírgulas e transformá-lo em um array de palavras
function textoParaArray() {
    let texto = prompt("Digite um texto com vírgulas:");
    let palavras = texto.split(','); // Separa o texto nas vírgulas e cria um array
    console.log(palavras);
}

textoParaArray();

// 6. Função que recebe um e-mail e valida se ele contém "@" e ".", retornando verdadeiro ou falso
function validarEmail(email) {
    return email.includes('@') && email.includes('.');
}

// Exemplo de uso:
let email = prompt("Digite seu e-mail:");
if (validarEmail(email)) {
    console.log("O e-mail é válido.");
} else {
    console.log("O e-mail é inválido.");
}
