// Lista de carros disponíveis para locação
let carrosDisponiveis = [
    { modelo: "Toyota Corolla", ano: 2020, precoDia: 100 },
    { modelo: "Honda Civic", ano: 2019, precoDia: 90 },
    { modelo: "Ford Focus", ano: 2018, precoDia: 80 },
    { modelo: "Chevrolet Cruze", ano: 2019, precoDia: 85 },
    { modelo: "Volkswagen Golf", ano: 2020, precoDia: 95 }
];

// Lista de clientes com informações sobre a locação
let clientes = [
    { nome: "João", dias: 3 },
    { nome: "Maria", dias: 5 },
    { nome: "Carlos", dias: 2 }
];

// Calcular e exibir o preço total da locação para cada cliente
for (let i = 0; i < clientes.length; i++) {
    let cliente = clientes[i];
    let precoTotalLocacao = null;

    for (let j = 0; j < carrosDisponiveis.length; j++) {
        let carro = carrosDisponiveis[j];

        if (carro.ano >= 2019 && cliente.dias >= 3) {
            precoTotalLocacao = carro.precoDia * cliente.dias;
            break;
        }
    }

    if (precoTotalLocacao !== null) {
        console.log(`${cliente.nome}: R$ ${precoTotalLocacao}`);
    } else {
        console.log(`${cliente.nome}: Carro não disponível para locação`);
    }
}


