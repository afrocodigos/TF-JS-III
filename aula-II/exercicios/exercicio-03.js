// 2) Retornar frutas com somente a primeira letra maiúscula
const frutas = ["maçã", "banana", "Pera", "Melancia", "pêsSSEgO", "jAcA"];

// retorno:
// ["Maçã", "Banana", "Pera", "Melancia", "Pêssego", "Jaca"]

// passar por todos os itens:
// 1. colocar todas as letras minúsculas
// 2. colocar a primeira letra maiúscula
// 3. colocar a lista nova em uma variável

const frutasComPrimeiraLetraMaiuscula = [];

for (let i = 0; i < frutas.length; i++) {
    const fruta = frutas[i];
    const frutaFormatada = fruta.toLowerCase().charAt(0).toUpperCase() + fruta.toLowerCase().slice(1);
    frutasComPrimeiraLetraMaiuscula.push(frutaFormatada);
}

console.log(frutasComPrimeiraLetraMaiuscula);
// Saída: ["Maçã", "Banana", "Pera", "Melancia", "Pêssego", "Jaca"]
