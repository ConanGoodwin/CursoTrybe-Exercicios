class DebitoAutomatico:
    @classmethod
    def debitar(self, conta, valor, banco):
        if banco == "itau":
            print("Débito realizado pelo Itau")
        elif banco == "Santander":
            print("Santander, débito realizado!")
        elif banco == "Bradesco":
            print("Sucesso")
        elif banco == "Caixa":
            print("Efetuado com sucesso, Caixa agradece!")


DebitoAutomatico.debitar(120, 123, "itau")
DebitoAutomatico.debitar(120, 123, "Santander")
DebitoAutomatico.debitar(120, 123, "Caixa")
