from helpers.Cronometro import Cronometro
from examples.selection_sort import selection_sort_2
from examples.insertion_sort import insertion_sort
from random import shuffle


limit = 10000

ordenados = list(range(limit))
inversamente_ordenados = list(reversed(range(limit)))
aleatorios = ordenados[:]
shuffle(aleatorios)


if __name__ == "__main__":
    with Cronometro('Selection Sort - "Ordenado":'):
        selection_sort_2(ordenados)

    with Cronometro('Selection Sort - "Reverso":'):
        selection_sort_2(inversamente_ordenados)

    with Cronometro('Selection Sort - "Aleatório":'):
        selection_sort_2(aleatorios)

    with Cronometro('Insertion Sort - "Ordenado":'):
        insertion_sort(ordenados)

    with Cronometro('Insertion Sort - "Reverso":'):
        insertion_sort(inversamente_ordenados)

    with Cronometro('Insertion Sort - "Aleatório":'):
        insertion_sort(aleatorios)


# Resposta
# A ordenação com o método de inserção é ágil me escala menor
# mesmo ambos apresentarem complexidade 0(n²), o melhot cado
# inserção é 0(n). Mesmo em elementos muito grandes, ambos devem
# percorre todos os elementos mais de uma vez, resultando em um
# tempo de execução proporcional ao número total de elementos
