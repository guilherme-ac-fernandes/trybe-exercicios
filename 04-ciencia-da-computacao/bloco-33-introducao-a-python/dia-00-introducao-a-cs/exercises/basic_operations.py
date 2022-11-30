def basic_sum(first_number, second_number):
    return first_number + second_number


def basic_difference(first_number, second_number):
    return first_number - second_number


def basic_product(first_number, second_number):
    return first_number * second_number


def basic_division(first_number, second_number):
    if second_number != 0:
        return first_number / second_number
    return 'Erro: informe um denominador não nulo'


def basic_integer_division(first_number, second_number):
    if second_number != 0:
        return first_number // second_number
    return 'Erro: informe um denominador não nulo'


def basic_remainder(first_number, second_number):
    return first_number % second_number


def basic_potentiation(first_number, second_number):
    return first_number ** second_number
