/** Métodos são usados para realizar ações específicas ou para fornecer funcionalidades
    específicas dentro de um programa.
    Métodos de arrays são funções incorporadas ao objeto Array em JavaScript que permitem realizar operações específicas em arrays, como adicionar, remover, modificar e acessar elementos. Esses métodos simplificam e tornam mais eficiente o trabalho com arrays em JavaScript. */

// Array de carros disponíveis para locação
let carros = [
    { modelo: "Toyota Corolla", ano: 2020, precoDia: 100, disponivel: true },
    { modelo: "Honda Civic", ano: 2019, precoDia: 90, disponivel: true },
    { modelo: "Ford Focus", ano: 2018, precoDia: 80, disponivel: false },
    { modelo: "Chevrolet Cruze", ano: 2019, precoDia: 85, disponivel: true },
    { modelo: "Volkswagen Golf", ano: 2020, precoDia: 95, disponivel: true }
];

//filter(): Cria um novo array com todos os elementos que passam por um teste implementado pela função fornecida.

// Filtrar carros disponíveis para locação
let carrosDisponiveis = carros.filter(carro => carro.disponivel);
console.log("Carros disponíveis para locação:");
console.log(carrosDisponiveis);

/* // Array de carros disponíveis para locação
let carros = [
    { modelo: "Toyota Corolla", ano: 2020, precoDia: 100, disponivel: true },
    { modelo: "Honda Civic", ano: 2019, precoDia: 90, disponivel: true },
    { modelo: "Ford Focus", ano: 2018, precoDia: 80, disponivel: false },
    { modelo: "Chevrolet Cruze", ano: 2019, precoDia: 85, disponivel: true },
    { modelo: "Volkswagen Golf", ano: 2020, precoDia: 95, disponivel: true }
];

// Array vazio para armazenar os carros disponíveis para locação
let carrosDisponiveis = [];

// Realizar a filtragem com um loop for
for (let i = 0; i < carros.length; i++) {
    // Verificar se o carro está disponível para locação
    if (carros[i].disponivel) {
        // Se estiver disponível, adicionar ao novo array
        carrosDisponiveis.push(carros[i]);
    }
}

console.log("Carros disponíveis para locação:");
console.log(carrosDisponiveis);
*/ 

//map():É muito útil quando você precisa converter ou modificar os elementos de um Array. Veja abaixo o código da imagem

// Criar um array com os preços de locação por dia de todos os carros
let precosLocacao = carros.map(carro => carro.precoDia);
console.log("Preços de locação por dia:");
console.log(precosLocacao);

/** 
 * // Array de carros disponíveis para locação com FOR
let carros = [
    { modelo: "Toyota Corolla", ano: 2020, precoDia: 100, disponivel: true },
    { modelo: "Honda Civic", ano: 2019, precoDia: 90, disponivel: true },
    { modelo: "Ford Focus", ano: 2018, precoDia: 80, disponivel: false },
    { modelo: "Chevrolet Cruze", ano: 2019, precoDia: 85, disponivel: true },
    { modelo: "Volkswagen Golf", ano: 2020, precoDia: 95, disponivel: true }
];

// Array vazio para armazenar os preços de locação por dia
let precosLocacao = [];

// Realizar o mapeamento com um loop for
for (let i = 0; i < carros.length; i++) {
    // Obter o preço de locação por dia de cada carro e adicionar ao novo array
    precosLocacao.push(carros[i].precoDia);
}

console.log("Preços de locação por dia:");
console.log(precosLocacao);
*/

// vamos fazer um exemplo melhor...
 
let dados = [
    {
      id: 1,
      name: 'John Doe',
      location: {
        city: 'São Paulo',
        state: 'SP',
        country: 'Brazil',
        zipcode: '00000-000'
      }
    },
    {
      id: 2,
      name: 'Don Juan',
      location: {
        city: 'Rio de Janeiro',
        state: 'RJ',
        country: 'Brazil',
        zipcode: '11111-111'
      }
    },
    {
      id: 3,
      name: 'The Rock',
      location: {
        city: 'Curitiba',
        state: 'SP',
        country: 'Brazil',
        zipcode: '22222-222'
      }
    }
  ]
  
  /** Suponhamos que não precisamos de todos os dados acima, precisamos apenas de um array com alguns objetos como:
   */
  
  let novosDados = [
    {
      id: 1,
      name: 'John Doe',
      city: 'São Paulo'
    },
    {
      id: 2,
      name: 'Don Juan', 
      city: 'Rio de Janeiro'
    },
    {
      id: 3,
      name: 'The Rock',
      city: 'Curitiba'
    }
  ]
  
  /** Com o famoso FOR */
  
   
  let newData = []
   
  for (var index in data) {
    const user = data[index];
   
    newData.push({
      id: user.id,
      name: user.name,
      city: user.location.city
    });
  }
  
  //A função map() ou map fornece uma maneira fácil de realizar a mesma tarefa e com menos etapas!
  
  let dadosRetornoMap = dados.map(usuario => ({
      id: usuario.id,
      name: usuario.name,
      city: usuario.location.city
    }));

//reduce(): Aplica uma função a um acumulador e a cada valor do array (da esquerda para a direita) para reduzi-lo a um único valor.

// Calcular o preço total para alugar todos os carros por três dias
let precoTotal = carros.reduce((total, carro) => total + carro.precoDia * 3, 0);
console.log("Preço total para alugar todos os carros por três dias: $" + precoTotal);

/* Array de carros disponíveis para locação se fosse com FOR
let carros = [
    { modelo: "Toyota Corolla", ano: 2020, precoDia: 100, disponivel: true },
    { modelo: "Honda Civic", ano: 2019, precoDia: 90, disponivel: true },
    { modelo: "Ford Focus", ano: 2018, precoDia: 80, disponivel: false },
    { modelo: "Chevrolet Cruze", ano: 2019, precoDia: 85, disponivel: true },
    { modelo: "Volkswagen Golf", ano: 2020, precoDia: 95, disponivel: true }
];

// Variável para armazenar o preço total
let precoTotal = 0;

// Calcular o preço total para alugar todos os carros por três dias
for (let i = 0; i < carros.length; i++) {
    let carro = carros[i];
    precoTotal += carro.precoDia * 3;
}

console.log("Preço total para alugar todos os carros por três dias: $" + precoTotal);

*/

//forEach(): Executa uma função para cada elemento do array.

// Exibir informações sobre cada carro disponível para locação
console.log("Informações sobre os carros disponíveis:");
carrosDisponiveis.forEach(carro => {
    console.log("Modelo: " + carro.modelo + ", Ano: " + carro.ano + ", Preço por dia: $" + carro.precoDia);
});


// push() e pop(): Adiciona e remove elementos no final do array, respectivamente.
// Array representando a fila de espera de clientes para alugar um carro
let filaDeEspera = ["João", "Maria", "Carlos"];

// Adicionar um novo cliente à fila de espera
filaDeEspera.push("Laura");
console.log("Nova fila de espera após adicionar Laura:");
console.log(filaDeEspera);

// Remover o próximo cliente da fila de espera
let proximoCliente = filaDeEspera.pop();
console.log("Cliente atendido: " + proximoCliente);
console.log("Nova fila de espera após atender um cliente:");
console.log(filaDeEspera);


//shift() e unshift(): Remove e adiciona elementos no início do array, respectivamente.

// Adicionar um novo cliente ao início da fila de espera
filaDeEspera.unshift("Laura");
console.log("Nova fila de espera após adicionar Laura ao início:");
console.log(filaDeEspera);

// Remover o primeiro cliente da fila de espera
let primeiroCliente = filaDeEspera.shift();
console.log("Primeiro cliente removido: " + primeiroCliente);
console.log("Nova fila de espera após remover o primeiro cliente:");
console.log(filaDeEspera);


//splice(): Adiciona ou remove elementos de uma posição específica do array.

// Array representando a lista de carros disponíveis para locação

//let carrosDisponiveis = ["Toyota Corolla", "Honda Civic", "Ford Focus", "Chevrolet Cruze", "Volkswagen Golf"];

// Adicionar um novo carro à lista na segunda posição
carrosDisponiveis.splice(1, 0, "Nissan Sentra");
console.log("Lista de carros após adicionar o Nissan Sentra na segunda posição:");
console.log(carrosDisponiveis);

// Remover o terceiro carro da lista
let carroRemovido = carrosDisponiveis.splice(2, 1);
console.log("Carro removido da lista: " + carroRemovido);
console.log("Lista de carros após remover o terceiro carro:");
console.log(carrosDisponiveis);


//slice(): Retorna uma cópia de parte do array, selecionada através de um intervalo de índices.

// Array representando a lista de carros disponíveis para locação

//let carrosDisponiveis = ["Toyota Corolla", "Honda Civic", "Ford Focus", "Chevrolet Cruze", "Volkswagen Golf"];

// Obter uma cópia dos carros disponíveis para locação do segundo ao quarto carro
let carrosSelecionados = carrosDisponiveis.slice(1, 4);
console.log("Carros disponíveis selecionados:");
console.log(carrosSelecionados);


//concat(): Combina dois ou mais arrays criando um novo array.

// Array representando a lista de carros de luxo disponíveis para locação
let carrosLuxo = ["BMW", "Mercedes", "Audi"];

// Array representando a lista de carros econômicos disponíveis para locação
let carrosEconomicos = ["Toyota", "Honda", "Ford"];

// Combina os arrays de carros de luxo e carros econômicos em um único array
let todosCarros = carrosLuxo.concat(carrosEconomicos);
console.log("Todos os carros disponíveis para locação:");
console.log(todosCarros);

//find(): Retorna o primeiro elemento no array que satisfaz a função de teste fornecida.

// temos um array que representa a lista de carros disponíveis para locação e queremos encontrar o primeiro carro com um determinado modelo.
// Array representando a lista de carros disponíveis para locação

// Array representando a lista de carros disponíveis para locação
let carrosDisponiveisDetalhes = [
    { modelo: "Toyota Corolla", ano: 2020, precoDia: 100 },
    { modelo: "Honda Civic", ano: 2019, precoDia: 90 },
    { modelo: "Ford Focus", ano: 2018, precoDia: 80 },
    { modelo: "Chevrolet Cruze", ano: 2019, precoDia: 85 },
    { modelo: "Volkswagen Golf", ano: 2020, precoDia: 95 }
];

// Encontrar o primeiro carro com o modelo "Toyota Corolla"
let carroToyota = carrosDisponiveisDetalhes.find(carro => carro.modelo === "Toyota Corolla");

// Exibir informações sobre o carro encontrado
if (carroToyota) {
    console.log("O primeiro carro Toyota Corolla encontrado é:");
    console.log(carroToyota);
} else {
    console.log("Não foi encontrado nenhum carro Toyota Corolla na lista.");
}

//sort(): Ordena os elementos de um array localmente e retorna o array ordenado.

// Temos um array que representa a lista de carros disponíveis para locação e queremos ordená-la por ano de fabricação dos carros.

// Array representando a lista de carros disponíveis para locação
let carrosDisponiveisPorAno = [
    { modelo: "Toyota Corolla", ano: 2020, precoDia: 100 },
    { modelo: "Honda Civic", ano: 2019, precoDia: 90 },
    { modelo: "Ford Focus", ano: 2018, precoDia: 80 },
    { modelo: "Chevrolet Cruze", ano: 2019, precoDia: 85 },
    { modelo: "Volkswagen Golf", ano: 2020, precoDia: 95 }
];

// Ordenar os carros por ano de fabricação
carrosDisponiveisPorAno.sort((a, b) => a.ano - b.ano);

// Exibir a lista de carros ordenada por ano de fabricação
console.log("Lista de carros ordenada por ano de fabricação:");
console.log(carrosDisponiveis);

/** A expressão (a, b) => a.ano - b.ano é uma função de comparação passada como argumento para o método sort(). Vamos analisar isso em mais detalhes:
(a, b) => a.ano - b.ano: Esta é uma função de comparação que recebe dois parâmetros, a e b, que representam dois elementos do array a serem comparados. A função compara os anos de fabricação (ano) desses elementos.
a.ano - b.ano: Dentro da função de comparação, estamos subtraindo o ano de fabricação (ano) do elemento b do ano de fabricação do elemento a. Se o resultado da subtração for negativo, significa que o ano de a é menor que o ano de b, e a deve vir antes de b na ordem. Se for zero, significa que os anos são iguais. Se for positivo, significa que o ano de a é maior que o ano de b, e b deve vir antes de a na ordem.
Essencialmente, ao usar essa função de comparação com o método sort(), estamos instruindo o JavaScript a ordenar os elementos do array com base em seus anos de fabricação, em ordem crescente. Isso significa que os elementos com anos de fabricação menores serão colocados antes dos elementos com anos de fabricação maiores no array ordenado.
Em resumo, (a, b) => a.ano - b.ano é uma expressão que define uma função de comparação para ordenar os elementos de um array com base em um critério específico, neste caso, o ano de fabricação dos carros. */