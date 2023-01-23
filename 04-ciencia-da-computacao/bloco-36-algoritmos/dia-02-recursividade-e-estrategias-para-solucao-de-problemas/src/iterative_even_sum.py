def iterative_even_sum(number):
    count_even = 0

    for num in range(number + 1):
        if num % 2 == 0 and num != 0:
            count_even += 1

    return count_even


if __name__ == "__main__":
    print(iterative_even_sum(8))
    print(iterative_even_sum(3))
    print(iterative_even_sum(1))
