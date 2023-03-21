fruits = ["Laranja","maçã","uva","abacaxi"]
fruits[0]
# 'Laranja'
fruits[-1]
# 'abacaxi'
fruits.append("banana")
fruits.remove("abacaxi")
fruits
# ['Laranja', 'maçã', 'uva', 'banana']
fruits.extend(["pera","melão","kiwi"])
fruits
# ['Laranja', 'maçã', 'uva', 'banana', 'pera', 'melão', 'kiwi']
fruits.index("maçã")
# 1
fruits.index("teste")
# Traceback (most recent call last):
#  File "<stdin>", line 1, in <module>
# ValueError: 'teste' is not in list
fruits
# ['Laranja', 'maçã', 'uva', 'banana', 'pera', 'melão', 'kiwi']
fruits.sort()
fruits
# ['Laranja', 'banana', 'kiwi', 'maçã', 'melão', 'pera', 'uva']

# exrecicio 05
trybe_course = ["Introdução", "Front-end", "Back-end"]
trybe_course.append("Ciência da Computação")
trybe_course
# ['Introdução', 'Front-end', 'Back-end', 'Ciência da Computação']

# tupla
user = ("Will","Marcondes",42)
user[0]
#'Will'


# conjuntos
permissions = {"member","group"}
permissions.add("root")
permissions.add("member")
permissions
# {'member', 'root', 'group'}
permissions.union({"user"})
# {'member', 'root', 'group', 'user'}
permissions.intersection({"user","member"})
# {'member'}
permissions.difference({"user"})
# {'group', 'member', 'root'}
permissions.difference({"member"})
# {'group', 'root'}
permissions
# {'member', 'root', 'group'}

# exercicio 07
nomes = set()
nomes.add('Conan')
nomes
# {'Conan'}


# Conjuntos imutaveis
permissions = frozenset(["member","group"])
permissions.union({"user"})
# frozenset({'member', 'group', 'user'})
permissions.intersection({"user","member"})
# frozenset({'member'})
permissions.difference({"member"})
# frozenset({'group'})


# Dicionarios
people_by_id = {1: "Maria", 2: "Fernanda", 3: "Felipe"}
people_by_name = {"Maria": 1, "Fernanda": 2, "Felipe": 3}
people_by_id[1]
# 'Maria'
del people_by_id[1]
people_by_id.items()
# dict_items([(2, 'Fernanda'), (3, 'Felipe')])

# exercicios 8 e 9
info = {
  "personagem": "Margarida",
  "origem": "Pato Donald",
  "nota": "Namorada do personagem principal nos quadrinhos do Pato Donald",
}
info["recorrente"] = "sim"
info
#{'personagem': 'Margarida', 'origem': 'Pato Donald', 'nota': 'Namorada do personagem principal nos quadrinhos do Pato Donald', 'recorrente': 'sim'}


# Range
list(range(5))
#[0, 1, 2, 3, 4]
list(range(1,6))
#[1, 2, 3, 4, 5]
list(range(1,11,2))
#[1, 3, 5, 7, 9]
list(range(10,0,-1))
#[10, 9, 8, 7, 6, 5, 4, 3, 2, 1]


# Exercico 10
data = ("Thiago","Nobre",29)

# Exercicio 11
my_array = [20,20,1,2]

freq_dict = {}

for item in my_array:
  if(item in freq_dict):
    freq_dict[item] += 1
  else:
    freq_dict[item] = 1
 
freq_dict
#{20: 2, 1: 1, 2: 1}
for key, valor in freq_dict.items():
  print(f"{key} : {valor}")
 
#20 : 2
#1 : 1
#2 : 1
