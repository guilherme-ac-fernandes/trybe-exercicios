###  Atividade de fixação 1:
> Antes de começar, crie uma nova pasta e, dentro dela, crie um pacote `Node.js` com o `npm init` chamado `exercise-01`. Realize os exercícios dentro desse pacote:

Crie uma rota `POST /sales` que receba uma requisição que envie `productName` e `infos` no `body` da requisição, como na código abaixo.

```
{
  "productName": "SmarTV",
  "infos": {
    "saleDate": "19/02/2022",
    "warrantyPeriod": 3
  }
}
```

As seguintes validações deverão ser realizadas:

Requisito 1 - `productName` deve ser obrigatório e ter mais de `4` caracteres.

Requisito 2 - Caso o campo `productName` não seja passado, deve ser retornado o código status `400` e um `JSON { "message": "O campo productName é obrigatório" }`.

Requisito 3 - Caso o campo `productName` possua menos de `4` caracteres, deve ser retornado o código status `400` e um `JSON { "message": "O campo productName deve ter pelo menos 4 caracteres" }`.

Requisito 4 - `infos` deve ser um objeto obrigatório contendo duas chaves: `saleDate` e `warrantyPeriod`.

Requisito 5 - Caso o campo `infos` não seja passado, deve ser retornado o código status `400` e um `JSON { "message": "O campo infos é obrigatório" } `.

Requisito 6 - `saleDate` deve conter uma data válida no padrão `dd/mm/aaaa`.

Requisito 7 - Caso o campo `saleDate` não seja passado, deve ser retornado o código status `400` e um `JSON { "message": "O campo saleDate é obrigatório" }`.

Requisito 8 - Caso o campo `saleDate` não seja uma data válida no formato `dd/mm/aaaa`, deve ser retornado o código status `400` e um `JSON { "message": "O campo saleDate não é uma data válida" }`.

Requisito 9 - `warrantyPeriod` deve ser um número inteiro entre `1` e `3`.

Requisito 10 - Caso o campo `warrantyPeriod` não seja passado, deve ser retornado o código status `400` e um `JSON { "message": "O campo warrantyPeriod é obrigatório" }`.

Requisito 11 - Caso o campo `warrantyPeriod` não seja um número entre `1` e `3`, deve ser retornado o código status `400` e um `JSON { "message": "O campo warrantyPeriod precisa estar entre 1 e 3" }`.

Requisito 12 - Caso todos os campos sejam válidos, deverá ser retornado uma resposta com o código de status `201` e um `JSON { "message": "Venda cadastrada com sucesso" }`.


