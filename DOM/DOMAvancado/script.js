// adicionar elementos avançados com DOM
// construir um cabeçalho com DOM (Header)

let header = document.createElement("header");
header.style.backgroundColor = "black";
header.style.height = "8vh";    
document.body.appendChild(header);  //adicionado o header cono elementos filh do body
document.body.style.margin = "0px"; // retiramdp a margem do body

// adiinar elementos no header 

let divNav = document.createElement("div");
divNav.style.display = "flex";
divNav.style.justifyContent = "space-Around";
divNav.style.color = "alicerblue";
divNav.style.height= "100%";
divNav.style.alignItems = "center";
divNav.style.fontSize = "5vh";
divNav.style.fontFamily = "Comic Sans MS";  
header.appendChild(divNav);

let instensNav = ["Home", "Produtos", "Contato"];   
//adicionar intens no nav
instensNav.forEach(element => {
    let item = document.createElement("a");
    item.innerText = element;
    divNav.appendChild(item);

});