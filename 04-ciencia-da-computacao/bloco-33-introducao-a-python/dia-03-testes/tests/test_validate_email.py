import pytest
from functions.validate_email import validate_email


def test_invalid_email_start_with_number():
    with pytest.raises(ValueError, match="Email should starts with a letter"):
        validate_email("1@website.ext")


def test_invalid_email_without_at():
    with pytest.raises(ValueError, match="Email should have a @"):
        validate_email("userwebsite.ext")


def test_invalid_email_with_two_dot():
    with pytest.raises(ValueError, match="Email must have only one dot"):
        validate_email("user@website..ext")


def test_invalid_email_without_dot():
    with pytest.raises(ValueError, match="Email should have a extension"):
        validate_email("user@websiteext")


def test_username_can_only_contain_letters():
    assert validate_email("user@website.ext") == 'Valid Email'


def test_username_can_contain_letters_and_digits():
    assert validate_email("user1993@website.ext") == 'Valid Email'


def test_username_can_contain_letters_digits_and_dashes():
    assert validate_email("use-r@website.ext") == 'Valid Email'


def test_username_can_contain_letters_digits_dashes_and_underscores():
    assert validate_email("us_e1r-a@website.ext") == 'Valid Email'


def test_username_should_starts_with_letter():
    assert validate_email("a@nomewebsite.ext") == 'Valid Email'


def test_username_is_invalid_raise_exception():
    with pytest.raises(ValueError,  match="Email must have valid character"):
        validate_email("a%a@nomewebsite.ext")


def test_website_contain_only_letters_and_digits():
    assert validate_email("user@website123.com") == 'Valid Email'


def test_website_invalid_chars_raise_exception():
    with pytest.raises(ValueError, match='Website must have valid character'):
        validate_email("abc@website!123.com")


def test_extension_should_contain_only_three_chars():
    assert validate_email("abc@website123.com") == 'Valid Email'


def test_extension_invalid_chars_raise_exception():
    with pytest.raises(ValueError, match='Invalid mail extension'):
        validate_email("abc@website123.pyth")
