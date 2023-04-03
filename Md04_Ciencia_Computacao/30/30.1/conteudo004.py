class Class:
    atributo_da_classe = 1
    _mais_atributos = 1

    @staticmethod
    def metodo_estatico():
        print("Olá")

    @classmethod
    def seta_mais_atributos(cls, valor):
        cls._mais_atributos = valor

    @classmethod
    def get_mais_atributos(cls):
        return cls._mais_atributos


object = Class()
object.metodo_estatico()
Class.metodo_estatico()
object_2 = Class()


def saida():
    print(Class.atributo_da_classe)
    print(object.atributo_da_classe)
    print(object_2.atributo_da_classe)


def saida_2():
    print(Class.get_mais_atributos())
    print(object.get_mais_atributos())
    print(object_2.get_mais_atributos())


saida()
Class.atributo_da_classe = 2
saida()
object.atributo_da_classe = 3
saida()
Class.atributo_da_classe = 3
saida()
print("metodos de classe")
Class.seta_mais_atributos(2)
saida_2()
object.seta_mais_atributos(3)
saida_2()
