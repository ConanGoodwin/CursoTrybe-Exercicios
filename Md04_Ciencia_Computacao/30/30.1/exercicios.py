# exercicio 01
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
