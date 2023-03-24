def soma(x, y):
    return x + y


print(soma(2, 2))

print(soma(x=2, y=2))


def concat(*strings):
    final_string = ""
    for string in strings:
        final_string += string
        if not string == strings[-1]:
            final_string += ", "
    return final_string


print(concat("Cralos", "Eduardo"))
print(concat("Cralos", "Eduardo", "Cleiton"))
dict(nome="Felipe", sobrenome="Silva", idade=25)
