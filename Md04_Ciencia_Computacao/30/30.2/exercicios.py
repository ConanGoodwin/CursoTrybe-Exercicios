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
