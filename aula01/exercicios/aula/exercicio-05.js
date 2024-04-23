// const listaDeCantato = [
//     {
//  nome: "Paula",
//  telefone: "119877668668"
//     },
//     {
//         nome: "Paula",
//         telefone: "119877668668"
//            }
// ]

// for (let i = 0; i < listaDeCantato.length; i++) {
//     console.log(listaDeCantato[i].telefone); 
// }

// for (let i = 0; i < clientes.length; i++) {
//     let cliente = clientes[i];
    
// }


// Dado uma lista de uma Loja que revende também produtos orgânicos de produtores locais:

 

// Lista de participantes 
// Lista de participantes 

let participantes = [

    { tipo: "loja", nome: "Orgânico Mais Verde", produtos: { alface: 50, tomate: 30, cenoura: 40 } },
    { tipo: "loja", nome: "EcoFarm", produtos: { maca: 20, laranja: 15, abobora: 10 } },
    { tipo: "loja", nome: "Verde Vida", produtos: { banana: 25, morango: 35, couve: 20 } },
    { tipo: "produtor", nome: "Fazenda Sol Nascente", produtos: { alface: 30, tomate: 50, cenoura: 20 } },
    { tipo: "produtor", nome: "Sítio Amor Perfeito", produtos: { maca: 15, laranja: 25, abobora: 30 } },
    { tipo: "produtor", nome: "Chácara Doce Sabor", produtos: { banana: 40, morango: 30, couve: 25 } }

];

const valorProdutos = []
let totalMaca = 0
let totalLaranjas = 0

for (let i = 0; i < participantes.length; i++) {
    if (participantes[i].tipo === "produtor") {
     valorProdutos.push(participantes[i])   
    }
}

for (let i = 0; i < valorProdutos.length; i++) {

    if (valorProdutos?.maca && valorProdutos?.laranja) {
        let produtos = valorProdutos[i].produtos
        maca += pareInt(valorProdutos[i].produtos.maçã)
        laranja += parseInt(valorProdutos[i].produtos.laranja)
    }
    
}
console.log(`Total de maçãs fornecidas pelos produtores: ${totalMaca}`); 
console.log(`Total de laranjas fornecidas pelos produtores: ${totalLaranjas}`);

