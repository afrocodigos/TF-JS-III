/*Desafio: Filtrando Investimentos por Taxa
Descrição:
Suponha que você tenha uma lista de investimentos e deseja filtrá-los com base em uma taxa de juros mínima especificada.

Investimentos:
Você possui uma lista de investimentos, onde cada investimento é representado por um objeto com duas propriedades:
principal (o valor principal do investimento) e taxa (a taxa de juros anual expressa em decimal).*/

let investmentos = [
    { principal: 1000, taxa: 0.05 },
    { principal: 2000, taxa: 0.03 },
    { principal: 1800, taxa: 0.11 },
    { principal: 1500, taxa: 0.06 }
  ];


let taxaMinima = 0.06;

let filterTaxa = investmentos.filter(investimento => investimento.taxa >= taxaMinima); 

console.log(filterTaxa)
//saída:{ principal: 1500, taxa: 0.06 }, { principal: 1800, taxa: 0.11 }

// Estrutura do filter => 1. parametro(value): elemento atual da lista
// Estrutura do filter => 2. parametro(indice): a posição de um elemento na lista. 


