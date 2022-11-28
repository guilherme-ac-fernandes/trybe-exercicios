from tabnanny import check
import pytest
from exercises.conditionals import (
    check_if_element_exists_in_list,
    check_if_number_is_odd_or_even,
    check_if_word_has_4_or_more_letters,
    check_what_number_is_greater,
)


def test_check_if_word_has_4_or_more_letters():
    assert check_if_word_has_4_or_more_letters("Trybe") is True
    assert check_if_word_has_4_or_more_letters("Card") is True
    assert check_if_word_has_4_or_more_letters("") is False
    assert check_if_word_has_4_or_more_letters("céu") is False


def test_check_what_number_is_greater():
    assert check_what_number_is_greater(2022, 2023) == 2023
    assert check_what_number_is_greater(2023, 2022) == 2023
    assert check_what_number_is_greater(-5, -10) == -5


def test_check_if_number_is_odd_or_even():
    assert check_if_number_is_odd_or_even(5) == "odd"
    assert check_if_number_is_odd_or_even(4) == "even"
    assert check_if_number_is_odd_or_even(2023) == "odd"
    assert check_if_number_is_odd_or_even(2022) == "even"


def test_check_if_element_exists_in_list():
    assert check_if_element_exists_in_list(7, [1, 2, 3, 4, 5]) is False
    assert check_if_element_exists_in_list(7, [6, 7, 8, 9, 10]) is True
    assert (
        check_if_element_exists_in_list(
            "felps", ["isaac", "eli", "rodrigo", "roni", "marco"]
        )
        is False
    )
    assert (
        check_if_element_exists_in_list(
            "eli", ["isaac", "eli", "rodrigo", "roni", "marco"]
        )
        is True
    )
