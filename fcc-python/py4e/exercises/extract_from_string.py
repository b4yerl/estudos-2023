str = 'X-DSPAM-Confidence: 0.8475 '

# My code starts below this line

colon_index = str.find(':')
num_string = str[colon_index + 1 :]
converted_num = float(num_string.strip())

print(f'{converted_num} of type {type(converted_num)}')
