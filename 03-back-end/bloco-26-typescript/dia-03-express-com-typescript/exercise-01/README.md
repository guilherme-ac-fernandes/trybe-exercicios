###  Atividade de fixação 1:

Requisito 1 - Crie um CRUD completo de pessoas usuárias de uma aplicação.

**Objetivos:**

* Permitir que pessoas usuárias dessa aplicação façam `login` utilizando suas credenciais.

* Utilize a tabela `Users` para realizar a atividade.

**Rotas:**

* Uma rota que lista todos as pessoas usuárias da aplicação.

* Uma rota que lista uma única pessoa usuária a partir de seu `id`.

* Uma rota que permite cadastrar uma nova pessoa usuária da aplicação.

* Uma rota que permite editar o registro de uma única pessoa usuária cadastrada por meio de seu `id`.

* Uma rota que permite deletar uma pessoa usuária da aplicação a partir de seu `id`.

**Regras:**

* Uma pessoa usuária da aplicação deve possuir as propriedades `id`, `nome`, `email` e `senha`.

* Nenhuma propriedade de uma pessoa usuária da aplicação pode ser nula ou vazia.

* O `id` deve ser gerado automaticamente.

* A senha deve possuir no mínimo 6 e no máximo 12 caracteres.

* O nome deve possuir pelo menos 3 caracteres.

* O email deve possuir um formato de email válido (email@email.com).

* Ao criar um novo `user`, o email não pode já estar cadastrado.

