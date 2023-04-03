from abc import ABC, abstractmethod


class Pessoa:
    def __init__(self, nome, idade=None, saldo_na_conta=0) -> None:
        self.nome = nome
        self.idade = idade
        self.saldo_na_conta = saldo_na_conta
        self.brinquedos = []


pessoa_1 = Pessoa("Marcelo", 22, 700)
pessoa_2 = Pessoa("Matheus")
pessoa_3 = Pessoa("Maria", 33)
pessoa_4 = Pessoa("Mácia", saldo_na_conta=100)


class Database(ABC):
    @abstractmethod
    def execute(self, query):
        ...


class MongoDB(Database):
    def execute(self, query):
        print(f"executando query '{query}' no Mongo")


class MYSQLDatabase(Database):
    def execute(self, query):
        print(f"executando query '{query}' no mysql")


banco = MYSQLDatabase()
banco.execute("teste")


def minha_func(database: Database):
    if isinstance(database, Database):
        database.execute("Qalquer coisa")
    else:
        print(f"{database} não é um banco válido")


banco_2 = MongoDB()
minha_func(banco)
minha_func(banco_2)
minha_func("teste")
