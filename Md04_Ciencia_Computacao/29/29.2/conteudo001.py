import sys

if __name__ == "__main__":
    for argument in sys.argv:
        print("Received -> ", argument)

print("O resultado é", 42)  # saída: O resultado é 42
print("Os resultados são", 6, 23, 42)  # saída: Os resultados são 6 23 42

print("Maria","Tiago","Joao")
print("Maria","Tiago","Joao",sep=", ")

print("na mesma", end=" ")
print("linha")

err="Arquivo não encontrado"
print(f"Erro aconteceu: {err}", file=sys.stderr)

x=5
y = 3
print(f"{x} / {y} = {x / y:.2f}")
print(f"{x:.^3}")
print(str.center("teste",8," "))

def mountT(n):
    e = str(n)
    for num in range(1, n+1,2):
        print(str.center(('*' * num),n," "))
    print(str.center('###',n," "))
    print(str.center('###',n," "))


mountT(9)

#Exercicio 01
def verticalName():
    name = input("Digite seu nome: ")
    for char in name:
        print(char)


verticalName()

#Exercicio 02
def sumInput():
    listNum = input("Digite os valores separados por espaço: ")
    listNum = listNum.split(" ")
    tot = 0
    for num in listNum:
        if not num.isdigit():
            return f"Erro ao somar valores, {num} é um valor inválido"
        tot += int(num)
    return tot

print(sumInput())

    