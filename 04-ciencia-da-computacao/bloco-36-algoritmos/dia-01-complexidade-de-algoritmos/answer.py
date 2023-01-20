import random


# Requisito 1:
def contains_duplicate(numbers):
    numbers.sort()
    previous_number = 'not a number'
    for number in numbers:
        if previous_number == number:
            return True
        previous_number = number

    return False


print('------------------------------------------------------------------')
print('Requisito 1')
print(contains_duplicate([0, 1, 2, 3, 3]))  # True
print(contains_duplicate([0, 1, 2, 3, 4]))  # False
print('------------------------------------------------------------------')

"""
  Resposta:
  O algoritmo sempre realiza a ordenação em todos os casos
  (pior caso, melhor caso e caso médio), sendo assim, devemos
  considerar a complexidade do algoritmo de ordenação do Python
  igual a O(n log n). A complexidade da avaliação no loop presente
  tem complexidade linear (n), resultando em uma complexidade de
  O(n*log(n) + n) que, de forma simplificando, fica O(n log n).
"""


# Requisito 2:
"""
entrada = [ 0 0 0 0 1
            0 0 0 0 1
            1 1 1 1 1
            0 0 0 1 0 ]

 resultado para (0, 4) = True
 resultado para (1, 1) = False
"""


def battleship(grid, x, y):
    if (grid[x][y] == 1):
        return True
    return False


print('Requisito 2')
grid = [[0, 0, 0, 0, 1], [0, 0, 0, 0, 1]]  # contém apenas 2 linhas
print(battleship(grid, 0, 4))  # True
print(battleship(grid, 1, 1))  # False
print('------------------------------------------------------------------')

"""
  Resposta:
  Como a saída da informação apenas avalia a posição do elemento
  de entrada, ambas as complexidades (tempo e espaço) é O(1).
"""


# Requisito 3:
def randomAverages(n):
    list_of_averages = []

    for _ in range(100):
        average = 0
        for _ in range(n):
            average += random.randrange(1, n)
        average = average/n
        list_of_averages.append(average)

    return list_of_averages


print('Requisito 3')
print(randomAverages(10))
print('------------------------------------------------------------------')

"""
  Resposta:
  Mesmo que, para o exemplo dado, o valor de n seja muito menor
  que o valor da constante 100, para valores de n grandes o valor
  da constante se torna desprezível. Esse problema, então, é O(n).
  Pelo mesmo motivo, a complexidade de espaço é constante, ou seja,
  O(1) => sempre retorna um array com 100 posições.
"""


# Requisito 4:
def kids_with_candies(candies, extra_candies):
    max_candies = max(candies)
    return [candy + extra_candies >= max_candies for candy in candies]


print('Requisito 4')
print(kids_with_candies([2, 3, 5, 1, 3], 3))
# saída: [True, True, True, False, True]
print('------------------------------------------------------------------')

"""
  Resposta:
  Para os três casos, utilizando a função max() do Python, a
  complexidade será O(n). A lista abaixo da função max() também
  é executada em O(n). Ou seja, O(n) + O(n) = O(n). A complexidade
  de espaço também é O(n), pois quanto mais crianças temos, maior vai
  ser o tamanho da lista gerada.

  Melhor, pior caso e caso médio serão O(n)
"""
