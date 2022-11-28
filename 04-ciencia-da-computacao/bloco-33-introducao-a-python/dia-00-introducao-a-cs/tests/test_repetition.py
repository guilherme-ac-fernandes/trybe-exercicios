import pytest
from exercises.repetition import (
    append_each_letter_of_the_word_in_a_list,
    return_element_from_list_that_is_string,
    return_index_of_the_uppercase_letter,
)


def test_append_each_letter_of_the_word_in_a_list():
    assert append_each_letter_of_the_word_in_a_list("trybe") == [
        "t",
        "r",
        "y",
        "b",
        "e",
    ]
    assert append_each_letter_of_the_word_in_a_list("carro") == [
        "c",
        "a",
        "r",
        "r",
        "o",
    ]
    assert append_each_letter_of_the_word_in_a_list("P") == ["P"]


def test_return_element_from_list_that_is_string():
    assert return_element_from_list_that_is_string([1, 2, 3, 4, 5, "6", 7, 8]) == "6"
    assert (
        return_element_from_list_that_is_string(
            [True, False, True, False, True, False, "True"]
        )
        == "True"
    )
    assert return_element_from_list_that_is_string([[1, 2], "2", 4.5]) == "2"


def test_return_index_of_the_uppercase_letter():
    assert return_index_of_the_uppercase_letter("Trybe") == 0
    assert return_index_of_the_uppercase_letter("felPs") == 3
    assert return_index_of_the_uppercase_letter("pythoN") == 5
