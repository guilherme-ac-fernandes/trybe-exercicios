###  Atividade de fixação 2:
> Antes de começar, crie uma nova pasta e, dentro dela, crie um pacote `Node.js` com o `npm init` chamado `exercise-04`. Realize os exercícios dentro desse pacote:

Você criará uma aplicação que faz `CRUD` (Create, Read, Update e Delete) de usuários. A entidade que representa um usuário se chamará user.

Requisito 1 - Crie o endpoint `POST /user`:

* Seu endpoint deve receber o seguinte conteúdo no `body` da `request:

```
{
	"firstName": "Calebe",
	"lastName": "Junior",
	"email": "calebe.junior@gmail.com",
	"password": "d496d5ea2442"
}
```

* Todos os campos são obrigatórios.

* O campo `password` deve ser uma `string` de `6` ou mais caracteres.

* Caso qualquer um dos campos seja inválido, retorne um `JSON` com o seguinte formato, variando a mensagem conforme o campo e o erro:

```
{ "message": "\"password\" length must be at least 6 characters long" }
```

* Caso o usuário seja criado com sucesso, retorne os campos `id`, `firstName`, `lastName` e `email` em `JSON`, no formato abaixo, com o `status 201 Created`;

```
{
	"id": 1,
	"firstName": "Calebe",
	"lastName": "Junior",
	"email": "calebe.junior@gmail.com"
}
```


Requisito 2 - Crie o endpoint `GET /user`:

* O endpoint sempre deve retornar um `array`.

* Quando não houver nenhum usuário cadastrado, retorne um `array` vazio.

* Deve sempre retornar o status `200 OK`.


Requisito 3 - Crie o endpoint GET `/user/:id`:

* O endpoint deve retornar o usuário cujo `id` seja igual ao parâmetro `id` informado na `URL`. O status deve ser `200 OK`.

* Caso um usuário com o `id` informado não exista, o endpoint deve retornar o conteúdo abaixo em `JSON`, com status `404 Not Found`:

```
{ "message": "User not Found" }
```


Requisito 4 - Crie o endpoint `PUT /user/:id`:

O endpoint deve receber, no `body` da `request`, os seguintes dados, em `JSON`:

```
{
	"firstName": "Calebe",
	"lastName": "Junior",
	"email": "calebe.junior@gmail.com",
	"password": "d496d5ea2442"
}
```

* Caso qualquer um dos campos esteja faltando ou seja inválido, retorne um `JSON` com o seguinte formato, variando a mensagem conforme o campo e o erro:

```
{ "message": "\"firstName\" is required" }
{ "message": "\"firstName\" is not allowed to be empty" }
{ "message": "\"password\" length must be at least 6 characters long" }
(…)
```

* Caso esteja tudo certo, utilize os dados enviados no corpo da requisição para atualizar o usuário cujo `id` foi especificado na `URL`.

* Depois de alterar os dados do usuário no banco, retorne os novos dados com o status `200 OK`, no seguinte formato:

```
{
	"id": 1,
	"firstName": "Calebe",
	"lastName": "Junior",
	"email": "calebe.junior@gmail.com"
}
```

* Caso o usuário em questão não exista, retorne o status `404 Not Found` e os seguintes dados em `JSON` no corpo da resposta:

```
{ "message": "User not Found" }
```

