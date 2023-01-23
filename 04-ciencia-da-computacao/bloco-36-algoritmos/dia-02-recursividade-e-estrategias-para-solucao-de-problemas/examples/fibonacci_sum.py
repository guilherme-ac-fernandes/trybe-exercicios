def fibonacci_sum(num):
    if (num <= 1):
        return num
    else:
        return fibonacci_sum(num - 2) + fibonacci_sum(num - 1)


if __name__ == "__main__":
    print(fibonacci_sum(10))
