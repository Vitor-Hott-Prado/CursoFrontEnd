// Criando o array
let veiculos = ["carro", "moto", "bicicleta", "avião", "barco"];

// a. Verificar se "moto" está presente
let temMoto = veiculos.includes("moto");
console.log("Contém 'moto'?", temMoto); // true

// b. Encontrar a posição de "avião"
let indiceAviao = veiculos.indexOf("avião");
console.log("Posição de 'avião':", indiceAviao); // 3
