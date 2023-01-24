from helpers.Cronometro import Cronometro
from examples.bubble_sort import bubble_sort
from examples.merge_sort import merge_sort
from random import shuffle


limit = 10000

ordenados = list(range(limit))
inversamente_ordenados = list(reversed(range(limit)))
aleatorios = ordenados[:]
shuffle(aleatorios)


if __name__ == "__main__":
    with Cronometro('Bubble Sort - "Ordenado":'):
        bubble_sort(ordenados)

    with Cronometro('Bubble Sort - "Reverso":'):
        bubble_sort(inversamente_ordenados)

    with Cronometro('Bubble Sort - "Aleatório":'):
        bubble_sort(aleatorios)

    with Cronometro('Merge Sort - "Ordenado":'):
        merge_sort(ordenados)

    with Cronometro('Merge Sort - "Reverso":'):
        merge_sort(inversamente_ordenados)

    with Cronometro('Merge Sort - "Aleatório":'):
        merge_sort(aleatorios)


# Resposta
# O tempo de execução do Bubble Sort é superior ao do Merge
# Sort mediante a complexidade dos métodos, porque o merge
# realiza as "quebras" para análise e ordenação dos elementos
# resultando em um caso 0(n log n), em contra partida, o bubble
# é 0(n²).
