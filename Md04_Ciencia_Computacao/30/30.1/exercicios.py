# exercicio 01
from abc import ABC, abstractmethod
from dataclasses import dataclass
from math import pi as PI


class TV:
    @property
    def status(self):
        return self.__ligada

    def __init__(self, tamanho) -> None:
        self.__tamanho = tamanho
        self.__volume = 50
        self.__canal = 1
        self.__ligada = False

    def aumenta_volume(self):
        if self.__volume < 99:
            self.__volume += 1

    def diminui_volume(self):
        if self.__volume > 0:
            self.__volume -= 1

    def modificar_canal(self, valor):
        if valor < 1 or valor > 99:
            raise ValueError("Canal inválido")
        self.__canal = valor

    def ligar_desligar(self):
        self.__ligada = not self.__ligada


tv = TV(100)
tv.ligar_desligar()
print(tv.status)

# exercicio 02


class Estatistica:
    @classmethod
    def média(cls, valores: list):
        return sum(valores) / len(valores)


print(Estatistica.média([2, 5, 2]))


# exercicio 03


class FiguraGeometrica(ABC):
    @abstractmethod
    def area(self):
        raise NotImplementedError

    @abstractmethod
    def perimetro(self):
        raise NotImplementedError


class Quadrado(FiguraGeometrica):
    def __init__(self, lado) -> None:
        self.lado = lado

    def area(self):
        return self.lado**2

    def perimetro(self):
        return 4 * self.lado


class Retangulo(FiguraGeometrica):
    def __init__(self, base, altura) -> None:
        self.base = base
        self.altura = altura

    def area(self):
        return self.base * self.altura

    def perimetro(self):
        return 2 * (self.base + self.altura)


print(Quadrado(2).area())
print(Retangulo(4, 2).area())


class Circulo(FiguraGeometrica):
    def __init__(self, raio) -> None:
        self.raio = raio

    def area(self):
        return PI * (self.raio**2)

    def perimetro(self):
        return 2 * PI * self.raio


print(Circulo(4).area())
