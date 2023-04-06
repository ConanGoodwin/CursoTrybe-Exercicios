# Exercicio 01
class Soldier:
    def __init__(self, level) -> None:
        self.level = level

    def attack(self):
        return self.level * 1


class Jedi:
    def __init__(self, level) -> None:
        self.level = level

    def attack_with_saber(self):
        return self.level * 100


class CharacterAdapter:
    def __init__(self, jedi) -> None:
        self.jedi = jedi

    def attack(self):
        return self.jedi.attack_with_saber()


class StarWarsGame:
    def __init__(self, character) -> None:
        self.character = character

    def figth_enemy(self):
        print(f"You caused {self.character.attack()} of damage to the enemy.")


StarWarsGame(Soldier(5)).figth_enemy()
StarWarsGame(CharacterAdapter(Jedi(20))).figth_enemy()

# Exercicio 02


class Carta:
    def __init__(self, valor, naipe) -> None:
        self.valor = valor
        self.naipe = naipe

    def __repr__(self) -> str:
        return f"{self.valor} de {self.naipe}"


class BaralhoInterator:
    def __init__(self, cartas) -> None:
        self.__index = 0
        self.__cartas = cartas

    def __next__(self):
        try:
            result = self.__cartas[self.__index]
            self.__index += 1
            return result
        except IndexError:
            raise StopIteration


class Baralho:
    n = "copas ouros espadas paus".split()
    v = "A 2 3 4 5 6 7 8 9 10 J Q K".split()

    def __init__(self) -> None:
        self._cartas = [Carta(va, na) for na in self.n for va in self.v]

    def __len__(self):
        return len(self._cartas)

    def __iter__(self):
        return BaralhoInterator(self._cartas)


new_game = Baralho()
print(len(new_game))
for carta in new_game:
    print(carta)
