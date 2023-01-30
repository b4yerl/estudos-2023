def total_count_average() :
  total = 0
  count = 0
  user_input = ''

  while(True) :
    user_input = input('Enter a Number: ')
    if user_input == 'done':
      break
    try :
      total += float(user_input)
      count += 1
    except :
      print('Invalid input')
  average = total / count
  print(total, count, average)     

total_count_average()