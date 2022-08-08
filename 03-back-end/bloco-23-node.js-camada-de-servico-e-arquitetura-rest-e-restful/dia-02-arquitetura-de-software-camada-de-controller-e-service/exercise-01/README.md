###  Atividade de fixação 1:
> Antes de começar, crie uma nova pasta e, dentro dela, crie um pacote `Node.js` com o `npm init` chamado `exercise-01`. Realize os exercícios dentro desse pacote:

Será desenvolvido uma aplicação de busca de CEP. A aplicação fornecerá um serviço de busca e cadastro de CEPs em um banco de dados. Como bônus, em vez de cadastrar novos CEPs manualmente, a aplicação consultará uma API externa para obter os dados do CEP desejado.
Obs.: o banco de dados está presente no arquivo `cep-lookup`.

Requisito 1 - Crie uma nova API utilizando o express:

* Utilize o express para gerenciar os endpoints da sua aplicação.

* A aplicação deve ter a rota `GET /ping`, que retorna o status `200 OK` e o seguinte `JSON { "message": "pong!" }`.


Requisito 2 - Crie o endpoint `GET /cep/:cep`”

* O endpoint deve receber, no parâmetro `:cep`, um número de CEP válido.

* O CEP precisa conter `8` dígitos numéricos e pode ou não possuir traço. **Dica:** utilize o `regex ^\d{5}-?\d{3}$` para validar o CEP.

* Caso o CEP seja inválido, retorne o status `400 Bad Request` e o seguinte `JSON`:

```
{ "error": { "code": "invalidData", "message": "CEP inválido" } }
```

* Caso o CEP seja válido, realize uma busca no banco de dados. Se o CEP não existir no banco de dados, retorne o status 404 Not Found e o seguinte JSON:

```
{ "error": { "code": "notFound", "message": "CEP não encontrado" } }
```

* Caso o CEP exista, retorne o status `200 OK` e os dados do CEP no seguinte formato:

```
{
  "cep": "01001-000",
  "logradouro": "Praça da Sé",
  "bairro": "Sé",
  "localidade": "São Paulo",
  "uf": "SP",
}
```


Requisito 3 - Crie o endpoint `POST /cep`:

* O endpoint deve receber a seguinte estrutura no corpo da requisição:

```
{
  "cep": "01001-000",
  "logradouro": "Praça da Sé",
  "bairro": "Sé",
  "localidade": "São Paulo",
  "uf": "SP",
}
```

* Todos os campos são obrigatórios.

* Utilize o `Joi` para realizar a validação. Em caso de erro, retorne o status `400 Bad Request`, com o seguinte JSON:

```
{ "error": { "code": "invalidData", "message": "<mensagem do Joi>" } }
```

* O CEP deve ser composto por `9` dígitos com traço.

* Se o CEP já existir, retorne o status `409 Conflict` com o seguinte `JSON`:

```
{  "error": { "code": "alreadyExists", "message": "CEP já existente" } }
```

* Se o CEP ainda não existir, armazene-o no banco de dados e retorne o status `201 Created` com os dados do novo CEP no seguinte formato:

```
{
  "cep": "01001-000",
  "logradouro": "Praça da Sé",
  "bairro": "Sé",
  "localidade": "São Paulo",
  "uf": "SP",
}
```


