// Atividade 1 : Criar uma classe representando veiculo
// Atributos: marca, modelo, ano
// Metodos :  exibirInfo()

class Veiculo {
    // Encapsulamento de atributos
    #marca;
    #modelo;
    #ano;

    // Construtor
    constructor(marca, modelo, ano) {
        this.#marca = marca;
        this.#modelo = modelo;
        this.#ano = ano;
    }

    // Metodos
    exibirInfo() {
        console.log(`Marca: ${this.#marca} \nModelo: ${this.#modelo} \nAno: ${this.#ano}`);
    }
}

// Subclasse Carro
class Carro extends Veiculo {
    #quantidadePortas;

    // Construtor
    constructor(marca, modelo, ano, quantidadePortas) {
        super(marca, modelo, ano);
        this.#quantidadePortas = quantidadePortas;
    }

    // Sobrescrevendo o método exibirInfo()
    exibirInfo() {
        super.exibirInfo();
        console.log(`Quantidade de Portas: ${this.#quantidadePortas}`);
    }
}

// Instanciar os objetos
let carro1 = new Carro("Volkswagen", "Jetta GLI", 2023, 4);
carro1.exibirInfo();

