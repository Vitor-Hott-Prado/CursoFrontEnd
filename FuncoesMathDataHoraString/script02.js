//Manipulação de String (Cadeia de Caracteres)

let texto = "Aula de JavaScript";

// conattar quantos caracteres tem essa varialvel
console.log(texto.length); //18

// MAIUSCULA  e minuscula 
console.log(texto.toUpperCase()); //MAIUSCULA
console.log(texto.toLocaleLowerCase()); //minnuscula

//partes da String
console.log(texto.substring(0, 4)); //Aula
console.log(texto.slice(-10)); //JavaScript

// Substituição de parte da String
let texto2 = texto.replace("Java", "Type") // Auls de Type  de Scripts
console.log(texto2);

// tesoura(trim )
let txeto3 = "  JavaScript  ";
console.log(txeto3); //"  JavaScript  "
console.log(txeto3.trim()); //"JavaScript"

// Separação de Texto de String

let linguagens = "JavaScript, Python, PHP, C++, Java";
let linguagensArray = linguagens.split(", ");
console.log(linguagens);
console.log(linguagensArray);

//desfio
//contar a quantidade de caracteres sem espaço
let desafio = "Bom Dia Com Muita Alegria"
let solucaodesafio = desafio.replaceAll("","");
console.log(desafio);
console.log(solucaodesafio);
console.log(desafio.length);
console.log(solucaodesafio.length);