class Exemplo:
    def __init__(self):
        print("Inicializando exmplo")
        self.__privado = "Eu sou privado"

    def __new__(cls, *args, **kwargs):
        print("Criando uma nova instancia de Exemplo")
        instance = super().__new__(cls)
        return instance

    def __metodo_privado(self):
        print("este metodo é privado")

    def metodo_publico(self):
        print("este é um metodo publico")
        self.__metodo_privado()
        return True


teste = Exemplo()
print(teste.metodo_publico())


class Eletrodomestico:
    @property
    def cor(self):
        return self.__cor.upper()

    @cor.setter
    def cor(self, nova_cor):
        if nova_cor.lower() == "turquesa":
            raise ValueError("Não existe na cor turquesa.")
        self.__cor = nova_cor

    def __init__(self, cor, potencia, tensao, preco) -> None:
        self.preco = preco
        self._potencia = potencia
        self._tensao = tensao
        self.cor = cor
        self.__ligado = False
        self.__velocidade = 0
        self.__velocidade_maxima = 3
        self.__corrente_atual_no_motor = 0
        self.__corrente_maxima_do_motor = self._potencia / self._tensao

    def __str__(self) -> str:
        return "eletrodomestico"

    def ligar(self, velocidade):
        if velocidade > self.__velocidade_maxima or velocidade < 1:
            raise ValueError(
                f"Velocidade deve estar entre 1 e {self.__velocidade_maxima}"
            )

        self.__velocidade = velocidade
        self.__corrente_atual_no_motor = (
            self.__corrente_maxima_do_motor / self.__velocidade_maxima
        ) * velocidade
        self.__ligado = True

    def desligar(self):
        self.__ligado = False
        self.__velocidade = 0
        self.__corrente_atual_no_motor = 0

    def status(self):
        return self.__ligado


class Liquidificador(Eletrodomestico):
    def __str__(self) -> str:
        return "liquidificador"

    def status(self):
        return "Sim" if super().status() else "Não"


class Ventilador(Eletrodomestico):
    def __init__(self, cor, potencia, tensao, preco, qt_pas=2) -> None:
        super().__init__(cor, potencia, tensao, preco)
        self.qt_pas = qt_pas

    def __str__(self) -> str:
        return "ventilador"


class Geladeira(Eletrodomestico):
    def __str__(self) -> str:
        return "geladeira"


class Telcelular(Eletrodomestico):
    def __str__(self) -> str:
        return "celular"


meu_liquidificador = Liquidificador("Azul", 200, 127, 300)
seu_liquidificador = Liquidificador(cor="Preto", potencia=250, tensao=220, preco=200)
meu_liquidificador.ligar(2)
print("Esta ligado?", meu_liquidificador.status())
print(f"A cor atual é {meu_liquidificador.cor}")
meu_liquidificador.cor = "Preto"
print(f"Após pintarmos, a nova cor é {meu_liquidificador.cor}")


class Cozinheiro:
    def __init__(self, nome, saldo_na_conta) -> None:
        self.nome = nome
        self.saldo_na_conta = saldo_na_conta
        self.liquidificador = None
        self.ventilador = None
        self.outro_eletros = []

    def __str__(self) -> str:
        return f"""
        - Nome do cozinheiro: {self.nome}
        - Saldo na conta: {self.saldo_na_conta}
        - Possui liquidificador? { self.liquidificador != None}
        - Possui Ventilador? { self.ventilador != None}
        - Possui outros eletricos? {
            [str(eletro) for eletro in self.outro_eletros]
        }
        """

    def comprar_eletro(self, eletro):
        if eletro.preco > self.saldo_na_conta:
            print("Voce não possui saldo para esta compra")
        else:
            self.saldo_na_conta -= eletro.preco
            if type(eletro) == Liquidificador:
                self.liquidificador = eletro
            elif type(eletro) == Ventilador:
                self.ventilador = eletro
            else:
                self.outro_eletros.append(eletro)


pessoa_cozinheira = Cozinheiro("Jacq", 10000)
pessoa_cozinheira.comprar_eletro(seu_liquidificador)
print(pessoa_cozinheira.saldo_na_conta)
print(pessoa_cozinheira)

seu_ventilador = Ventilador("Vermelho", 300, 127, 500)
pessoa_cozinheira.comprar_eletro(seu_ventilador)
print(pessoa_cozinheira)


class Teste(Eletrodomestico):
    def __init__(self, cor, potencia, tensao, preco, mais_um) -> None:
        super().__init__(cor, potencia, tensao, preco)
        self.mais_um = mais_um


teste = Teste("bla", 200, 127, 400, "teste")
print(teste.mais_um)

sua_geladeira = Geladeira("Branca", 500, 127, 1000)
pessoa_cozinheira.comprar_eletro(sua_geladeira)
seu_celular = Telcelular("Preto", 100, 127, 500)
pessoa_cozinheira.comprar_eletro(seu_celular)
print(pessoa_cozinheira)
