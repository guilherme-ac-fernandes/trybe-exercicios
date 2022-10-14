###  Updates Complexos - Arrays

####  Atividade de fixação:
> Para realizar os requisitos a seguir, crie a coleção `movies` no banco de dados `cinema`:
>
> **Observação:** Os requisitos devem ser realizados na ordem.

```
use cinema;
db.movies.drop();
db.movies.insertMany([
  {
    title: "Batman",
    category: [
      "action",
      "adventure",
    ],
    imdbRating: 7.7,
    budget: 35,
  },
  {
    title: "Godzilla",
    category: [
      "action",
      "adventure",
      "sci-fi",
    ],
    imdbRating: 6.6,
    budget: 1,
  },
  {
    title: "Home Alone",
    category: [
      "family",
      "comedy",
    ],
    imdbRating: 7.4,
  },
]);
```

Requisito 1 - Adicione a categoria `”superhero”` ao filme `Batman`.

Requisito 2 - Utilizando o modificador `$each`, adicione as categorias `”villain”` e `”comic-based”` ao filme `Batman`.

Requisito 3 - Remova a categoria `”action”` do filme `Batman`.

Requisito 4 - Remova o primeiro elemento do `array category` do filme `Batman`.

Requisito 5 - Remova o último elemento do `array category` do filme `Batman`.

Requisito 6 - Adicione o elemento `”action”` ao `array category` do filme `Batman`, garantindo que esse valor não se duplique.

Requisito 7 - Adicione a categoria `”90’s”` aos filmes `Batman e Home Alone`.

Requisito 8 - Crie um `array` de documentos chamado `cast` para o filme `Home Alone` com os seguintes dados:

```
{
  "actor": "Macaulay Culkin",
  "character": "Kevin"
},
{
  "actor": "Joe Pesci",
  "character": "Harry"
},
{
  "actor": "Daniel Stern"
}
```

Requisito 9 - Adicione o campo `character` com o valor `Marv` ao `array` de `cast` em que o campo `actor` seja igual a `Daniel Stern` no filme `Home Alone`.

Requisito 10 - Crie um `array` de documentos chamado `cast` para o filme `Batman` com os seguintes dados:

```
{
  "character": "Batman"
},
{
  "character": "Alfred"
},
{
  "character": "Coringa"
}
```

Requisito 11 - Produza três `querys` para o filme `Batman`:

* Adicione o campo `actor`, que deve ser um `array` com o valor `Christian Bale`, ao `array` de `cast` em que o campo `character` seja igual a `Batman`;

* Adicione o campo `actor`, que deve ser um `array` com o valor `Michael Caine`, ao `array` de `cast` em que o campo `character` seja igual a `Alfred`;

* Adicione o campo `actor`, que deve ser um `array` com o valor `Heath Ledger`, ao `array` de `cast` em que o campo `character` seja igual a `Coringa`.

Requisito 12 - Adicione aos atores de `cast` do `character Batman` do filme `Batman` os valores `”Michael Keaton", "Val Kilmer" e "George Clooney”`, e deixe o `array` em ordem alfabética.


