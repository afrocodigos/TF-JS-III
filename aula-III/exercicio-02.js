/*O filter() permite remover elementos que não se encaixam em determinados critérios.
É incrivelmente útil para desmontar grandes arrays, para que possamos escolher apenas os itens que queremos.
____________________________
Imagine que queremos filtrar somente as informações da Diretora.  
Podemos usar .filter () para retornar apenas a condição que se encaixa na função correta.*/

// Dado uma lista de colaboradores, filte somente a funcao == "Diretora".

const colaboradores =
  [
    { PrimeiroNome: 'Ana', ultimoNo: 'Bouley', funcao: 'Desenvolvedora' },
    { PrimeiroNome: 'Chloe', ultimoNome: 'Alnaji', funcao: 'Desenvolvedora' },
    { PrimeiroNome: 'Jonathan', ultimoNome: 'Alves', funcao: 'Publicitário' },
    { PrimeiroNome: 'Micaela', ultimoNome: 'Herman', funcao: 'Lead Instructor' },
    { PrimeiroNome: 'Robert', ultimoNome: 'Santos', funcao: 'Desenvolvedora' },
    { PrimeiroNome: 'Wes', ultimoNome: 'Correia', funcao: 'Instrutor' },
    { PrimeiroNome: 'Hanna', ultimoNome: 'Montana', funcao: 'Diretora' }
];

let filtrarDiretora = colaboradores.filter(colaboradora => colaboradora.funcao == "Diretora")

console.log(filtrarDiretora)