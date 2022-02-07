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
      },
      {
        titulo: 'Harry Potter e o Prisioneiro de Azkaban',
        autor: 'JK Rowling',
        editora: 'Rocco',
    }
    ],
  };


// Adicionar um novo livro a chave livrosFavoritos


console.log(leitor.fullName + " tem " + leitor.livrosFavoritos.length + " livros favoritos");