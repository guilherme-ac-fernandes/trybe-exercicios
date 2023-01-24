from helpers.Cronometro import Cronometro
from examples.bubble_sort import bubble_sort


animal_array = ["zebra", "macaco", "elefante", "arara", "javali"]

# Resposta:

# Após duas interações no array de animais, utilizando
# o método bubble sort o array ficará no seguinte formato
# ["elefante", "arara", "javali", "macaco", "zebra"]


if __name__ == "__main__":
    with Cronometro('Bubble Sort'):
        print(bubble_sort(animal_array))
