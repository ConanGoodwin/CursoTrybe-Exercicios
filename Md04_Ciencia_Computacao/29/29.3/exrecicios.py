# Exercicio 01
def list_fizz_buzz(max):
    result = []
    for num in range(1, max + 1):
        temp = ""
        if num % 3 == 0:
            temp += "Fizz"
        if num % 5 == 0:
            temp += "Buzz"
        result.append(temp if temp else num)

    return result


print(list_fizz_buzz(15))
