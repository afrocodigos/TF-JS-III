/*Sistema de Biblioteca Simples:
Implemente um sistema de biblioteca com funções para adicionar
livros, remover livros, verificar a disponibilidade de um livro e listar todos os livros disponíveis.*/

// Array para armazenar os livros na biblioteca
let biblioteca = [];

// Função para adicionar um livro à biblioteca
function adicionarLivro(titulo, autor, disponivel) {
    biblioteca.push({ titulo, autor, disponivel });
}

// Função para remover um livro da biblioteca pelo título
function removerLivro(titulo) {
    biblioteca = biblioteca.filter(livro => livro.titulo !== titulo);
}

// Função para verificar a disponibilidade de um livro pelo título
function verificarDisponibilidade(titulo) {
    const livro = biblioteca.find(livro => livro.titulo === titulo);
    return livro ? (livro.disponivel ? "Disponível" : "Indisponível") : "Livro não encontrado";
}

// Função para listar todos os livros disponíveis
function listarLivrosDisponiveis() {
    return biblioteca.filter(livro => livro.disponivel).map(livro => livro.titulo);
}

// Exemplo de uso das funções
adicionarLivro("Olhos D'Água", "Conceição Evaristo", true);
adicionarLivro("Canção para ninar menino grande", "Conceição Evaristo", false);
adicionarLivro("Tudo sobre o amor", "bell hooks", true);

console.log(verificarDisponibilidade("Olhos D'Água"));
console.log(verificarDisponibilidade("Tudo sobre o amor")); 

console.log(listarLivrosDisponiveis());
removerLivro("Tudo sobre o amor");

console.log(listarLivrosDisponiveis());
