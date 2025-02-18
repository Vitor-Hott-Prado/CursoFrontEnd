// Estrtura de Dados 

//condicionais (if / Swith Case)
//if 
var precoProduto = 150;
if (precoProduto >= 100){
    console.log("Valor a Pagar "
        +(precoProduto))
           
}  else{
    console.log("Vlor a Pagr:"
           +(precoProduto));
}


//Switch Case
var mes = 2

switch (mes) {
    case 1:
        console.log("Janeiro")
        break;
    case 2:
        console.log("Fevereiro")
        break;
    case 3:
        console.log("Março")

    default:
        console.log("Outro Mês")
        break;
}

//Estrutura de Repetição

// For (Contáveis)

for (let i =0; i<100; i++){
   console.log(i);
}

//while(Incontáveias)

var continuar = true; //condição de parada
//a parda acontece quando continar for false 
var numeroEscolhido = 3;
var contador = 0;


while(continuar){
    contador++;
    let numeroSorteado = Math.round(Math.random()*10);
    if(numeroEscolhido==numeroSorteado){
        continuar = false;
        console.log("Acertou");
    }
    console.log("Tentaiva : "+contador);
}

//Funções (Ação especifica) podendo  ser ch,ada a qualquer 
// momentp dentro do código

function ola (nome){ // function return
    return "Olá, "+ nome;
}

function hello (nome){ // function void
  console.log("Hello "+ nome );
}

console.log(ola("Vitor"));

hello("Vitor");