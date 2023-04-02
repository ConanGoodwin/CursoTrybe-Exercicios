import csv
import json
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


# Exercicio 04

with open("books.json", mode="r") as file:
    books = json.load(file)
    category = {}
    percent = {}
    qt_books = len(books)
    for book in books:
        for categories in book["categories"]:
            if categories:
                if categories not in category.keys():
                    category[categories] = 0
                category[categories] += 1
                percent[categories] = (category[categories] * 100) / qt_books

with open("books.csv", mode="w", encoding="utf-8") as file:
    write = csv.DictWriter(file, fieldnames=["categoria", "porcentagem"])
    write.writeheader()
    for categoria, porcentagen in percent.items():
        row = {"categoria": categoria, "porcentagem": porcentagen}
        write.writerow(row)
