function media(numeros) {
    if (numeros.length === 0) return 0; // Evita divisão por zero
    let soma = numeros.reduce((total, num) => total + num, 0);
    return soma / numeros.length;
}

// Exemplo de uso:
let numeros = [10, 20, 30, 40, 50];
console.log(media(numeros)); // Saída: 30
