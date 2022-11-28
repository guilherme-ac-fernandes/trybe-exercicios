import pytest
from exercises.python_data_types import (
    is_bool,
    is_dict,
    is_float,
    is_int,
    is_list,
    is_set,
    is_string,
    is_tuple,
    return_lower_case_string,
    append_element_in_list,
    add_element_to_set,
    remove_element_from_list,
    remove_element_from_set,
    create_new_key_value_in_dict,
    delete_key_from_dict,
)


def test_is_bool():
    assert is_bool(False) is True
    assert is_bool(True) is True
    assert is_bool("False") is False
    assert is_bool("True") is False


def test_is_integer():
    assert is_int(6) is True
    assert is_int(23165498748) is True
    assert is_int("8") is False
    assert is_int([]) is False


def test_is_float():
    assert is_float(8.45) is True
    assert is_float(-25.85) is True
    assert is_float("3.14") is False
    assert is_float({"number": "float"}) is False


def test_is_string():
    assert is_string("False") is True
    assert is_string("True") is True
    assert is_string(False) is False
    assert is_string(True) is False


def test_is_list():
    assert is_list(["elem1", "elem2"]) is True
    assert is_list([]) is True
    assert is_list({"False"}) is False
    assert is_list({"True": "False"}) is False


def test_is_tuple():
    assert is_tuple(("elem1", "elem2")) is True
    assert is_tuple((1, 2, 3)) is True
    assert is_tuple({"False"}) is False
    assert is_tuple({"True": "False"}) is False


def test_is_set():
    assert is_set({"False"}) is True
    assert is_set(set([1, 2, 3, 4])) is True
    assert is_set(["False1"]) is False
    assert is_set({"True": "False"}) is False


def test_is_dict():
    assert is_dict({"key": "value"}) is True
    assert is_dict({}) is True
    assert is_dict("False") is False
    assert is_dict("True") is False


def test_return_lower_case_string():
    assert return_lower_case_string("MaiúSCulo") == "maiúsculo"
    assert return_lower_case_string("TRYBE") == "trybe"
    assert return_lower_case_string("felps") == "felps"


def test_append_element_in_list():
    assert append_element_in_list(5, [1, 2, 3, 4]) == [1, 2, 3, 4, 5]
    assert append_element_in_list("TRYBE", []) == ["TRYBE"]
    assert append_element_in_list(
        "felps", ["isaac", "eli", "rodrigo", "roni", "marco"]
    ) == ["isaac", "eli", "rodrigo", "roni", "marco", "felps"]


def test_remove_element_from_list():
    assert remove_element_from_list(5, [1, 2, 5, 4, 3]) == [1, 2, 4, 3]
    assert remove_element_from_list("P", ["T", "P", "R", "Y", "B", "E"]) == [
        "T",
        "R",
        "Y",
        "B",
        "E",
    ]
    assert remove_element_from_list(
        "felps", ["felps", "isaac", "eli", "rodrigo", "roni", "marco"]
    ) == ["isaac", "eli", "rodrigo", "roni", "marco"]


def test_create_new_key_value_in_dict():
    assert create_new_key_value_in_dict("five", 5, {}) == {"five": 5}
    assert create_new_key_value_in_dict("school", "TRYBE", {"five": 5}) == {
        "school": "TRYBE",
        "five": 5,
    }
    assert create_new_key_value_in_dict(
        "pessoa instrutora", "felps", {"school": "TRYBE", "five": 5}
    ) == {"school": "TRYBE", "five": 5, "pessoa instrutora": "felps"}


def test_delete_key_from_dict():
    assert delete_key_from_dict(4, {4: "four", "five": 5}) == {"five": 5}
    assert delete_key_from_dict("five", {"school": "TRYBE", "five": 5}) == {
        "school": "TRYBE"
    }
    assert delete_key_from_dict(
        "pessoa instrutora",
        {"school": "TRYBE", "five": 5, "pessoa instrutora": "felps"},
    ) == {"school": "TRYBE", "five": 5}


def test_add_element_to_set():
    assert add_element_to_set(5, {1, 2, 3, 4}) == {1, 2, 3, 4, 5}
    assert add_element_to_set("TRYBE", set()) == {"TRYBE"}
    assert add_element_to_set(
        "felps", {"isaac", "eli", "rodrigo", "roni", "marco", "felps"}
    ) == {"isaac", "eli", "rodrigo", "roni", "marco", "felps"}


def test_remove_element_from_set():
    assert remove_element_from_set(5, {1, 2, 3, 4, 5}) == {
        1,
        2,
        3,
        4,
    }
    assert remove_element_from_set("P", {"T", "P", "R", "Y", "B", "E"}) == {
        "T",
        "R",
        "Y",
        "B",
        "E",
    }
    assert remove_element_from_set(
        "felps", {"isaac", "eli", "rodrigo", "roni", "marco", "felps"}
    ) == {"isaac", "eli", "rodrigo", "roni", "marco"}
