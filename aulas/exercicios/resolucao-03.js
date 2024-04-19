// Lista de carros disponíveis
let carros = [
    { modelo: "Toyota Corolla", ano: 2020, precoDia: 100, disponivel: true },
    { modelo: "Honda Civic", ano: 2019, precoDia: 90, disponivel: true },
    { modelo: "Ford Focus", ano: 2018, precoDia: 80, disponivel: false },
    { modelo: "Chevrolet Cruze", ano: 2019, precoDia: 85, disponivel: true },
    { modelo: "Volkswagen Golf", ano: 2020, precoDia: 95, disponivel: true }
];

// Variável para armazenar o preço total da locação de três dias
let precoTotal = 0;

// Iterar sobre a lista de carros com um loop for
for (let i = 0; i < carros.length; i++) {
    // Verificar se o carro está disponível para locação
    if (carros[i].disponivel) {
        // Calcular o preço total da locação de três dias para o carro atual
        precoTotal += carros[i].precoDia * 3;
    }
}

// Exibir o preço total da locação de três dias no console
console.log("Preço total da locação de três dias para todos os carros disponíveis: $" + precoTotal);
