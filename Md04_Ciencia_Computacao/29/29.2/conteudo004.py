import json  # json é um modulo que vem embutido, porém precisamos importá-lo


with open("pokemons.json") as file:
    # content = file.read()  # leitura do arquivo
    # pokemons = json.loads(content)[
    #     "results"
    # ]  # o conteúdo é transformado em estrutura python equivalente, dicionário neste caso.
    # # acessamos a chave results que é onde contém nossa lista de pokemons
    pokemons = json.load(file)["results"]

grass_type_pokemons = [pokemon for pokemon in pokemons if "Grass" in pokemon["type"]]

with open("pokemons.json", mode="w") as file:
    # json_to_write = json.dumps(grass_type_pokemons)
    # file.write(json_to_write)
    json.dump(grass_type_pokemons, file)
