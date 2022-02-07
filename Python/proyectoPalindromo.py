def palindromo(palabra):
    palabra=palabra.lower()
    palabra=palabra.replace(" ","")
    palabraInvertida=palabra[::-1]
    if palabra==palabraInvertida:
        return True
    else:
        return False
  

def main():
    palabra=input("Escribe una palabra: ")
    esPalindromo=palindromo(palabra)
    if esPalindromo:
        print('Es palindromo')
    else:
        print('No es palindromo')
 
if __name__ == '__main__':
    main()