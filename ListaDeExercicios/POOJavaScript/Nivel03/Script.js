// Classe Funcionario
class Funcionario {
    constructor(nome, salario) {
      this.nome = nome;
      this.salario = salario;
    }
  
    salarioTotal() {
      return this.salario;
    }
  }
  
  // Classe Gerente (herda de Funcionario)
  class Gerente extends Funcionario {
    constructor(nome, salario, bonus) {
      super(nome, salario);
      this.bonus = bonus;
    }
  
    salarioTotal() {
      return this.salario + this.bonus;
    }
  }
  
  // Classe base Animal
class Animal {
    constructor(nome) {
      this.nome = nome;
    }
  
    som() {
      return "Som indefinido";
    }
  
    falar() {
      console.log(`${this.nome} diz: ${this.som()}`);
    }
  }
  
  // Subclasse Cachorro
  class Cachorro extends Animal {
    som() {
      return "Au au!";
    }
  }
  
  // Subclasse Gato
  class Gato extends Animal {
    som() {
      return "Miau!";
    }
  }

  class Carro {
    #velocidade;
  
    constructor() {
      this.#velocidade = 0;
    }
  
    acelerar() {
      this.#velocidade += 10;
      console.log("Acelerando...");
    }
  
    frear() {
      if (this.#velocidade >= 10) {
        this.#velocidade -= 10;
      } else {
        this.#velocidade = 0;
      }
      console.log("Freando...");
    }
  
    getVelocidade() {
      return this.#velocidade;
    }
  }
  