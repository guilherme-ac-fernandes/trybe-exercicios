def fizz_buzz(size: int):
    number_list = []
    for number in range(1, size + 1):
        if number % 3 == 0 and number % 5 == 0:
            number_list.append("FizzBuzz")
        elif number % 3 == 0:
            number_list.append("Fizz")
        elif number % 5 == 0:
            number_list.append("Buzz")
        else:
            number_list.append(number)
    return number_list


if __name__ == "__main__":
    print(fizz_buzz(-2))
