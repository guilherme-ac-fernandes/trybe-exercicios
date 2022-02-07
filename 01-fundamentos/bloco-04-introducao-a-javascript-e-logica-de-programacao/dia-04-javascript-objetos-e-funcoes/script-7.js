let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    fullName: 'Julia Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      }
    ],
  };


// Adicionar um novo livro a chave livrosFavoritos

leitor.livrosFavoritos.push = {
    titulo: 'Harry Potter e o Prisioneiro de Azkaban',
    autor: 'JK Rowling',
    editora: 'Rocco',
};

console.log(leitor.livrosFavoritos);

