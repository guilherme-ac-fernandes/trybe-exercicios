###  Updates Simples

####  Atividade de fixação:
> Para realizar os requisitos a seguir, crie a coleção `movies` no banco de dados class`:

```
{
  "title": "Batman",
  "category": [ "action", "adventure" ],
  "imdbRating": 7.6,
  "budget": 35
},
{
  "title": "Godzilla",
  "category": [ "action", "adventure", "sci-fi" ],
  "imdbRating": 6.6
},
{
  "title": "Home Alone",
  "category": [ "family", "comedy" ],
  "imdbRating": 7.4
}
```

Requisito 1 - Altere o `imdbRating` para `7.7` no filme `Batman`.

Requisito 2 - Altere `budget` para `1` no filme `Godzilla`.

Requisito 3 - Altere `budget` para `15` e `imdbRating` para `5.5` no filme `Home Alone`.

Requisito 4 - Aumente em `2` o `imdbRating` do filme `Batman`.

Requisito 5 - Aumente em `5` o `budget` do filme `Home Alone`.

Requisito 6 - Multiplique por `4` o `imdbRating` do filme `Batman`.

Requisito 7 - Renomeie o campo `budget` para `estimatedBudget` do filme `Batman`.

Requisito 8 - Utilize o operador `$min` para alterar o `budget` para `5` do filme `Home Alone`.

Requisito 9 - Utilize o operador `$max` para alterar o `imdbRating` para `8.6` do filme `Godzilla`. Além disso, altere a categoria `”adventure”` para `”thriller”` no mesmo filme.

Requisito 10 - Utilizando o operador `$currentDate`, crie um campo chamado `lastUpdated` com o tipo `timestamp` no filme `Home Alone`.

Requisito 11 - Utilizando uma única operação, crie um campo chamado `sequels` e atribua a ele o valor `0` em todos os documentos.

Requisito 12 - Utilizando uma única operação, remova os campos `budget` e `estimatedBudget` em todos os documentos.

Requisito 13 - Para os filmes `Batman` ou `Home Alone`, atribua a `imdbRating` o valor `17`, caso o valor de `imdbRating` seja menor que `17`.


