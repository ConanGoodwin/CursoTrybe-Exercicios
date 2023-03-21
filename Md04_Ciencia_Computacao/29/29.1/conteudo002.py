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
