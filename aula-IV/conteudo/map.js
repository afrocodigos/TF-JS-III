/*  Adicionando Juros aos Saldos Bancários
Descrição:
Você trabalha em um banco e precisa adicionar juros aos saldos bancários dos clientes.

Clientes e Saldos:
Você possui uma lista de clientes, onde cada cliente é representado por um objeto com duas propriedades: nome e saldo.

Regras de Juros:

O banco oferece uma taxa de juros anual de 5%.
Os juros são compostos anualmente. */


let clientes = [
    { nome: 'João', saldo: 1000 },
    { nome: 'Maria', saldo: 2000 },
    { nome: 'Pedro', saldo: 1500 }
  ];

  let taxasJurosAnual = 0.05;

  //O MAP VAI TRANSFORMAR A LISTA COM NOVOS ELEMENTOS, ELEMENTOS ESPECÍFICOS OU ATUALIZAÇÕES DE VALORES. 

 let saldoAtualizado =  clientes.map((cliente) => {
    // cálculo da atualização do saldo.
    let saldoAtualizado =  cliente.saldo * (1 + taxasJurosAnual);
    return {
        nome: cliente.nome, saldo: saldoAtualizado
    }  
 })

 console.log("retorno da jess", saldoAtualizado)


let juros = 0.05;
let novo_clientes = clientes.map(cliente => ({cliente: cliente.nome, saldo: (cliente.saldo*juros + cliente.saldo)}));


// calcular o saldo utilizando o map

console.log("retorno do Mathes e Gabriel: ", novo_clientes)


// Output esperado: 
// [
//   { nome: 'João', saldo: 1050 },
//   { nome: 'Maria', saldo: 2100 },
//   { nome: 'Pedro', saldo: 1575 }
// ]


