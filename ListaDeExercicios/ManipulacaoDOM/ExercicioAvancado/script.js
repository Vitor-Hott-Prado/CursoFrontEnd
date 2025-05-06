// Exercício 1: Capturando Eventos do Teclado
const campoTeclado = document.getElementById('campoTeclado');
campoTeclado.addEventListener('keydown', function(event) {
  console.log(`Tecla pressionada: ${event.key}`);
});

// Exercício 2: Campo de Busca com Sugestões Dinâmicas
const campoBusca = document.getElementById('campoBusca');
const sugestoes = document.getElementById('sugestoes');
const listaSugestoes = ['JavaScript', 'HTML', 'CSS', 'Python', 'Ruby', 'Java'];

campoBusca.addEventListener('input', function() {
  const filtro = campoBusca.value.toLowerCase();
  sugestoes.innerHTML = '';  // Limpa as sugestões anteriores

  if (filtro) {
    listaSugestoes.filter(item => item.toLowerCase().includes(filtro)).forEach(item => {
      const li = document.createElement('li');
      li.textContent = item;
      sugestoes.appendChild(li);
    });
  }
});

// Exercício 3: Validação de Formulário
const formCadastro = document.getElementById('formCadastro');
formCadastro.addEventListener('submit', function(event) {
  event.preventDefault();  // Impede o envio do formulário

  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const senha = document.getElementById('senha').value;

  if (nome && email && senha) {
    alert('Formulário enviado com sucesso!');
    formCadastro.reset();  // Limpar o formulário
  } else {
    alert('Todos os campos devem ser preenchidos!');
  }
});

// Exercício 4: Galeria de Imagens Dinâmica
const inputImagens = document.getElementById('inputImagens');
const galeria = document.getElementById('galeria');

inputImagens.addEventListener('change', function(event) {
  const arquivos = event.target.files;
  
  for (let i = 0; i < arquivos.length; i++) {
    const reader = new FileReader();
    reader.onload = function(e) {
      const img = document.createElement('img');
      img.src = e.target.result;
      galeria.appendChild(img);
    };
    reader.readAsDataURL(arquivos[i]);
  }
});

// Exercício 5: Jogo de Quiz
const pergunta = document.getElementById('pergunta');
const respostas = document.querySelectorAll('.resposta');

const quizData = {
  pergunta: 'Qual é a capital do Brasil?',
  respostas: {
    A: 'Rio de Janeiro',
    B: 'São Paulo',
    C: 'Brasília'
  },
  correta: 'C'
};

pergunta.textContent = quizData.pergunta;
respostas.forEach(button => {
  const resposta = button.getAttribute('data-resposta');
  button.textContent = quizData.respostas[resposta];

  button.addEventListener('click', function() {
    if (resposta === quizData.correta) {
      alert('Resposta correta!');
    } else {
      alert('Resposta incorreta. Tente novamente!');
    }
  });
});