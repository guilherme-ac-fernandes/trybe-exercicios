###  Atividade de fixação 2:
> Antes de começar, crie uma nova pasta e, dentro dela, crie um pacote `Node.js` com o `npm init` chamado `exercise-02`. Realize os exercícios dentro desse pacote:

Requisito 1 - Escreva um código para consumir a função construída no exercício anterior.

* Gere um número aleatório de `1 a 100` para cada parâmetro que a função recebe. Para gerar um número aleatório, utilize o seguinte trecho de código: 

```
Math.floor(Math.random() * 100 + 1).
```

* Chame a função do exercício anterior, passando os três números aleatórios como parâmetros.

* Utilize `then e catch` para manipular a Promise retornada pela função:

> Caso a Promise seja rejeitada, escreva na tela o motivo da rejeição.
> Caso a Promise seja resolvida, escreva na tela o resultado do cálculo.

