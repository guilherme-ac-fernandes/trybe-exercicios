from functions.fizz_buzz import create_fizz_buzz


def test_fizz_buzz_with_only_three():
    assert create_fizz_buzz(3) == [1, 2, 'Fizz']


def test_fizz_buzz_with_number_five():
    assert create_fizz_buzz(5) == [1, 2, 'Fizz', 4, 'Buzz']


def test_fizz_buzz_with_number_invalid_return_empty_list():
    assert create_fizz_buzz(-2) == []


def test_fizz_buzz_with_number_fifteen_elements():
    assert create_fizz_buzz(15)[-1] == 'FizzBuzz'
