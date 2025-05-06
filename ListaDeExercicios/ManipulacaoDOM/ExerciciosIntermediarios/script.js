// Exercício 1: Criando Elementos Dinamicamente
const botaoAdicionarParagrafo = document.getElementById('botaoAdicionarParagrafo');
const containerParagrafos = document.getElementById('container-paragrafos');

botaoAdicionarParagrafo.addEventListener('click', function() {
  const novoParagrafo = document.createElement('p');
  novoParagrafo.textContent = 'Este é um parágrafo criado dinamicamente!';
  containerParagrafos.appendChild(novoParagrafo);
});

// Exercício 2: Lista de Tarefas (To-Do List)
const inputNovaTarefa = document.getElementById('novaTarefa');
const botaoAdicionarTarefa = document.getElementById('botaoAdicionarTarefa');
const listaTarefas = document.getElementById('listaTarefas');

botaoAdicionarTarefa.addEventListener('click', function() {
  const tarefaTexto = inputNovaTarefa.value.trim();
  
  if (tarefaTexto !== '') {
    const novoItem = document.createElement('li');
    novoItem.textContent = tarefaTexto;
    
    const botaoRemover = document.createElement('button');
    botaoRemover.textContent = 'Remover';
    botaoRemover.classList.add('remover');
    botaoRemover.addEventListener('click', function() {
      novoItem.remove();
    });
    
    novoItem.appendChild(botaoRemover);
    listaTarefas.appendChild(novoItem);
    
    inputNovaTarefa.value = '';  // Limpar o campo de input
  }
});

// Exercício 3: Mudar Tema (Modo Claro/Escuro)
const botaoMudarTema = document.getElementById('botaoMudarTema');

botaoMudarTema.addEventListener('click', function() {
  document.body.classList.toggle('modo-escuro');
  
  const modoEscuroAtivo = document.body.classList.contains('modo-escuro');
  botaoMudarTema.textContent = modoEscuroAtivo ? 'Mudar para Modo Claro' : 'Mudar para Modo Escuro';
});
