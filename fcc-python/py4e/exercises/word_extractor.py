def word_extractor(path):
  fhandle = open(path)

  for line in fhandle:
    if line.startswith('From') :
      line.rstrip()
      words = line.split()
      if len(words) > 3 :
        print(words[2])

word_extractor('mbox.txt')

