from interfaces import BancoStrategy


class BradescoStrategy(BancoStrategy):
    @classmethod
    def debitar(cls, conta, valor):
        print("Sucesso!")
