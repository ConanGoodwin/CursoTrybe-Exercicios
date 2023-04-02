import csv

with open("graduacao_unb.csv", encoding="utf-8") as file:
    graduacao_reader = csv.reader(file, delimiter=",", quotechar='"')
    header, *data = graduacao_reader

goup_by_deparment = {}
for row in data:
    departament = row[15]
    if departament not in goup_by_deparment:
        goup_by_deparment[departament] = 0
    goup_by_deparment[departament] += 1

with open("departament_report.csv", mode="w", encoding="utf-8") as file:
    writer = csv.writer(file)
    headers = ["Departamento", "Total de cursos"]
    writer.writerow(headers)

    for departament, grades in goup_by_deparment.items():
        row = [departament, grades]
        writer.writerow(row)
