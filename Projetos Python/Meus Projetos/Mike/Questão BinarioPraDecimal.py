def binarioPraDecimal(binario=int):
    decimal = i = 0
    while binario != 0:
        dec = binario % 10
        decimal = decimal + dec * pow(2, i)
        binario = binario // 10
        i += 1
    print(decimal)


binario = int(input('Digite um binario valido: '))
binarioPraDecimal(binario)
