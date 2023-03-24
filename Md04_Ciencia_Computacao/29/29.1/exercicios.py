# Exercicio 01
def major(x, y):
    if x > y:
        return x
    return y


print(major(3, 2))

# Exercicio 2


def media(numbers):
    soma = 0
    for number in numbers:
        soma += number
    return soma / len(numbers)


media([3, 7, 3])

# Exercicio 3


def square(side):
    for line in range(side):
        print(side * '*')


square(5)

# Exercicio 4


def major_name(names):
    print(sorted(names, key=len)[-1])


major_name(["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"])

# Exercicio 5


def qt_price(meter):
    qt_litros = meter / 3
    qt_latas = qt_litros // 18
    print(qt_litros)
    if qt_litros % 18:
        qt_latas += 1
    return (qt_latas, 80 * qt_latas)


print(qt_price(120))

# Exrecicios 6


def typeTriangle(side1, side2, side3):
    linaerSideA = side1 + side2
    linaerSideB = side1 + side3
    linaerSideC = side2 + side3
    if linaerSideA < side3 or linaerSideB < side2 or linaerSideC < side1:
        return "não é triangulo"
    if side1 == side2 == side3:
        return "Triângulo Equilátero: três lados iguais"
    if side1 == side2 or side1 == side3 or side2 == side3:
        return "Triângulo Isósceles: quaisquer dois lados iguais"
    return "Triângulo Escaleno: três lados diferentes"


print(typeTriangle(3, 7, 3))
