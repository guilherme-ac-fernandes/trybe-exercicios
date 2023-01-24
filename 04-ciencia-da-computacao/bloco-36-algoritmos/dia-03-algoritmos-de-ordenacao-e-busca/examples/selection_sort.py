# Opção inicial, mais genérica
def selection_sort(numbers):
    n = len(numbers)

    for index in range(n - 1):
        min_element_index = index

        for search_index in range(index + 1, n):
            if numbers[search_index] < numbers[min_element_index]:
                min_element_index = search_index

        current_element = numbers[index]
        numbers[index] = numbers[min_element_index]
        numbers[min_element_index] = current_element

    return numbers


# Opção com mais funcionalidades presentes no python
def search(numbers, start, end):
    min_element = numbers[start]
    min_element_index = start

    for i in range(start + 1, end):
        if numbers[i] < min_element:
            min_element = numbers[i]
            min_element_index = i

    return min_element_index


def selection_sort_2(numbers):
    n = len(numbers)

    for index in range(n - 1):
        min_index = search(numbers, index, n)
        numbers[index], numbers[min_index] = numbers[min_index], numbers[index]

    return numbers


numbers = [7, 5, 9, 2, 6, 8]
print(f"Lista inicial: {numbers}")
ordered_numbers = selection_sort_2(numbers)
print(f"Lista final: {ordered_numbers}")
