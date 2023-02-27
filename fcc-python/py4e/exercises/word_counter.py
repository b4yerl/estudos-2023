def word_counter():
    fileName = input('Enter file name: ')
    # Error handling
    try:
        fhandle = open(fileName, 'r')
    except:
        print(f'File {fileName} could not be found')
        quit()
    
    # Declarando o dict que será utilizado para manter a contagem
    counter = dict()

    for line in fhandle:
      line = line.strip()
      words = line.split()
      for word in words:
        counter[word] = counter.get(word, 0) + 1
    
    # Find the most common word
    most_common = None
    most_common_count = None

    for word,count in counter.items():
       if most_common_count is None or count > most_common_count:
          most_common = word
          most_common_count = count
    print(f'The most common word is: {most_common}')

    # Find the top 10 most used words
    print('The top 10 most used words were:')

    print(sorted([(v,k) for k,v in counter.items()][:10], reverse=True))
        
word_counter()