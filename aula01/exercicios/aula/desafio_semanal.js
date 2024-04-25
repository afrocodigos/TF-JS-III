let empresas = [
    {
        nome: 'InQuímica',
        descricao: 'A InQuímica é uma startup de desenvolvimento e pesquisa.',
        valorDeMercado: 100,
        CEO: 'Taynara Alves',
        anoDeCriacao: 2017,
    },
    {
        nome: 'Negras Plurais',
        descricao: 'Potencialização de negócios e carreiras de mulheres negras',
        valorDeMercado: 250,
        CEO: 'Caroline Moreira',
        anoDeCriacao: 2018
    },
    {
        nome: 'Piraporiando',
        descricao: 'Organização que trabalha para construir uma sociedade antirracista e que faz do afeto uma forma de educar.',
        valorDeMercado: 300,
        CEO: 'Janine Rodrigues',
        anoDeCriacao: 2015
    },
    {
        nome: 'Gestar',
        descricao: 'Somos uma plataforma que conecta gestantes, mães e pais a profissionais que atuam de forma humanizada na saúde materno infantil',
        valorDeMercado: 560,
        CEO: 'Lettycia Vidal',
        anoDeCriacao: 2017
    },
    {
        nome: 'AfroEsporte',
        descricao: 'Agência de criação e curadoria de conteúdo e gerenciamos carreiras especializada em atletas negros, negras e LGBTQIA+',
        valorDeMercado: 500,
        CEO: 'Mia Lopes',
        anoDeCriacao: 2015
     },
    {
        nome: 'Malalai',
        descricao: 'A Malalai é uma solução para pessoas que querem ser livres para se deslocarem sozinhas com mais segurança. · Segurança para você.',
        valorDeMercado: 300,
        CEO: 'Priscila Gama',
        anoDeCriacao: 2020
     }
];

//Exiba somente as empresas que depois dos anos 2017

const empresasAtualisada = empresas.filter((empresas) => 
  empresas.anoDeCriacao >= 2017
);

console.log(empresasAtualisada);

// //Retorne o nome de cada empresa, CEO e descrição.
let empresaAtualizada = empresas.map(empresa => {
        return{
    nome: empresa.nome , 
    CEO: empresa.CEO ,
    descricao: empresa.descricao 
    }
});

    console.log(empresaAtualizada)

// //Retorne o valor total do mercado de todas elas
const empresasAtuais = empresas.reduce((item, empresa) =>{
 return item += empresa.valorDeMercado
},0)


console.log(empresasAtuais)


/*Escreva uma função chamada compararNumero que receberá dois parâmetros,

em seguida, retorne o número que for maior.

O retorno deverá conter essa mensagem:

"O maior número entre 5 e 10 é 10"

Passo a passo da função:

Criar função compararValor(parametro1, parametro2)

Inserir uma condição onde parametro1 é maior que parametro dois?

Se a condição for verdadeira, retornar "O maior número entre 5 e 10 é 10"

Se for falsa, retornar que a segundo parametro é maior que o primeiro. */


/* Exercícios de Cursos de Programação:

Crie uma Lista de Cursos:

Crie um array de objetos representando diferentes cursos de programação, cada objeto deve conter informações como o título do curso, a duração, o nível de dificuldade e a linguagem de programação associada.

Filtrando Cursos por Nível de Dificuldade:

Escreva uma função que receba a lista de cursos e um nível de dificuldade e retorne apenas os cursos que correspondam a esse nível.*/

const cursos = [

    { titulo: "JavaScript Básico", duracao: "4 semanas", nivel: "Iniciante", linguagem: "JavaScript" },

    { titulo: "Node.js Avançado", duracao: "6 semanas", nivel: "Avançado", linguagem: "JavaScript" },

    { titulo: "Python para Data Science", duracao: "8 semanas", nivel: "Intermediário", linguagem: "Python" },

];

// const cursoItermediario = (cursos, nivel) => cursos.filter(curso => curso.nivel === nivel)
        
// cursoItermediario = filtroNivel (cursos, "Iniciante")
// console.log(cursoItermediario)

  /*Crie uma função que receba nome, sobrenome, endereço e retorne as informações a seguir: */

  const endereco = {
    rua: "Rua dos pinheiros",
    numero: 1293,
    bairro: "Centro",
    cidade: "São Paulo",
    uf: "SP"
  };

  const cliente = (nome, sobreNome) => {
    const pessoa =`Olá ${nome} ${sobreNome} seu endereço é`
    return pessoa
  }
  const clientes = cliente('Andreza',"Cristina")
  
  console.log(clientes, endereco.rua,endereco.bairro, endereco.cidade)
  console.log(clientes, endereco)
//   A {nome} {Sobrenome} mora em São Paulo / SP, no bairro Centro, na rua "Rua dos Pinheiros" com
//   nº 1293.
//   O retorno deverá ser template string 

 
 
/* Com Arrow Function, crie uma função chamada retornarBiografia que retorne o objeto abaixo:
  {nome: "Mulheres, raça e classe",
  descrição:"Da mesma forma que gênero é a maneira como a raça é vivida."}
*/

const retornarBiografia = () => {
    const bio = {nome: "Mulheres, raça e classe",
    descrição:"Da mesma forma que gênero é a maneira como a raça é vivida."}
    return bio
}
const returnBio = retornarBiografia()
console.log(returnBio)

/* Reescreva a função abaixo utilizando
Arrow Function */

/*function getUser(id, nome) {
  return {
    id: id,
    nome: nome
  }
}*/

const getUser = (id, nome) => (`id:${id}, nome:${nome}`)

const get = getUser("26736", "Andreza")
console.log(get)



