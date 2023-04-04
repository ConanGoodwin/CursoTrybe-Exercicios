import json
import pytest
from unittest.mock import mock_open, patch
from pokemon import retriev_pokemon_by_type, retriev_pokemon_by_type_file
from io import StringIO


@pytest.fixture
def grass_type_pokemon():
    return {
        "national_number": "001",
        "evolution": None,
        "name": "Bulbasaur",
        "type": ["Grass", "Poison"],
        "total": 318,
        "hp": 45,
        "attack": 49,
        "defense": 49,
        "sp_atk": 65,
        "sp_def": 65,
        "speed": 45,
    }


@pytest.fixture
def water_type_pokemon():
    return {
        "national_number": "007",
        "evolution": None,
        "name": "Squirtle",
        "type": ["Water"],
        "total": 314,
        "hp": 44,
        "attack": 48,
        "defense": 65,
        "sp_atk": 50,
        "sp_def": 64,
        "speed": 43,
    }


def test_retriev_pokemon_by_type(grass_type_pokemon, water_type_pokemon):
    fake_file = StringIO(
        json.dumps({"results": [grass_type_pokemon, water_type_pokemon]})
    )

    assert retriev_pokemon_by_type("Grass", fake_file)


def test_retriev_pokemon_by_type_file(grass_type_pokemon, water_type_pokemon):
    pokemon_json_content = json.dumps(
        {"results": [grass_type_pokemon, water_type_pokemon]}
    )

    with patch("builtins.open", mock_open(read_data=pokemon_json_content)):
        assert retriev_pokemon_by_type_file("Grass", "dummy") == [grass_type_pokemon]
