def conversor(moneyTipe, exchangeValue):
    amount=float(input("How much money are you?: "))
    dolar=amount/exchangeValue
    dolar=round(dolar, 2)
    dolar=str(dolar)
    print('You have: $'+dolar+' dolars')

def main():
    menu="""Welcome to the cambido's currency converter
    1-Colombian pounds
    2-Mexican pounds
    3-Argentina pounds
    Please select an option: """
    option=int(input(menu))
    if option==1:
        conversor("Colombian pounds",4000)
    if option==2:
        conversor("Mexican pounds", 20)
    if option==3:
        conversor("Argentina pounds",105)

 
if __name__ == '__main__':
    main()