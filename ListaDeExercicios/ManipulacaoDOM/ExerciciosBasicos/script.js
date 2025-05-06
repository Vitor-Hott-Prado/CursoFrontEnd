// Selecionando os elementos
const titulo = document.getElementById('titulo');
const paragrafo = document.getElementById('paragrafo');
const botao1 = document.getElementById('botao1');
const botao2 = document.getElementById('botao2');
const botao3 = document.getElementById('botao3');
const botao4 = document.getElementById('botao4');

// Exercício 1: Selecionando Elementos e Exibindo Conteúdo no Console
botao1.addEventListener('click', function() {
  console.log('Título: ' + titulo.textContent);
  console.log('Parágrafo: ' + paragrafo.textContent);
});

// Exercício 2: Modificando o Texto de um Elemento
botao2.addEventListener('click', function() {
  titulo.textContent = 'Título Alterado';
  paragrafo.textContent = 'Parágrafo Alterado';
});

// Exercício 3: Alterando Estilos com JavaScript
botao3.addEventListener('click', function() {
  document.body.style.backgroundColor = 'blue';
  document.body.style.color = 'white';
});

// Exercício 4: Adicionando e Removendo Classes
botao4.addEventListener('click', function() {
  titulo.classList.toggle('bg-blue');
});
