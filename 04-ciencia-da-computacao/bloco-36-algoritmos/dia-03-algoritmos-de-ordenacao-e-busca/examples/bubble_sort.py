def bubble_sort(numbers):
    n = len(numbers)

    for ordered_elements in range(n - 1):
        for item in range(0, n - 1 - ordered_elements):
            if numbers[item] > numbers[item + 1]:
                # current_element = numbers[item]
                # numbers[item] = numbers[item + 1]
                # numbers[item + 1] = current_element
                index = item + 1
                numbers[item], numbers[index] = numbers[index], numbers[item]
    return numbers


if __name__ == "__main__":
    numbers = [7, 5, 9, 2, 6, 8]
    print(bubble_sort(numbers))
