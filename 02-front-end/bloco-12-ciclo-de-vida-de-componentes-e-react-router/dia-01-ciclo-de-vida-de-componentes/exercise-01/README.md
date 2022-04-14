###  Atividade de fixação 1:
> A partir do _[repositório](https://github.com/tryber/exercise-dog-image)_ crie a pasta `exercise-01` e realize os seguintes requisitos:

Requisito 1 - Crie uma aplicação que consuma a API de fotos aleatórias de cachorros. Use a _[dog.ceo](https://dog.ceo/dog-api/)_. 

Observe a estrutura de dados que a API retorna:
```
  {
    "message": "https:\/\/images.dog.ceo/breeds/bulldog-french/n02108915_5306.jpg",
    "status": "success"
  }
```

* Assim que a página for montada, uma primeira requisição deve acontecer, e a imagem deve ser mostrada na tela.

* Enquanto a requisição é feita, o texto `Loading…` deve ser a única coisa presente na tela.

* Deve existir um botão que, para cada clique, `busque mais um cãozinho`.

Requisito 2 - Com o código do exercício anterior, você irá implementar mais algumas funcionalidades:

* A cada tentativa de atualização do componente, verifique se o campo `message` tem a palavra `terrier`. Se sim, não atualize o componente.

* Guarde a url da última imagem gerada no `localStorage` após cada atualização.

* Após a atualização do componente, exiba um `alert` com a raça do cãozinho (verifique o campo `message`).

Requisito 3 - Com o código do ultimo exercício, implemente:

* A cada foto que for baixada, através de um `input`, permita que quem usa dê um nome ao cãozinho.

* Crie um botão que guarde o resultado, juntamente com o nome dado ao cãozinho, em um array.

* Guarde o array no `localStorage` a cada atualização, e não mais a url da última imagem gerada.

* A cada inicialização da aplicação, verifique se existem dados prévios guardados no `localStorage`. Caso haja, ignore a instrução "assim que a página for renderizada, uma primeira requisição deve acontecer e a imagem deve ser mostrada na tela" e exiba a última imagem guardada.

