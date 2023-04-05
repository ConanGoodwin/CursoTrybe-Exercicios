from bradesco_strategy import BradescoStrategy
from santander_strategy import SantanderStrategy
from itau_strategey import ItauStrategy


class Banco:
    def __init__(self, banco_strategy) -> None:
        self.__banco_strategy = banco_strategy

    def debitar(self, conta, valor):
        self.__banco_strategy.debitar(conta, valor)


Banco(ItauStrategy).debitar(1, 200)
Banco(SantanderStrategy).debitar(2, 500)
Banco(BradescoStrategy).debitar(3, 600)
