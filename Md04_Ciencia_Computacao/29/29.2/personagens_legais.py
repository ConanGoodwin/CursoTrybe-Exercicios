with open("meus-personagens-favoritos.txt",mode="w") as characters_file:
    characters_file.write('Tio Patinhas\n')
    characters_file.write('Neo\n')
    characters_file.write('Homem Aranha\n')
    print('Batman',file=characters_file)
    more_characters = ['Dream\n','Dead\n','Destiny\n']
    characters_file.writelines(more_characters)