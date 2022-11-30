## Aprendendo Python

####  Atividade de fixação:
> Crie os arquivos `script-01.py` a `script-10.py` e realize os seguintes requisitos:

Requisito 1 - Crie uma função que receba dois números e retorne o maior deles.

Requisito 2 - Calcule a média aritmética dos valores contidos em uma lista.

Requisito 3 - Faça um programa que, dado um valor `n` qualquer, tal que `n > 1`, imprima na tela um quadrado feito de asteriscos de lado de tamanho `n`. Por exemplo:

```
n = 5

*****
*****
*****
*****
*****
```

Requisito 4 - Crie uma função que receba uma lista de nomes e retorne o nome com a maior quantidade de caracteres. Por exemplo, para `[“José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana”]`, o retorno deve ser "Fernanda".

Requisito 5 - Considere que a cobertura da tinta é de `1 litro` para cada `3 metros quadrados` e que a tinta é vendida em latas de `18 litros`, que custam `R$ 80,00`. Crie uma função que retorne dois valores em uma `tupla` contendo a quantidade de latas de tinta a serem compradas e o preço total a partir do tamanho de uma parede (em `m²`).

Requisito 6 - Crie uma função que receba os três lado de um triângulo e informe qual o tipo de triângulo formado ou `”não é triangulo”`, caso não seja possível formar um triângulo.

```
  Três lados formam um triângulo quando a soma de quaisquer dois lados for maior que o terceiro;
  Triângulo Equilátero: três lados iguais;
  Triângulo Isósceles: quaisquer dois lados iguais;
  Triângulo Escaleno: três lados diferentes.
```

Requisito 7 - Dada uma lista, descubra o menor elemento. Por exemplo, `[5, 9, 3, 19, 70, 8, 100, 2, 35, 27]` deve retornar `2`.

Requisito 8 - Faça um programa que, dado um valor `n` qualquer, tal que `n > 1`, imprima na tela um triângulo retângulo com `n` asteriscos de base. Por exemplo, para `n = 5` o triângulo terá 5 asteriscos na base:

```
n = 5

*
**
***
****
*****
```

Requisito 9 - Crie uma função que receba um número inteiro `N` e retorne o somatório de todos os números de 1 até `N`. Por exemplo, para `N = 5`, o valor esperado será `15.

Requisito 10 - Um posto está vendendo combustíveis com a seguinte tabela de descontos:

```
  Álcool:
    - Até 20 litros, desconto de 3% por litro;
    - Acima de 20 litros, desconto de 5% por litro.
  Gasolina:
    - Até 20 litros, desconto de 4% por litro;
    - Acima de 20 litros, desconto de 6% por litro.
```

Escreva uma função que receba o número de litros vendidos, o tipo de combustível (codificado da seguinte forma: `A - álcool`, `G - gasolina`), e retorne o valor a ser pago pelo cliente, sabendo-se que o preço do litro da gasolina é `R$ 2,50`, e o preço do litro do álcool é `R$ 1,90`.

