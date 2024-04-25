
/*Escreva uma função chamada compararNumero que receberá dois parâmetros,
em seguida, retorne o número que for maior.
O retorno deverá conter essa mensagem:
"O maior número entre 5 e 10 é 10"
Passo a passo da função:
Criar função compararValor(parametro1, parametro2)
Inserir uma condição onde parametro1 é maior que parametro dois?
Se a condição for verdadeira, retornar "O maior número entre 5 e 10 é 10"
Se for, retornar que a segundo parametro é maior que o primeiro.
Se não, caso os valores sejam iguais, retornar que os valores são iguais. */

function compararNumero (parametro1, parametro2) {
    if(parametro1 > parametro2){
        return `O maior número entre ${parametro1} e ${parametro2} é o ${parametro1}. `
    } 
    else if (parametro2 > parametro1 ) {
        return `O maior número entre  ${parametro1} e ${parametro2} é o ${parametro1}. `
    } else {
        return `Os números são iguais.`
    }
}

let obterResultado = compararNumero(100,10)

console.log(obterResultado)
