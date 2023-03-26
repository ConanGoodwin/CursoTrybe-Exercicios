import random
from collections import Counter

nomes_01 = ['Felps','Carlos','Will','Bux']
nomes_02 = ['Flavio','Carlos','Roni','']
numeros_01 = [1,2,3,4]
numeros_02=[0,5,6,7]

random_list = random.sample(range(0,100000),random.randint(50,5000))

lista_de_numeros = []

for x in range(10000):
    lista_de_numeros.append(random.randint(0,1000))

counter = Counter(lista_de_numeros)
mais_comuns = counter.most_common()
elemento_mais_comun, qt_vezes = mais_comuns[0]

print(lista_de_numeros)
# print(counter)
# print(mais_comuns)
# print(elemento_mais_comun, qt_vezes)
print(max(lista_de_numeros), lista_de_numeros.count(max(lista_de_numeros)))

