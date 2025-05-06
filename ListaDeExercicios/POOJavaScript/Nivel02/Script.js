// Classe Aluno
class Aluno {
    constructor(nome) {
      this.nome = nome;
      this.notas = [];
    }
  
    adicionarNota(nota) {
      if (typeof nota === 'number' && nota >= 0 && nota <= 10) {
        this.notas.push(nota);
      } else {
        console.log("Nota inválida. Insira um número entre 0 e 10.");
      }
    }
  
    calcularMedia() {
      if (this.notas.length === 0) return 0;
      const soma = this.notas.reduce((acc, nota) => acc + nota, 0);
      return soma / this.notas.length;
    }
  
    situacao() {
      const media = this.calcularMedia();
      return media >= 7 ? "Aprovado" : "Reprovado";
    }
  }
  
  // Classe Produto (estoque)
  class Produto {
    constructor(nome, preco, quantidade) {
      this.nome = nome;
      this.preco = preco;
      this.quantidade = quantidade;
    }
  
    vender(qtd) {
      if (qtd <= this.quantidade) {
        this.quantidade -= qtd;
        console.log(`${qtd} unidade(s) de ${this.nome} vendida(s).`);
      } else {
        console.log("Estoque insuficiente.");
      }
    }
  
    repor(qtd) {
      this.quantidade += qtd;
      console.log(`${qtd} unidade(s) adicionada(s) ao estoque.`);
    }
  
    exibirInfo() {
      console.log(`Produto: ${this.nome}`);
      console.log(`Preço: R$${this.preco.toFixed(2)}`);
      console.log(`Quantidade em estoque: ${this.quantidade}`);
    }
  }
  
  // Classe ContaBancaria
  class ContaBancaria {
    constructor(titular, saldo = 0) {
      this.titular = titular;
      this.saldo = saldo;
    }
  
    depositar(valor) {
      if (valor > 0) {
        this.saldo += valor;
        console.log(`Depósito de R$${valor.toFixed(2)} realizado.`);
      } else {
        console.log("Valor inválido para depósito.");
      }
    }
  
    sacar(valor) {
      if (valor <= this.saldo) {
        this.saldo -= valor;
        console.log(`Saque de R$${valor.toFixed(2)} realizado.`);
      } else {
        console.log("Saldo insuficiente para saque.");
      }
    }
  
    consultarSaldo() {
      console.log(`Saldo atual: R$${this.saldo.toFixed(2)}`);
    }
  }
  