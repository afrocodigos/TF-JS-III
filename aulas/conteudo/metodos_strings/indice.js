/** Métodos são usados para realizar ações específicas ou para fornecer funcionalidades
    específicas dentro de um programa.
    Existe uma variedade de métodos embutidos que podem ser utilizados para manipular
    strings, arrays, objetos e outros tipos de dados.
    Apresentaremos alguns métodos utilizados com frequência para realizar determinadas ações. */

                                    /** Manipulação de Strings **/

// toUpperCase() e toLowerCase(): Converte uma string para maiúsculas ou minúsculas.
let descricaoProduto = "Belíssima cesta de vime com alças, perfeita para piqueniques.";
let descricaoDestacada = descricaoProduto.toUpperCase();
console.log(descricaoDestacada); // Saída: verifique a saída.

//split(): Divide uma string em um array de substrings com base em um delimitador.
let categorias = "cestas, decoração, vime, piqueniques";
//Podemos dividir essa lista em um array para manipular individualmente cada categoria:
let arrayCategorias = categorias.split(", ");
console.log(arrayCategorias); // Saída: verifique a saída.

//E depois, podemos juntar essas categorias em uma lista formatada:
//join une os elementos de um array em uma única string, separados pelo separator especificado.
let listaCategorias = arrayCategorias.join(" | ");
console.log(listaCategorias); // Saída: "cestas | decoração | vime | piqueniques"

// indexOf() e lastIndexOf(): Retorna o índice da primeira ou última ocorrência de um valor especificado em uma string.
let textoAprendendoJs = "Aprendendo JavaScript";
console.log(textoAprendendoJs.indexOf("JavaScript")); // Saída: verifique a saída.
console.log(textoAprendendoJs.lastIndexOf("e")); // Saída: verifique a saída.

//concat(): Concatena duas ou mais strings e retorna uma nova string.
let str1 = "Olá";
let str2 = "Mundo";
let novaString = str1.concat(" ", str2);
console.log(novaString); // Saída: verifique a saída

/* Estamos criando uma função para gerar o nome
completo de um produto, combinando o nome do produto com algumas características adicionais.*/
// Função para gerar o nome completo de um produto
function gerarNomeCompletoProduto(nomeProduto, caracteristicasAdicionais) {
    return nomeProduto.concat(" - ", caracteristicasAdicionais);
}

// Exemplo de uso da função
let nomeProdutoSemConcat = "Cesta de vime para piqueniques";
let caracteristicasAdicionais = "com alças de couro";
let nomeCompletoProduto = gerarNomeCompletoProduto(nomeProdutoSemConcat, caracteristicasAdicionais);
console.log(nomeCompletoProduto); // Saída: verifique a saída.


//slice(start, end): Retorna uma parte da string, começando do índice start até o índice end (não incluso). Se end não for especificado, retorna até o final da string.
let textoSlice = "Inicio Fim";
console.log(textoSlice.slice(11)); // Saída: verifique a saída.
console.log(textoSlice.slice(0, 9)); // Saída: verifique a saída.

// Nome do produto artesanal
let nomeProdutoSemSilce = "Cesta de vime para piqueniques";

// Exibindo uma prévia do nome do produto
let previaNomeProduto = nomeProdutoSemSilce.slice(0, 15); // Corta os primeiros 15 caracteres
console.log(previaNomeProduto); // Saída: "Cesta de vime p..."


                                    /** Pesquisa e Substituição **/

//indexOf(substring) e lastIndexOf(substring): Retorna o índice da primeira ou última ocorrência da substring na string. Retorna -1 se não for encontrado.
let textoIndex = "Aprendendo JavaScript, JavaScript é poderoso";
console.log(textoIndex.indexOf("JavaScript")); // Saída: 11
console.log(textoIndex.lastIndexOf("JavaScript")); // Saída: 26

// replace(searchValue, newValue): Substitui a searchValue por newValue na string. Pode aceitar uma expressão regular (regexp) para busca avançada e uma função de substituição.
// Suponha que temos o nome de um produto e queremos substituir uma palavra específica:
let nomeProduto = "Cesta de vime para piqueniques";
let novoNomeProduto = nomeProduto.replace("piqueniques", "encontros ao ar livre");
console.log(novoNomeProduto); // Saída: verifique a saída.
console.log(textoComReplace); // Saída: verifique a saída.

                                    /** Divisão e União:**/

// split(separator) e join(separator): split divide a string em substrings com base no separator especificado e retorna um array.
// join une os elementos de um array em uma única string, separados pelo separator especificado.
let mensagemSemSplit = "Olá, como vai você?";
let mensagemSplit = mensagemInput.split(" ");
console.log(mensagemSplit); // Saída: verifique a saída.

let novaFrase = palavras.join("-");
console.log(novaFrase); // Saída: verifique a saída.

                                    /** Verificação e limpeza **/

//explicar o que [é includes]
if (descricaoProduto.includes("vime")) {
    console.log("Este produto é feito de vime.");
} else {
    console.log("Este produto não é feito de vime.");
}

//startsWith(searchString) e endsWith(searchString): Verificam se a string começa ou termina com a searchString especificada.
let inputStart = "Olá Mundo";
console.log(inputStart.startsWith("Olá")); // Saída: verifique a saída.
console.log(inputStart.endsWith("Mundo")); // Saída: verifique a saída.

// trim(), trimStart() e trimEnd(): Removem espaços em branco do início, fim ou ambos os lados da string. 
//Suponha que temos o nome de um produto que pode conter espaços em branco extras no início e no final:
let nomeProdutoSemTrim = "   Cesta de vime para piqueniques   ";

//Podemos usar o método trim() para remover esses espaços em branco:

let nomeProdutoLimpo = nomeProdutoSemTrim.trim();
console.log(nomeProdutoLimpo); // Saída: "Cesta de vime para piqueniques"


                                    /** Formatação e Preenchimento **/


//padStart(targetLength, padString) e padEnd(targetLength, padString): Preenchem a string com padString até atingir o targetLength especificado.
//padStart preenche no início, enquanto padEnd preenche no final.

//Suponha que queremos formatar um número de identificação do produto para que tenha sempre 5 dígitos, preenchendo com zeros à esquerda, se necessário:

let numeroProduto = "123";
let numeroFormatado = numeroProduto.padStart(5, "0");
console.log(numeroFormatado); // Saída: verifique a saída.
