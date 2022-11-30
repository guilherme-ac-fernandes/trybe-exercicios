def check_if_word_has_4_or_more_letters(word):
    return len(word) >= 4


def check_what_number_is_greater(first_number, second_number):
    return max(first_number, second_number)


def check_if_number_is_odd_or_even(number):
    if (number % 2) == 0:
        return "even"
    else:
        return "odd"


def check_if_element_exists_in_list(element, input_list: list):
    return element in input_list
