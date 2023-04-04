class Classe:
    atributo_de_classe = 1

    def __init__(self) -> None:
        self.atributo_de_objeto = 2

    def metodo_normal(self):
        print(self)

    @classmethod
    def metodo_de_classe(cls):
        print(cls)

    @staticmethod
    def metodo_estatico():
        print("Olá")


objeto = Classe()
print(objeto.atributo_de_objeto)
# Não dá pra chamar usando a classe (Classe.atributo_do_objeto dá erro)

print(Classe.atributo_de_classe)
print(objeto.atributo_de_classe)
objeto.atributo_de_classe = 888
print(Classe.atributo_de_classe)
print(objeto.atributo_de_classe)

Classe.metodo_normal(objeto)
objeto.metodo_normal()

Classe.metodo_estatico()
objeto.metodo_estatico()

Classe.metodo_de_classe()
objeto.metodo_de_classe()
