from random import randint
name = str(input('Entrada: '))
for n in range(randint(0, 10)):
    for c in range(randint(0, 1)):
        name = list(name)
        letra_escolhida = randint(0, len(name) - 1)
        letra_original = name[letra_escolhida]
        letra_nova = letra_original.upper()
        name[letra_escolhida] = letra_nova
    for c in range(randint(0, 1)):
        name = list(name)
        letra_escolhida = randint(0, len(name) - 1)
        letra_original = name[letra_escolhida]
        letra_nova = letra_original.lower()
        name[letra_escolhida] = letra_nova
print('Saída: ', ''.join(name))
