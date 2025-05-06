// Classe Livro
class Livro {
    constructor(titulo, autor) {
      this.titulo = titulo;
      this.autor = autor;
    }
  
    exibir() {
      return `${this.titulo} - ${this.autor}`;
    }
  }
  
  // Classe Biblioteca
  class Biblioteca {
    constructor() {
      this.livros = [];
    }
  
    adicionarLivro(livro) {
      this.livros.push(livro);
    }
  
    listarLivros() {
      return this.livros.map(l => l.exibir()).join('\n');
    }
  
    buscarPorTitulo(titulo) {
      return this.livros.find(livro => livro.titulo.toLowerCase() === titulo.toLowerCase()) || null;
    }
  }
  

  // Classe Tarefa
class Tarefa {
    constructor(descricao) {
      this.descricao = descricao;
      this.concluida = false;
    }
  
    concluir() {
      this.concluida = true;
    }
  
    exibir() {
      return `${this.concluida ? "[✔]" : "[ ]"} ${this.descricao}`;
    }
  }
  
  // Classe ListaTarefas
  class ListaTarefas {
    constructor() {
      this.tarefas = [];
    }
  
    adicionarTarefa(tarefa) {
      this.tarefas.push(tarefa);
    }
  
    listarTarefas() {
      return this.tarefas.map(t => t.exibir()).join('\n');
    }
  }
  

  // Classe Produto
class Produto {
    constructor(nome, preco) {
      this.nome = nome;
      this.preco = preco;
    }
  }
  
  // Classe CarrinhoDeCompras
  class CarrinhoDeCompras {
    constructor() {
      this.itens = [];
    }
  
    adicionar(produto) {
      this.itens.push(produto);
    }
  
    remover(nome) {
      const index = this.itens.findIndex(p => p.nome === nome);
      if (index >= 0) this.itens.splice(index, 1);
    }
  
    calcularTotal() {
      return this.itens.reduce((total, p) => total + p.preco, 0).toFixed(2);
    }
  
    listarItens() {
      return this.itens.map(p => `${p.nome} - R$${p.preco.toFixed(2)}`).join('\n');
    }
  }
  