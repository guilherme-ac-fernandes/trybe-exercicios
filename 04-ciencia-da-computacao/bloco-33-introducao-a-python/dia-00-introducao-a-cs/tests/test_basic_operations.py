import pytest
from exercises.basic_operations import (
    basic_sum,
    basic_difference,
    basic_division,
    basic_integer_division,
    basic_potentiation,
    basic_product,
    basic_remainder,
)


def test_basic_sum():
    assert basic_sum(4, 5) == 9
    assert basic_sum(-5, 5) == 0
    assert basic_sum(-15, -15) == -30


def test_basic_difference():
    assert basic_difference(4, 5) == -1
    assert basic_difference(5, 4) == 1
    assert basic_difference(-5, 5) == -10
    assert basic_difference(5, -5) == 10
    assert basic_difference(-15, -15) == 0
    assert basic_difference(15, -15) == 30


def test_basic_product():
    assert basic_product(2, 2) == 4
    assert basic_product(-5, 5) == -25
    assert basic_product(-15, -15) == 225
    assert basic_product(-1, 158) == -158


def test_basic_division():
    assert basic_division(4, 5) == 0.8
    assert basic_division(5, 4) == 1.25
    assert basic_division(-5, 5) == -1.0
    assert basic_division(5, -5) == -1.0
    assert basic_division(-15, -15) == 1.0
    assert basic_division(225, 15) == 15.0


def test_basic_integer_division():
    assert basic_integer_division(4, 5) == 0
    assert basic_integer_division(5, 4) == 1
    assert basic_integer_division(7, 5) == 1
    assert basic_integer_division(-47, -15) == 3
    assert basic_integer_division(249, 15) == 16


def test_basic_remainder():
    assert basic_remainder(4, 5) == 4
    assert basic_remainder(5, 4) == 1
    assert basic_remainder(7, 5) == 2
    assert basic_remainder(-47, -15) == -2
    assert basic_remainder(249, 15) == 9


def test_basic_potentiation():
    assert basic_potentiation(4, 5) == 1024
    assert basic_potentiation(2, 4) == 16
    assert basic_potentiation(3, 3) == 27
    assert basic_potentiation(10, 6) == 1000000
    assert basic_potentiation(9, 0.5) == 3.0
