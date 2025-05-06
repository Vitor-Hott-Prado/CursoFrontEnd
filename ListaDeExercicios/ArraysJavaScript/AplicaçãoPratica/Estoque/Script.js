let estoque = [
    { produto: "Arroz", quantidade: 10, preco: 5.0 },
    { produto: "Feijão", quantidade: 20, preco: 7.5 },
    { produto: "Macarrão", quantidade: 15, preco: 4.0 }
];

function adicionarProduto(produto, quantidade, preco) {
    estoque.push({ produto, quantidade, preco });
}

function atualizarQuantidade(nomeProduto, novaQuantidade) {
    let item = estoque.find(p => p.produto === nomeProduto);
    if (item) {
        item.quantidade = novaQuantidade;
    } else {
        console.log("Produto não encontrado.");
    }
}

function calcularValorTotal() {
    return estoque.reduce((total, item) => total + (item.quantidade * item.preco), 0);
}

// Testes
adicionarProduto("Farinha", 12, 6.5);
atualizarQuantidade("Arroz", 25);
console.log(estoque);
console.log("Valor total do estoque: R$ " + calcularValorTotal().toFixed(2));