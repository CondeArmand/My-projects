nome = input('nome: ')
nome = list(nome)
soma = 0
letras = {'a': 1, 'b': 2, 'c': 3}
for c in nome:
    if c.isdigit():
        c = int(c)
        soma += c
    else:
        soma += letras[c]
print(soma)
