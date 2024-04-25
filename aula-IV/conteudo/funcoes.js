/* Uma função é um procedimento de JavaScript - um conjunto de instruções que executa uma tarefa ou calcula um valor.
Para usar uma função, você deve defini-la em algum lugar no escopo do qual você quiser chamá-la. (Retirado do MDN Web Docs) */

/* Tipos de Funções mais utilizadas:

- Functions declaration (Declaração de função)
- Functions expression (Expressão de função)
- Arrow Functions (Função de flecha)
- Functions constructor (Construtor de função) */

// Functions declaration
// Vantagens:
// - Podem ser chamadas antes da sua definição no código, devido ao hoisting.
// - Tornam o código mais organizado, facilitando a leitura.

// Desvantagens:
// - O nome da função é obrigatório.
// - Não são recomendadas para funções que dependem de variáveis globais.

function getInformacoes(nome, idade, endereco){
    console.log("PEGOU DO PARAMETRO: ", nome, idade, endereco);
    return `Olá, ${nome}! Esses são os seus dados: ${idade}, ${endereco}`;
}

// Functions expression
// Vantagens:
// - Permitem atribuir funções a variáveis, facilitando a passagem de funções como argumentos para outras funções.
// - Podem ser anônimas, o que é útil para funções que só serão usadas uma vez.

// Desvantagens:
// - Não podem ser chamadas antes da sua definição no código, devido à ausência de hoisting.
// - Dificultam a depuração devido à falta de nomeação.

let getEstadoBrasil = function(estado){
    console.log(estado);
}

// Arrow Functions
// Vantagens:
// - Sintaxe mais concisa e legível.
// - Não possuem seu próprio contexto `this`, o que evita comportamentos inesperados.

// Desvantagens:
// - Não podem ser utilizadas como construtores.
// - Não possuem as propriedades `arguments` e `super`.

const soma = (a, b) => a + b;

// Functions constructor
// Vantagens:
// - Permitem criar objetos com propriedades e métodos facilmente.

// Desvantagens:
// - São mais lentas para criar do que as declarações de função ou expressões de função.
// - O uso de `this` pode ser confuso, especialmente em casos de closures.

function Pessoa(nome) {
    this.nome = nome;
}

const pessoa = new Pessoa('Matheus');

// Exemplo de uso:
console.log(pessoa); // Saída: { nome: 'Matheus' }
