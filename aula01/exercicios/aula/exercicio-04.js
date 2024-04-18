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
    { nome: "João", dias: 3, modelo: "Toyota Corolla" }, 
    { nome: "Maria", dias: 5, modelo: "Ford Focus" }, 
    { nome: "Carlos", dias: 2, modelo: "Volkswagen Gol" } 
];

//// Calcule o preço total da locação para cada cliente


for (let i = 0; i < clientes.length; i++) {
    let cliente = clientes[i];
    let precoTotalLocacao = null;
  
    for (let j = 0; j < carrosDisponiveis.length; j++) {
      let carro = carrosDisponiveis[j];
  
      if (carro.modelo === cliente.modelo) {
            precoTotalLocacao = cliente.dias * carro.precoDia;
    
            console.log(`Cliente: ${cliente.nome}, Modelo: ${carro.modelo}, 
            Preço total: ${precoTotalLocacao.toFixed(2)}`);
        };
    };
  };