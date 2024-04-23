// Lista de produtos ecológicos
let produtosEcologicos = [
    { nome: 'Copo de bambu', disponivel: true },
    { nome: 'Sacola retornável', disponivel: false },
    { nome: 'Escova de dentes de bambu', disponivel: true },
    { nome: 'Canudos de metal', disponivel: true },
    { nome: 'Frasco de vidro para armazenamento', disponivel: false }
];

// Array para armazenar os produtos disponíveis
let produtosDisponiveis = [];

// Iterar sobre a lista de produtos ecológicos com um loop for
for (let i = 0; i < produtosEcologicos.length; i++) {
    // Verificar se o produto está disponível
    if (produtosEcologicos[i].disponivel) {
        // Se estiver disponível, adicionar ao array de produtos disponíveis
        produtosDisponiveis.push(produtosEcologicos[i].nome);
    }
}

// Exibir os produtos disponíveis
console.log("Produtos ainda disponíveis:");
console.log(produtosDisponiveis);