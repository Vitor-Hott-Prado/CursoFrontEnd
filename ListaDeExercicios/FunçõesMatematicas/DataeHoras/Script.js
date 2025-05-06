// 1. Exibir a data e hora atuais no formato: "Hoje é [dd/mm/aaaa] e agora são [hh:mm:ss]"
function exibirDataHoraAtual() {
    let agora = new Date();
    let dia = String(agora.getDate()).padStart(2, '0');
    let mes = String(agora.getMonth() + 1).padStart(2, '0');
    let ano = agora.getFullYear();
    let horas = String(agora.getHours()).padStart(2, '0');
    let minutos = String(agora.getMinutes()).padStart(2, '0');
    let segundos = String(agora.getSeconds()).padStart(2, '0');
    
    console.log(`Hoje é ${dia}/${mes}/${ano} e agora são ${horas}:${minutos}:${segundos}`);
}

exibirDataHoraAtual();

// 2. Calcular a idade em anos completos a partir da data de nascimento
function calcularIdade(dataNascimento) {
    let nascimento = new Date(dataNascimento);
    let hoje = new Date();
    let idade = hoje.getFullYear() - nascimento.getFullYear();
    let mes = hoje.getMonth() - nascimento.getMonth();
    
    if (mes < 0 || (mes === 0 && hoje.getDate() < nascimento.getDate())) {
        idade--;
    }
    return idade;
}

// Exemplo de uso: Pedir ao usuário para inserir sua data de nascimento
let dataNascimento = prompt("Digite sua data de nascimento (no formato aaaa-mm-dd):");
console.log(`Sua idade é ${calcularIdade(dataNascimento)} anos.`);

// 3. Função que recebe uma data no formato "aaaa-mm-dd" e retorna o nome do dia da semana
function nomeDoDiaSemana(data) {
    const diasDaSemana = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
    let dataObj = new Date(data);
    return diasDaSemana[dataObj.getDay()];
}

// Exemplo de uso:
let dataExemplo = "2025-05-06"; // Qualquer data no formato "aaaa-mm-dd"
console.log(`O dia da semana de ${dataExemplo} é: ${nomeDoDiaSemana(dataExemplo)}`);

// 4. Calcular quantos dias faltam para o próximo Natal
function diasParaONatal() {
    let hoje = new Date();
    let natal = new Date(hoje.getFullYear(), 11, 25); // 25 de dezembro
    if (hoje > natal) {
        natal.setFullYear(hoje.getFullYear() + 1); // Se já passou o Natal deste ano, calcular para o próximo
    }
    let diffTime = natal - hoje;
    let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); // Convertendo milissegundos para dias
    return diffDays;
}

console.log(`Faltam ${diasParaONatal()} dias para o próximo Natal.`);

// 5. Função para calcular a diferença entre duas datas em dias
function diferencaEmDias(data1, data2) {
    let d1 = new Date(data1);
    let d2 = new Date(data2);
    let diffTime = Math.abs(d2 - d1); // Diferença absoluta
    let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); // Convertendo milissegundos para dias
    return diffDays;
}

// Exemplo de uso:
let data1 = "2025-05-06";
let data2 = "2025-12-25"; // Natal
console.log(`A diferença entre ${data1} e ${data2} é de ${diferencaEmDias(data1, data2)} dias.`);
