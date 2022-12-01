import pytest
from functions.phone_number import phone_number


def test_phone_number_with_only_number():
    assert phone_number('12345-6789') == '12345-6789'


def test_phone_number_with_only_letters_upper():
    assert phone_number('ABC') == '222'


def test_phone_number_with_only_letters_lower():
    assert phone_number('abc') == '222'


def test_phone_number_with_invalid_string():
    with pytest.raises(ValueError, match="Invalid phone number"):
        phone_number('')
