// Scriopt de Maniplução DOM

// Usando getElementByid -> varialver Simples

let titulo = document.getElementById("titulo"); //html -> id
console.log(titulo); // mostrar as informções do id
titulo.innerText = "Outro Titulo"; // Modificr o conteudo da Id

//getElmentByTagName -> variavel do Vetor(Array)

let paragrafo = document.getElementsByTagName("p"); //html
paragrafo[0].innerText = "Exemplo de Parágrafo Modifcado por DOM";

//modifcar o style do elemto
paragrafo[1].style.color = "red";

//getElmentByClassName -> varialvel do tipo Vetor(Array)
let descricao = document.getElementsByClassName("descricao");
for (let i = 0; i < descricao.length; i++) {
  descricao[i].style.color = "blue";
}

// querySelector -> VARIALVE SIMPLES -> selecion ao 1º
let p = document.querySelector("p");
//modifição de fonte
p.style.fontWeight = "bold";

//quweSelctorAll -> varialvel Vetor(Array) -> Selecona Todos
let descricaoAll = document.querySelectorAll(".descricao");
descricaoAll.forEach(element =>{
    element.style.fontWeight ="bold";
});

//evnetos listener(ouvinte)

//
function MudarCorFundo(){
    let body = document.querySelector("body");
    body.style.backgroundColor = "blue";
}

// Chamndo direto no script o ouvinte 
document.getElementById("btnColor").addEventListener(
    "click",OutraCor 
)

function OutraCor(){
 let body = document.querySelector("body")
body.style.backgroundColor = "Orange";
}