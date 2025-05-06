let alunos = [
    { nome: "João", idade: 20, nota: 8.5 },
    { nome: "Maria", idade: 22, nota: 9.0 },
    { nome: "Pedro", idade: 19, nota: 7.5 }
];

// a. Adicionar um novo aluno
alunos.push({ nome: "Ana", idade: 21, nota: 8.8 });
console.log("Lista de alunos atualizada:", alunos);

// b. Encontrar o aluno com a maior nota
let alunoTop = alunos.reduce((maior, aluno) => aluno.nota > maior.nota ? aluno : maior);
console.log("Aluno com a maior nota:", alunoTop);

// c. Filtrar os alunos com nota maior que 8
let alunosBons = alunos.filter(aluno => aluno.nota > 8);
console.log("Alunos com nota maior que 8:", alunosBons);
