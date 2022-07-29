###  Atividade de fixação 2:
> Antes de começar, crie uma nova pasta e, dentro dela, crie um pacote `Node.js` com o `npm init` chamado `exercise-02`. Realize os exercícios dentro desse pacote:

Requisito 1 - Crie uma `API` de dados das personagens de `Simpsons` e popule com os seguintes dados:

```
[
  {
    "id": "1",
    "name": "Homer Simpson"
  },
  {
    "id": "2",
    "name": "Marge Simpson"
  },
  {
    "id": "3",
    "name": "Bart Simpson"
  },
  {
    "id": "4",
    "name": "Lisa Simpson"
  },
  {
    "id": "5",
    "name": "Maggie Simpson"
  },
  {
    "id": "6",
    "name": "Ned Flanders"
  },
  {
    "id": "7",
    "name": "Montgomery Burns"
  },
  {
    "id": "8",
    "name": "Nelson Muntz"
  },
  {
    "id": "9",
    "name": "Krusty"
  },
  {
    "id": "10",
    "name": "Milhouse Van Houten"
  }
]
```

* Utilize o modulo `fs` do Node para ler/escrever arquivos.

* Caso algum erro ocorra, deve ser retornado um código `500 (Internal Server Error)`.

* Caso dê tudo certo, a resposta deve voltar com status `200 OK.

Requisito 2 - Crie um endpoint `GET /simpsons`:

* O endpoint deve retornar um `array` com todos os `simpsons`.

Requisito 3 - Crie um endpoint `GET /simpsons/:id`:

* O endpoint deve retornar o personagem com o `id` informado na `URL` da requisição.

* Caso não exista nenhum personagem com o `id` especificado, retorne o `JSON { message: 'simpson not found' }` com o status `404 - Not Found`.

Requisito 4 - Crie um endpoint `POST /simpsons`:

* Este endpoint deve cadastrar novos personagens.

* O corpo da requisição deve receber o seguinte `JSON: { id: <id-da-personagem>, name: '<nome-da-personagem>' }`.

* Caso já exista uma personagem com o `id` informado, devolva o `JSON { message: 'id already exists' }` com o status `409 - Conflict`.

* Caso a personagem ainda não exista, adicione-a ao arquivo `simpsons.json` e devolva um body vazio com o status `204 - No Content`. Para encerrar a request sem enviar nenhum dado, você pode utilizar `res.status(204).end();`.

