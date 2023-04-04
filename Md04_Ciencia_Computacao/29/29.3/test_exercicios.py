import pytest
from exrecicios import list_fizz_buzz, list_valid_email, number_of_word, validate_email


def test_list_fizz_buzz():
    assert list_fizz_buzz(15) == [
        1,
        2,
        "Fizz",
        4,
        "Buzz",
        "Fizz",
        7,
        8,
        "Fizz",
        "Buzz",
        11,
        "Fizz",
        13,
        14,
        "FizzBuzz",
    ]


def test_list_fizz_buzz_not_number():
    with pytest.raises(TypeError, match="can only concatenate str"):
        list_fizz_buzz("a")


def test_number_of_word():
    assert number_of_word("1-HOME-SWEET-HOME") == "1-4663-79338-4663"


def test_validate_email():
    assert validate_email("con@test.com") is True


def test_validate_email_not_with_dot_and_ext():
    assert validate_email("con@test") is False


def test_validate_email_not_with_ext():
    assert validate_email("con@test.") is False


def test_validate_email_not_with_arroba():
    assert validate_email("contest.com") is False


def test_validate_email_user_not_with_caracter():
    assert validate_email("co&@test.com") is False


def test_validate_email_user_not_with_first_caracter():
    assert validate_email("1on@test.com") is False


def test_validate_email_website_not_with_caracter():
    assert validate_email("con@test1.com") is False


def test_validate_email_ext_not_more_tree():
    assert validate_email("con@test.coma") is False


def test_list_valid_email():
    assert list_valid_email(
        ["nome@dominio.com", "errad#@dominio.com", "outro@dominio.com"]
    ) == ["nome@dominio.com", "outro@dominio.com"]
