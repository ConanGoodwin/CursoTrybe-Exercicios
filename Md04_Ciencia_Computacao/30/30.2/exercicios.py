from abc import ABC, abstractmethod

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

# Exercicio 03


class BaralhoInverso(Baralho):
    def __iter__(self):
        self._cartas.reverse()
        return BaralhoInterator(self._cartas)


print("\nInvertido:")
invert_game = BaralhoInverso()
for carta in invert_game:
    print(carta)


class PngInterface(ABC):
    @abstractmethod
    def draw(self):
        raise NotImplementedError


# Exercicio 05


class PngImage(PngInterface):
    def __init__(self, png_path) -> None:
        self.png_path = png_path
        self.format = "raster"

    def draw(self):
        print(f"Drawing PNG {self.png_path} with {self.format}")


class SvgImage:
    def __init__(self, svg_path) -> None:
        self.svg_path = svg_path
        self.format = "vector"

    def get_image(self):
        return f"SVG {self.svg_path} with {self.format}"


class SvgAdapter(PngInterface):
    def __init__(self, svg_image) -> None:
        self.svg_image = svg_image

    def draw(self):
        print(f"Drawing {self.svg_image.get_image()}")


png_image = PngImage("./test")
png_image.draw()
svg_image = SvgAdapter(SvgImage("./test"))
svg_image.draw()

# Exercicio 06


class IssStrategy:
    def __init__(self, valor) -> None:
        self.valor = valor

    def __repr__(self) -> str:
        return str(self.valor * 0.1)


class IcmsStrategy:
    def __init__(self, valor) -> None:
        self.valor = valor

    def __repr__(self) -> str:
        return str(self.valor * 0.06)


class Orcamento:
    def __init__(self, valor) -> None:
        self.valor = valor

    def calcular_imposto(self, tipo_imposto):
        return tipo_imposto(self.valor)


orcamento = Orcamento(1000)
print(f"ISS: {orcamento.calcular_imposto(IssStrategy)}")
print(f"ICMS: {orcamento.calcular_imposto(IcmsStrategy)}")
