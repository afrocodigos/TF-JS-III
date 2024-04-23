/* Dado uma lista de carros disponíveis, armazene somente o preço e nome do carro em uma nova lista e retorne somente esses valores */

// Lista de carros disponíveis
let carros = [
    { modelo: "Toyota Corolla", ano: 2020, precoDia: 100, disponivel: true },
    { modelo: "Honda Civic", ano: 2019, precoDia: 90, disponivel: true },
    { modelo: "Ford Focus", ano: 2018, precoDia: 80, disponivel: false },
    { modelo: "Chevrolet Cruze", ano: 2019, precoDia: 85, disponivel: true },
    { modelo: "Volkswagen Golf", ano: 2020, precoDia: 95, disponivel: true }
];

// Array para armazenar somente o preço e nome de cada carro
let precosENomes = [];

// Iterar sobre a lista de carros com um loop for
for (let i = 0; i < carros.length; i++) {
    // Armazenar o preço e nome de cada carro na nova lista
    precosENomes.push({ modelo: carros[i].modelo, precoDia: carros[i].precoDia });
}

// Exibir a nova lista com os preços e nomes dos carros
console.log("Preço e nome de cada carro:");
console.log(precosENomes);
