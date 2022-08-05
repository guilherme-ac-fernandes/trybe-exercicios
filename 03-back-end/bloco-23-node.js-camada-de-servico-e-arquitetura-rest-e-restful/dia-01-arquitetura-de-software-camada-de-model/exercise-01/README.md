###  Atividade de fixação 1:
> A partir do código contendo as rotas referente ao `/authors`, realize os seguintes requisitos:

Obs.: o banco de dados está presente no arquivo `model_example.sql`.

Requisito 1 - Crie um modelo `Book` e defina o método `getAll` para retornar a lista de todos os livros.

Requisito 2 - Crie uma rota `/books` para trazer a lista de todos os livros.

Requisito 3 - Crie um método `getByAuthorId` no modelo `Book`, para retornar apenas livros associados com um determinado `author_id`. Altere o `middleware` da rota `books` criado no requisito 2 para receber uma `query` `string` com a chave `author_id`, e retornar apenas os livros associados.

Requisito 4 - Crie uma rota `/books/:id` e retorne o livro de acordo com o `id` passado por parâmetro. Se não existir, retorne um `JSON` no seguinte formato `{ message: 'Not found' }`.

Requisito 5 -  Ainda usando a tabela `books` como referência crie uma rota `books` do tipo `POST`. Faça as seguintes validações:

* Título não pode ser vazio.

* Título precisa ter pelo menos três caracteres.

* O campo `author_id` não pode ser vazio.

* O campo `author_id` só é válido se existir uma pessoa autora com esse `id`.

* Se algum dos requisitos anteriores não for atendido, retornar um `JSON com status 400 e { message: 'Dados inválidos' }`.

* Caso contrário, insira o livro na tabela books e retorne o `JSON com o status 201 e { message: 'Livro criado com sucesso!' }`.


