from interfaces import BancoStrategy


class SantanderStrategy(BancoStrategy):
    @classmethod
    def debitar(cls, conta, valor):
        print("Santander, Débito efetuado!")
