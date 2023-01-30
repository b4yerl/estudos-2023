# Version 1 - Variables and Expressions

# hours = input('Enter Hours: ')
# rate = input('Enter rate: ')
# pay = float(hours) * float(rate)
# print(f'Pay: {round(pay, ndigits=2)}')
#---------------------------------------------------------------------
# Version 2 - Conditional Statements

# hours = input('Enter Hours: ')
# rate = input('Enter rate: ')
# try :
#   pay = float(hours) * float(rate)
#   if int(hours) > 40:
#     pay += (float(hours) - 40) * (float(rate) * 0.5)
#   print(f'Pay: {round(pay, ndigits=2)}')
# except :
#   print('Error: Please insert only numeric values')
#------------------------------------------------------------------
# Version 3 - Functions

def computatePayment(hours, rate) :
    pay = hours * rate
    if hours > 40:
        pay += (hours - 40) * (rate * 0.5)
    return pay

try :
    hours = float(input('Enter Hours: '))
    rate = float(input('Enter rate: '))
    print(computatePayment(hours, rate))
except :
    print('Error: Please insert only numeric values')
