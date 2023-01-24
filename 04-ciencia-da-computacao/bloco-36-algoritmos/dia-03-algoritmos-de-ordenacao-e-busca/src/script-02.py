from helpers.Cronometro import Cronometro
from examples.merge_sort import merge_sort


numbers_array = [7, 3, 5, 4, 6, 8, 2, 1]

# Resposta:

# 7    3    5    4    6    8    2    1

# 3 7    4 5    6 8    1 2

# 3 4 5 7    1 2 6 8

# 1 2 3 4 5 6 7 8


if __name__ == "__main__":
    with Cronometro('Merge Sort'):
        print('Antes:', numbers_array)
        merge_sort(numbers_array)
        print('Depois:', numbers_array)
