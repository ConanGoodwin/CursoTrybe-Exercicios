import json


def retriev_pokemon_by_type(type, reader):
    pokemons = json.load(reader)["results"]
    pokemon_by_type = [pokemon for pokemon in pokemons if type in pokemon["type"]]

    return pokemon_by_type


def retriev_pokemon_by_type_file(type, filepath):
    with open(filepath) as file:
        pokemons = json.load(file)["results"]
        pokemon_by_type = [pokemon for pokemon in pokemons if type in pokemon["type"]]

        return pokemon_by_type
