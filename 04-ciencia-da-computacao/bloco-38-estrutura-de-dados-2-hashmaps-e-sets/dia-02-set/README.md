## Sets

####  Atividade de fixação:
> Dentro da pasta `src` crie os arquivos necessários para resolução dos requisitos:

**Observação**: Faça a análise de complexidade de tempo da solução dos requisitos abaixo.

Requisito 1 - `Blefe` é um jogo de duas pessoas onde cada uma tenta adivinhar os número que a outra irá escolher. Cada jogador escolhe `5` números de `0` a `10`, inclusive. A pontuação final é calculada da seguinte forma:

* A nota de partida de cada pessoa é o maior número que a outra pessoa não escolheu.

* O redutor é o menor número que a outra pessoa não escolheu.

* A pontuação final é a nota de partida (`redutor`).

```
Exemplo:

clara = [0, 1, 5, 9, 10]
# nota de partida: 5
# redutor: 1
# pt: 4

marco = [0, 2, 8, 9, 10]
# nota de partida: 8
# redutor: 2
# pt individual: 6

# Quem ganhou: Marco
```

Implemente uma função que receba um dicionário com os nomes e números chutados e retorne o nome de quem ganhou.

```
entrada = {
    'Clara': [0, 1, 5, 9, 10],
    'Marco': [0, 2, 8, 9, 10]
}

# saída: 'Marco'
```


Requisito 2 - Dada uma `string`, ache o tamanho da maior `substring` que não tenha caracteres repetidos.

```
string = "serdevemuitolegalmasehprecisoestudarbastante"
```



