/*  Adicionando Juros aos Saldos Bancários
Descrição:
Você trabalha em um banco e precisa adicionar juros aos saldos bancários dos clientes.

Clientes e Saldos:
Você possui uma lista de clientes, onde cada cliente é representado por um objeto com duas propriedades: nome e saldo.

Regras de Juros:

O banco oferece uma taxa de juros anual de 5%.
Os juros são compostos anualmente. */


const clientes = [
    { nome: 'João', saldo: 1000 },
    { nome: 'Maria', saldo: 2000 },
    { nome: 'Pedro', saldo: 1500 }
  ];

  

// Output esperado: 
// [
//   { nome: 'João', saldo: 1050 },
//   { nome: 'Maria', saldo: 2100 },
//   { nome: 'Pedro', saldo: 1575 }
// ]