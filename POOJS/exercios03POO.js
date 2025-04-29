// Criar uma classe representando uma conta bancária

class ContaBancaria {
    // Atributos privados para armazenar o titular e o saldo da conta
    #titular
    #saldo

    // Construtor da classe, que inicializa o titular e o saldo da conta
    constructor(titular, saldo = 0) {
        // Atribuir o titular e o saldo passados como parâmetros ao construtor
        this.#titular = titular;
        this.#saldo = saldo;
    }

    // Método para depositar um valor na conta
    depositar(valor) {
        // Adicionar o valor depositado ao saldo da conta
        this.#saldo += valor;
        // Exibir mensagem de depósito realizado com sucesso e saldo atual
        console.log(`Depósito realizado com sucesso! Saldo atual: ${this.#saldo}`);
    }

    // Método para sacar um valor da contaS
    sacar(valor) {
        // Verificar se o saldo da conta é suficiente para realizar o saque
        if (this.#saldo >= valor) {
            // Subtrair o valor sacado do saldo da conta
            this.#saldo -= valor;
            // Exibir mensagem de saque realizado com sucesso e saldo atual
            console.log(`Saque realizado com sucesso! Saldo atual: ${this.#saldo}`);
        } else {
            // Exibir mensagem de saldo insuficiente e saldo atual
            console.log(`Saldo insuficiente! Saldo atual: ${this.#saldo}`);
        }
    }

    // Método para exibir o saldo da conta
    exibirSaldo() {
        // Exibir mensagem com o titular e o saldo da conta
        console.log(`Titular: ${this.#titular}, Saldo: ${this.#saldo}`);
    }
}

// Criar uma instância da classe ContaBancaria com o titular "Vitor" e saldo inicial de 1000
let conta = new ContaBancaria("Vitor", 1000);

// Exibir o saldo da conta
conta.exibirSaldo();

// Depositar 500 na conta
conta.depositar(500);

// Exibir o saldo da conta após o depósito
conta.exibirSaldo();

// Sacar 200 da conta
conta.sacar(200);

// Exibir o saldo da conta após o saque
conta.exibirSaldo();