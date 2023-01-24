def linear_search(numbers, target):
    n = len(numbers)
    for index in range(0, n):
        if numbers[index] == target:
            return index
    return -1


print(linear_search([1, 2, 3], 2))  # saída: 1
print(linear_search([1, 2, 3], 4))  # saída: -1
