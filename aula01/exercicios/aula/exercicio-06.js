const colaboradores =
  [{ PrimeiroNome: 'Ana', ultimoNo: 'Bouley', funcao: 'Desenvolvedora' },
  { PrimeiroNome: 'Chloe', ultimoNome: 'Alnaji', funcao: 'Desenvolvedora' },
  { PrimeiroNome: 'Jonathan', ultimoNome: 'Alves', funcao: 'Publicitário' },
  { PrimeiroNome: 'Micaela', ultimoNome: 'Herman', funcao: 'Lead Instructor' },
  { PrimeiroNome: 'Robert', ultimoNome: 'Santos', funcao: 'Desenvolvedora' },
  { PrimeiroNome: 'Wes', ultimoNome: 'Correia', funcao: 'Instrutor' },
  { PrimeiroNome: 'Hanna', ultimoNome: 'Montana', funcao: 'Diretora' }];


  const resultado = colaboradores.filter((colaboradores) => colaboradores.funcao  === "Diretora");

  console.log(resultado);


  let produtos = [
    { id: 123, nome: 'Camiseta', cor: 'azul', tamanho: 'P', categoria: 'Vestuário', estoque: 10, disponivel: true, precoUnitario: 15 },
    { id: 125, nome: 'Regata', cor: 'azul', tamanho: 'GG', categoria: 'Vestuário', estoque: 0, disponivel: false, precoUnitario: 20 },
    { id: 456, nome: 'Calça', cor: 'preto', tamanho: 'GG', categoria: 'Vestuário', estoque: 1, disponivel: true, precoUnitario: 15 },
    { id: 982, nome: 'Tênis', cor: 'amarelo', tamanho: '38', categoria: 'Esportes', estoque: 2, disponivel: true, precoUnitario: 125 },
  ];


  const produtoSelecionado = produtos.map((produto) => {
        return {
        id:produto.id, 
        nome:produto.nome, 
        tamanho:produto.tamanho,
        precoUnitario:produto.precoUnitario + 1.15
        };
    });

 console.log(produtoSelecionado)   

//  Criar nova array somente com profissionais da área de TI

const pessoas = [
  { nome: "Mell", area: "TI", profissao: "dev" },
  { nome: "Munique", area: "ciência", profissao: "pesquisadora"},
  { nome: "Melissa", area: "construção", profissao: "engenheira"},
  { nome: "Madalena", area: "TI", profissao: "infra" },
  { nome: "Monica", area: "medicina", profissao: "cardiologista"},
];

 
// const resultado = colaboradores.filter((colaboradores) => colaboradores.funcao  === "Diretora");

const profissionaisTI = pessoas.filter((pessoas) => pessoas.area === "TI")
 
console.log(profissionaisTI)

// expectativa:
// const profissionaisTI = [
//   { nome: "Mell", area: "TI", profissao: "dev" },
//   { nome: "Madalena", area: "TI", profissao: "infra" }
// ];




  const investimentos =  [
    {  principal : 1000 ,  táxons : 0.05  } ,
    {  principal : 2000 ,  táxons : 0.03  } ,
    {  principal : 1500 ,  táxons : 0.06  } ,
    {  principal : 1800 ,  táxons : 0.10  } ,

  ] ;

  
const  clientes  =  [
    {  nome : 'João' ,  saldo : 1000  } ,
    {  nome : 'Maria' ,  saldo : 2000  } ,
    {  nome : 'Pedro' ,  saldo : 1500  }
  ] ;

  let juros = 0.05;

let saldoAtualizado = clientes.map(cliente => {
    
    let saldoAtualizado = cliente.saldo * (1 + juros)
    return{
    nome: cliente.nome , 
    saldo: saldoAtualizado 
    }
});

    console.log(saldoAtualizado)


    