# escrita
with open("arquivo.txt", mode="w") as file:
    file.write("Trybe S2")

# leitura
with open("arquivo.txt") as file:
    content = file.read()
    print(content)

with open("arquivo.txt", mode="w") as file:
    lines = ["Olá\n", "mundo\n", "belo\n", "do\n", "Pyhton\n"]
    file.writelines(lines)

with open("arquivo.txt") as file:
    for line in file:
        print(line, end="")

with open("arquivo.dat", mode="wb") as file:
    file.write(b"C\xc3\xa1ssio 30")

try:
    with open("arquivos.dat", mode="rb") as file:
        content = file.read()
        print(content)
except FileNotFoundError:
    print("Não existe este arquivo")

# Exercicio 03
try:
    with (
        open("alunos.txt", mode="r") as file_in,
        open("alunos-reprovados.txt", mode="w") as file_out,
    ):
        reprovados = [
            aluno.split(" ")[0] + "\n"
            for aluno in file_in
            if int((aluno.split(" ")[1]).replace("\n", "")) < 6
        ]
        file_out.writelines(reprovados)
except FileNotFoundError:
    print("Não existe este arquivo")
