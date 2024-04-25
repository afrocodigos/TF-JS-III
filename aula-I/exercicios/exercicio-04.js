// Lista de carros disponíveis para locação
let carrosDisponiveis = [
    { modelo: "Toyota Corolla", ano: 2020, precoDia: 100 },
    { modelo: "Honda Civic", ano: 2019, precoDia: 90 },
    { modelo: "Ford Focus", ano: 2018, precoDia: 80 },
    { modelo: "Chevrolet Cruze", ano: 2019, precoDia: 85 },
    { modelo: "Volkswagen Golf", ano: 2020, precoDia: 95 }
];

// Lista de clientes com informações sobre a locação// 

let clientes = [ 
    { nome: "João", dias: 3, modelo: "Toyota Corolla" },
    { nome: "Maria", dias: 5, modelo: "Ford Focus" },
    { nome: "Carlos", dias: 2, modelo: "Gol" } 
];

// Calcule o preço total da locação para cada cliente de acordo com o modelo escolhido utilizando o FOR

//1. for => liste todes clientes
//2. criar o segundo for  listar todos os carros. 

for(let i = 0; i < clientes.length; i++){
    let cliente = clientes[i]
    let precoTotalLocacao = null;

    for(let j = 0; j < carrosDisponiveis.length; j++ ){
        let carro = carrosDisponiveis[j]
        if(carro.modelo == cliente.modelo){
            precoTotalLocacao = carro.precoDia * cliente.dias
           // console.log(`Olá, ${cliente.nome}\n o valor da sua locação de ${cliente.dias} ficou no total de R$ ${precoTotalLocacao.toFixed(2)}`)
        }
    }

   // if(precoTotalLocacao == null) console.log(` ${cliente.nome}, infelizmente não encontramos o modelo solicitado. :(`)   
}


let categoria = "bolsas ecobag"

console.log(categoria[0].toUpperCase() + categoria.slice(1))
const estadosCidades = [
    {
        estado: "São Paulo",
        cidades: ["São Paulo", "Guarulhos", "Campinas", "São Bernardo do Campo", "Santo André"]
    },
    {
        estado: "Rio de Janeiro",
        cidades: ["Rio de Janeiro", "Niterói", "São Gonçalo", "Duque de Caxias", "Nova Iguaçu"]
    },
    {
        estado: "Minas Gerais",
        cidades: ["Belo Horizonte", "Uberlândia", "Contagem", "Juiz de Fora", "Betim"]
    }
];

// Loop for para obter apenas as cidades de São Paulo
for (let i = 0; i < estadosCidades.length; i++) {
    const estado = estadosCidades[i];
    if (estado.estado === "São Paulo") {
        const cidadesSP = estado.cidades;
        console.log("Cidades de São Paulo:", cidadesSP);
        // Aqui você pode fazer o que precisar com as cidades de São Paulo
        break; // Se você só quer as cidades de São Paulo, você pode sair do loop depois de encontrá-las
    }
}
