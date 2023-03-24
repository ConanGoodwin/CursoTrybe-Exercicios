restaurants = [
    {"name": "Restaurante A", "nota": 4.5},
    {"name": "Restaurante B", "nota": 3.0},
    {"name": "Restaurante C", "nota": 4.2},
    {"name": "Restaurante D", "nota": 2.3},
]

# filtered_restaurants = []
min_rating = 3.0
filtered_restaurants = [
    item["name"] for item in restaurants if item["nota"] > min_rating]
print(filtered_restaurants)

names_list = ['Duda', 'Rafa', 'Cris', 'Yuri']
new_names_list = [name.upper() for name in names_list if 'a' in name]
print(new_names_list)

quadrados = [x*x for x in range(11)]
print(quadrados)

n = 10
last, next = 0, 1
while last < n:
    print(last, end=' ')
    last, next = next, last + next
print('\n')

languages = ['Python', 'Java', 'JavaScript']
enumerate_prime = enumerate(languages)
print(list(enumerate_prime))
for index, language in enumerate(languages):
    print(f"{index} - {language}")


# Exercicio 12
def fatorial(num):
    start = 1
    for n in range(num, 0, -1):
        start *= n
    return start


print(fatorial(5))

# Exercicio 13
ratings = [6, 8, 5, 9, 10]
ratings_per_10 = [num * 10 for num in ratings]
print(ratings_per_10)

# Exercicio 14
ratings = [6, 8, 5, 9, 10]
for num in ratings:
    if num % 3 == 0:
        print(f"{num} é multiplo de 3")
