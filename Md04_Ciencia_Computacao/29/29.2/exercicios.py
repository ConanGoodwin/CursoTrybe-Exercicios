import random


# Exercicio 01
def vertical_stair_name(name: str):
    for num in range(len(name), 0, -1):
        print(name[0:num])


vertical_stair_name("PEDRO")


# Exercicio 02
def choice_word():
    count = 0
    word = random.choice(["word1", "word2", "word3"])
    scrambled_word = "".join(random.sample(word, len(word)))
    while count < 3:
        print(f"Palavra embaralhada: {scrambled_word}")
        print(f"Tentativa {count+1}")
        resp = input("Digite a palavra correta: ")
        if resp == word:
            count = 3
            print("Você acretou a palavra!")
        count += 1
    if count == 3:
        print("3 tentativas sem sucesso!")
    print(f"palavra correta: {word}")


choice_word()
