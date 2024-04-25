
/*Crie uma função que receba nome, sobrenome, endereço e retorne as informações a seguir: *

  const endereco = {
    rua: "Rua dos pinheiros",
    numero: 1293,
    bairro: "Centro",
    cidade: "São Paulo",
    uf: "SP"
  };

  A {nome} {Sobrenome} mora em São Paulo / SP, no bairro Centro, na rua "Rua dos Pinheiros" com
  nº 1293.
  O retorno deverá ser template string */

  function getEndereco(nome, sobrenome, endereco){

      return `A ${nome} ${sobrenome} mora em ${endereco.cidade}` 
  }

  let endereco = {
    rua: "Rua dos pinheiros",
    numero: 1293,
    bairro: "Centro",
    cidade: "São Paulo",
    uf: "SP"
  };

  getEndereco("Jéss", "Osko", endereco)