## Complexidade de Algoritmos

####  Atividade de fixação:
> Utize o arquivo `answer.py` para resolução dos requisitos:


Requisito 1 - Dado um `array` de números de tamanho `n`, escreva um algoritmo que retorna `true` se há no `array` um número duplicado e `false` caso contrário. Analise a solução abaixo e diga qual é a ordem de complexidade desse algoritmo para o melhor caso, pior caso e caso médio.

```
def contains_duplicate(numbers):
    numbers.sort()
    previous_number = 'not a number';
    for number in numbers:
        if(previous_number == number): return True
        previous_number = number

    return False
```


Requisito 2 - Suponha que se está escrevendo uma função para um jogo de batalha naval. Dado um `array` bidimensional com `n` linhas e `m` colunas, e um par de coordenadas `x` para linhas e `y` para colunas, o algoritmo verifica se há um navio na coordenada alvo. Por exemplo:

```
entrada = [ 0 0 0 0 1
            0 0 0 0 1
            1 1 1 1 1
            0 0 0 1 0 ]

resultado para (0, 4) = True
resultado para (1, 1) = False
```

 - Qual seria a ordem de complexidade da solução para este problema? E a complexidade de espaço?

Requisito 3 - Utilize o módulo `random` da linguagem `Python` para gerar um `array` com `100 números. Cada um desses números deve ser a média de `n` números gerados aleatoriamente. Qual é a ordem de complexidade de tempo e de espaço deste programa?

Requisito 4 - Dado um `array` de doces `candies` e um valor inteiro `extra_candies`, onde o `candies[i]` representa o número de doces que a enésima criança possui. Para cada criança, verifique se há uma maneira de distribuir doces extras entre as crianças de forma que ela possa ter o maior número de doces entre elas. Observe que várias crianças podem ter o maior número de doces. Analise o código abaixo para o melhor, pior caso e caso médio. Faça a análise de complexidade de espaço também.

```
def kids_with_candies(candies, extra_candies):
    max_candies = max(candies)
    return [candy + extra_candies >= max_candies for candy in candies]


# saída: [True, True, True, False, True]
print(kids_with_candies([2, 3, 5, 1, 3], 3))
```
