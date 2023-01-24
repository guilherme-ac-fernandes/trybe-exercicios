from helpers.Cronometro import Cronometro


def iterative_binary_search(numbers, target):

    start = 0
    end = len(numbers) - 1

    while start <= end:
        mid = (start + end) // 2

        if numbers[mid] == target:
            return mid

        if target < numbers[mid]:
            end = mid - 1
        else:
            start = mid + 1

    return -1


# Função de busca binário utilizando recursividade
# proveniente do site Geeks for Geeks
# source: https://www.geeksforgeeks.org/python-pro
# gram-for-binary-search/
def recursive_binary_search(arr, low, high, x):

    if high >= low:
        mid = (high + low) // 2

        if arr[mid] == x:
            return mid

        elif arr[mid] > x:
            return recursive_binary_search(arr, low, mid - 1, x)
        else:
            return recursive_binary_search(arr, mid + 1, high, x)

    else:
        return -1


if __name__ == "__main__":
    numbers = [2, 3, 4, 10, 40]
    target = 40

    with Cronometro('Binary Search - Interative'):
        iterative_binary_search(numbers, target)

    with Cronometro('Binary Search - Recursive'):
        recursive_binary_search(numbers, 0, len(numbers), target)
