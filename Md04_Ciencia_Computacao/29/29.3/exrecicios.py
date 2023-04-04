import re


# Exercicio 01
def list_fizz_buzz(max: int):
    result = []
    for num in range(1, max + 1):
        temp = ""
        if num % 3 == 0:
            temp += "Fizz"
        if num % 5 == 0:
            temp += "Buzz"
        result.append(temp if temp else num)

    return result


# Exercicio 02
def number_of_word(text):
    result = ""
    base_change = [
        "ABC",
        "DEF",
        "GHI",
        "JKL",
        "MNO",
        "PQRS",
        "TUV",
        "WXYZ",
    ]
    for letter in text:
        for index, base in enumerate(base_change):
            if letter.upper() in base:
                result += str(index + 2)
                break
            elif index > 6:
                result += letter
    return result


print(number_of_word("1-HOME-SWEET-HOME"))


# Exercicio 03
def validate_email(email):
    regex = r"^[a-zA-Z]([\w\-\.]+)?\@[a-zA-Z]+\.[\w]{3}(\.[\w]{2})?$"
    return bool(re.match(regex, email))


# Exercicio 04
def list_valid_email(list_email):
    valid_email = []
    for email in list_email:
        if validate_email(email):
            valid_email.append(email)
        else:
            print(email)

    return valid_email
