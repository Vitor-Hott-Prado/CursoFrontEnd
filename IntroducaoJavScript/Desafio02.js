//3. Verificação de Números Pares

var prompt = require("prompt-sync")();
for(let i ; i<20 ; i++){
    //imprimir nº pares
    let resto = (i%2);
    if(resto == 0){
        console.log(i);
    }
}