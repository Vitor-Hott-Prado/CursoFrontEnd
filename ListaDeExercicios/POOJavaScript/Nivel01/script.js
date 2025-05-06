// Classe Pessoa
class Pessoa {
    constructor(nome, idade) {
      this.nome = nome;
      this.idade = idade;
    }
  
    apresentar() {
      console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
    }
  }
  
  // Classe Livro
  class Livro {
    constructor(titulo, autor, paginas) {
      this.titulo = titulo;
      this.autor = autor;
      this.paginas = paginas;
    }
  
    exibirInfo() {
      console.log(`Título: ${this.titulo}`);
      console.log(`Autor: ${this.autor}`);
      console.log(`Páginas: ${this.paginas}`);
    }
  }
  
  // Classe Calculadora com métodos estáticos
  class Calculadora {
    static somar(a, b) {
      return a + b;
    }
  
    static subtrair(a, b) {
      return a - b;
    }
  
    static multiplicar(a, b) {
      return a * b;
    }
  
    static dividir(a, b) {
      if (b === 0) {
        return "Erro: divisão por zero";
      }
      return a / b;
    }
  }
  
  // Exemplos de uso
  const pessoa = new Pessoa("Ana", 32);
  pessoa.apresentar();
  
  const livro = new Livro("O Pequeno Príncipe", "Antoine de Saint-Exupéry", 96);
  livro.exibirInfo();
  
  console.log("Soma:", Calculadora.somar(8, 3));
  console.log("Subtração:", Calculadora.subtrair(8, 3));
  console.log("Multiplicação:", Calculadora.multiplicar(8, 3));
  console.log("Divisão:", Calculadora.dividir(8, 0)); // divisão por zero
  