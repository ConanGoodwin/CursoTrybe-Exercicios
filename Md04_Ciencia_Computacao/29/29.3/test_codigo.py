import pytest
from codigo import is_odd, divide
from codigo import (
    get_most_ordered_dish_per_costumer,
    get_order_frequency_per_costumer,
)


def test_is_odd_when_number_is_odd_return_true():
    assert is_odd(3) is True


def test_is_odd_when_number_is_odd_return_false():
    assert is_odd(2) is False


def test_divide_when_other_number_is_zero_raise_an_exception():
    with pytest.raises(ZeroDivisionError, match="division by zero"):
        divide(2, 0)


@pytest.fixture
def orders():
    return [
        {"customer": "maria", "order": "pizza", "day": "terça-feira"},
        {"customer": "joao", "order": "hamburger", "day": "terça-feira"},
        {"customer": "maria", "order": "pizza", "day": "quarta-feira"},
        {"customer": "maria", "order": "hamburger", "day": "quinta-feira"},
    ]


def test_get_most_ordered_dish_per_costumer_when_customer_is_maria(orders):
    assert get_most_ordered_dish_per_costumer(orders, "maria") == "pizza"


def test_get_order_frequency_per_costumer_joao_and_order_is_pizza(orders):
    assert get_order_frequency_per_costumer(orders, "joão", "pizza") == 0


def test_get_order_frequency_per_costumer_maria_and_order_is_hamburger(orders):
    assert get_order_frequency_per_costumer(orders, "maria", "hamburger") == 1
