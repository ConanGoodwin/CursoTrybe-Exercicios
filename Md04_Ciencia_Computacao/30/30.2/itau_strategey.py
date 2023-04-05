from interfaces import BancoStrategy


class ItauStrategy(BancoStrategy):
    @classmethod
    def debitar(cls, conta, valor):
        print("Débito realizado pelo Itau")
