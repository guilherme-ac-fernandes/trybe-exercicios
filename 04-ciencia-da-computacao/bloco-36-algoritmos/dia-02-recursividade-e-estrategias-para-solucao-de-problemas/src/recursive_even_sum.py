def recursive_even_sum(number):
    if number == 1:
        return 0
    elif number % 2 == 0:
        return 1 + recursive_even_sum(number - 1)
    else:
        return recursive_even_sum(number - 1)


if __name__ == "__main__":
    print(recursive_even_sum(8))
    print(recursive_even_sum(3))
    print(recursive_even_sum(1))
