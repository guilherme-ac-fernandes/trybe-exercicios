###  MongoDB - Introdução

####  Atividade de fixação:
> Utilizando a coleção _[bios](https://www.mongodb.com/docs/manual/reference/bios-example-collection/)_, construa `queries` para retornar os seguintes itens nos requisitos 1 a 6:

Requisito 1 - Retorne o documento com o `_id` igual a `8`.

Requisito 2 - Retorne o documento com o `_id` igual a `8`, mas só exiba os atributos: `_id` e `name`.

Requisito 3 - Retorne apenas os atributos `name` e `birth` do documento com o `_id` igual a `8`.

Requisito 4 - Retorne todos os documentos em que o atributo `name.first` seja igual a `John`, utilizando o método `pretty()`.

Requisito 5 - Retorne os `3` primeiros documentos da coleção `bios` utilizando o método `pretty()`.

Requisito 6 - Retorne `2` documentos da coleção `bios` pulando os `5` primeiros documentos.

> Utilizando o `mongoimport`, importe o arquivo [books.json](https://lms-assets.betrybe.com/lms/books.json) para a sua instância local do `MongoDB` e utilize a coleção `books` para construir as seguintes consultas, nos requisitos 7 a 10:

Requisito 7 - Retorne a quantidade de documentos da coleção `books`.

Requisito 8 - Conte quantos livros existem com o `status = "PUBLISH"`.

Requisito 9 - Exiba os atributos `title`, `isbn` e `pageCount` dos `3` primeiros livros. NÃO retorne o atributo `_id`.

Requisito 10 - Pule `5` documentos e exiba os atributos `_id`, `title`, `authors` e `status` dos livros com o `status = "MEAP”`, limitando-se a `10` documentos.




