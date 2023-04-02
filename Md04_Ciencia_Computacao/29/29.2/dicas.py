from tabulate import tabulate

titles = ["Animes", "Temporadas"]
data = [["Digimon evolutes", 1], ["Neverland", 1], ["Titan", 4], ["Kaisen", 1]]

print(tabulate(data, headers=titles, tablefmt="fancy_grid", numalign="center"))
