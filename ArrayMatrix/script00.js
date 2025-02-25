// declaração de um array "[]"
let array = []; // array dinamico

// tipos de array

let arrayNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let arrayTexto = ["Sapto", "Caixa", "Meia"];
let arrayMisto = [1, "Jose", true];

// tamnho de um array (lenght)
console.log(arrayNumeros.length); //9

// acessar um elemento do array (index)
console.log(arrayTexto[1]);

//adicionar elementos em um array
// mo começo (unshift)
array.unshift("Tênis");
console.log(arrayTexto);

// no fim (push)
arrayTexto.push("Chinelo")
console.log(arrayTexto);

//trocar valor 
arrayTexto[2] = "Sacola";
console.log(arrayTexto);

//Remover Elemenstos do Array
// no começo (shift)
arrayTexto.shift();
console.log(arrayTexto);

//no fim (poop)
arrayTexto.pop();
console.log(arrayTexto);

// percorrer um Array (laço de repetição)
//percorrer o ARray de Numeros
for(let i = 0;i<arrayNumeros.length;i++){
    console.log("indice["+i+"]="+[arrayNumeros[i]]);
    
}

//forEach
arrayTexto.forEach(elemento => {
    console.log(elemento)
});


// Métodos úteis

//indexOF

console.log(arrayNumeros.indexOf(5));//4
console.log(arrayNumeros.indexOf(10));//-1 (elemento inexistente)

//Splice (remover elemento da pposição)
arrayMisto.splice(2,1);
console.log(arrayMisto);

//operações acançadas de Array
//map - novos valores
let valores = [10, 20 ,30, 40, 50];
let valoresDobro = valores.map(x => x*2);
console.log(valoresDobro);

//filter- comparação
let valoresfilter =  valores.filter(x => x>25);
console.log(valoresfilter);


//desafio (filtro x<35) && (x*3) 

// Triplos
let Valores = [10, 20, 30];
let ValoresTriplos = Valores.map(x => x*3);
console.log(ValoresTriplos);
//(x<35)
let Valoresfilter = Valores.filter(x => x<35);
console.log(Valoresfilter);


//reduce ([] - > let x)
let soma = valores.reduce((ValorSoma,ValorElemnto) =>ValorSoma+ValorElemnto);
console.log(soma);


//sort (organizar/ordenado)
let aleatorio = [7,4,2,9,1,5,8,3,6]
console.log(aleatorio);
let ordenado = aleatorio.sort();
console.log(ordenado);
