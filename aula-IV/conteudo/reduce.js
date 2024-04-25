/* Desafio: Calculadora de Juros Compostos
Descrição:
Você tem uma lista de investimentos e deseja calcular o montante total após um certo número de anos, considerando juros compostos.

Investimentos:
Você possui uma lista de investimentos, onde cada investimento é representado por um objeto com duas propriedades:
principal (o valor principal do investimento)
 e taxa (a taxa de juros anual expressa em decimal).; 

 Fórmula para calcular juros composto é:
 M = P x (1 + r)n

M => é o montante total após ;
P => é o principal (valor inicial do investimento);
t é a taxa de juros anual (em decimal);
n é o número de anos. */

let investmentos = [
    { principal: 1000, taxa: 0.05 },
    { principal: 2000, taxa: 0.03 },
    { principal: 1500, taxa: 0.06 },
    { principal: 1500, taxa: 0.08 },
    { principal: 1500, taxa: 0.09 }
  ];

  //queremos somar o total de investimentos 

let totalValor = investmentos.reduce((total, investimento) =>{


   let { principal, taxa } = investimento; 

   let totalAnos = 5
   let montanteTotal = principal * Math.pow((1 + taxa ),totalAnos)

    return total + montanteTotal
}, 0)

console.log(totalValor)