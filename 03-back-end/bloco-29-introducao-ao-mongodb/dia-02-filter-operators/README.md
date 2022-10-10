###  Filter Operators

####  Atividade de fixação:
> Utilizando o `mongoimport`, importe o arquivo `[superheroes.json](https://lms-assets.betrybe.com/lms/superheroes.json)` para a sua instância local do `MongoDB` e utilize a coleção `superheroes ` para construir das seguintes consultas, nos requisitos a seguir:

Requisito 1 - Selecione todos os super-heróis com menos de `1.80m` de altura. Lembre-se de que essa informação está em centímetros.

Requisito 2 - Retorne o total de super-heróis menores que `1.80m`.

Requisito 3 - Retorne o total de super-heróis com até `1.80m`.

Requisito 4 - Selecione um super-herói com `2.00m` ou mais de altura.

Requisito 5 - Retorne o total de super-heróis com `2.00m` ou mais.

Requisito 6 - Selecione todos os super-heróis que têm olhos verdes.

Requisito 7 - Retorne o total de super-heróis com olhos azuis.

Requisito 8 - Utilizando o operador `$in`, selecione todos os super-heróis com cabelos pretos ou carecas `”No Hair”`.

Requisito 9 - Retorne o total de super-heróis com cabelos pretos ou carecas `”No Hair”`.

Requisito 10 - Retorne o total de super-heróis que não tenham cabelos pretos ou não sejam carecas.

Requisito 11 - Utilizando o operador `$not`, retorne o total de super-heróis que não tenham mais de `1.80m` de altura.

Requisito 12 - Selecione todos os super-heróis que não sejam humanos nem sejam maiores do que `1.80m`.

Requisito 13 - Selecione todos os super-heróis com `1.80m` ou `2.00m` de altura e que sejam publicados pela `Marvel Comics`.

Requisito 14 - Selecione todos os super-heróis que pesem entre `80kg` e `100kg`, sejam `Humanos` ou `Mutantes` e não sejam publicados pela `DC Comics`.

Requisito 15 - Retorne o total de documentos que não contêm o campo `race`.

Requisito 16 - Retorne o total de documentos que contêm o campo `hairColor`.

Requisito 17 - Remova apenas um documento publicado pela `Sony Pictures`.

Requisito 18 - Remova todos os documentos publicados pelo `George Lucas`.

