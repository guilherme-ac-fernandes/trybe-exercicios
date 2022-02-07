let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
  };


// Acessar as chaves do objeto e imprimir uma frase contendo o livro favorito 

leitor["fullName"] = leitor.nome + " " + leitor.sobrenome;


// Como é um objeto com um array com um objeto, premeiro referenciar o objeto -> depois o array -> depois a informação desejada no objeto


console.log("O livro favorito de " + leitor.fullName + " se chama " + leitor.livrosFavoritos[0].titulo);
