// diferença entre POO e Procedural (estrutural)

//procedural
//declaração de variavel
let produto1 = {
  nome: "Celular",
  preco: 1000,
  deconto: function(){
      return this.preco * 0.1;
  }
}//coleção

let produto2 = {
  nome: "Camera digital",
  preco: 5000,
  deconto: function(){
      return this.preco * 0.1;
  }
}//coleção

// X



// POO - classe de produtos

class Produto {
  //atributos
  #nome; // # = privado
  #preco; // # = privado

  constructor(nome, preco){
      this.#nome = nome;
      this.#preco = preco;
  }
  get getNome(){
      return this.#nome;
  }
  get getPreco(){
      return this.#preco;
  }
  deconto(){
      return this.getPreco * 0.1;  //erro ao chamar o this.preco, pois o atributo é privado
  }
}

// instanciar um objeto
let p1 = new Produto("Impressoras", 2000);
let p2 = new Produto("Tablet", 1500);


//examplos de uso de POO

class Pessoa {
  //atributos privados
  #nome;
  #idade;
  #cpf;

  //construtor
  constructor(nome, idade, cpf){
      this.#nome = nome;
      this.#idade = idade;
      this.#cpf = cpf;
  }
  //metodos publicos
  get getNome(){return this.#nome;}
  get getIdade(){return this.#idade;}
  get getCpf(){return this.#cpf;}

  set setIdade(idade){this.#idade = idade;}

  //metodos para informacoes
  exibirInfo(){
      console.log(`Nome: ${this.#nome} \nIdade: ${this.#idade} \nCPF: ${this.#cpf}`);
  }
}

let pessoa1 = new Pessoa("Pietro", 17, "123.456.789-00");
let pessoa2 = new Pessoa("José", 20, "333.456.789-00");

pessoa1.exibirInfo();
pessoa2.exibirInfo();

pessoa1.setIdade = 18; //atualizei a idade da pessoa1
pessoa1.exibirInfo(); //exibir as informações atualizadas

//HERANÇA     (extends)
class Funcionario extends Pessoa{
  //atributos privados
  #cargo;
  #salario;

  //construtor
  constructor(nome, idade, cpf, cargo, salario){
      super(nome, idade, cpf); //chamar o construtor da superclasse
      this.#cargo = cargo;
      this.#salario = salario;
  }

  //metodos publicos
  get getCargo(){return this.#cargo;}
  get getSalario(){return this.#salario;}
  set setSalario(salario){this.#salario = salario;}
  set setCargo(cargo){this.#cargo = cargo;}

  //metodos para exibirinfo
  exibirInfo(){
      super.exibirInfo(); //chama o metodo exibirInfo da superclasse
      console.log(`Cargo: ${this.#cargo} \nSalário: ${this.#salario}`);
  }
}

let funcionario1 = new Funcionario("Vitor", 25, "123.446.789-00", "Motorista", 3000);
funcionario1.exibirInfo();
funcionario1.setSalario = 3500;
funcionario1.exibirInfo(); //exibir as informações atualizadas