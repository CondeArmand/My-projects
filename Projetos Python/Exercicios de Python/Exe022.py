nome = str(input('Digite seu nome completo: ')).strip()
print('Analisando o seu nome...')
print('Seu nome em maiúsculas é {}'.format(nome.upper()))
print('Seu nome em mininúsculas é {}'.format(nome.lower()))
dividido = nome.split()
print('Seu nome tem ao todo {} letras'.format(len(nome) - nome.count(' ')))
print('Seu primeiro nome é {} e ele tem {} letras'.format(dividido[0], len(dividido[0])))
