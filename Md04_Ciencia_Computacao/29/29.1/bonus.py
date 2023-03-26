# Exercicio 01
numeros = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]
print(min(numeros))


# Exercicio 02
def mountT(n):
    for num in range(1, n+1):
        print('*' * num)


mountT(5)


# Exercicio 03
def sumAtN(n):
    tot = 0
    for num in range(1, n+1):
        tot += num
    return tot


print(sumAtN(5))


# Exercicio 04
def totAPagar(litros, type,):
    if type == 'A':
        if litros > 20:
            desconto = 1.90 - (1.9 * 0.05)
        else:
            desconto = 1.90 - (1.9 * 0.03)
    else:
        if litros > 20:
            desconto = 2.50 - (2.5 * 0.06)
        else:
            desconto = 2.50 - (2.5 * 0.04)
    return litros * desconto


print(totAPagar(10, 'G'))
