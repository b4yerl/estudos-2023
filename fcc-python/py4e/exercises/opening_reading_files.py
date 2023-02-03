def upper_file(filePath):
  try:
    print(filePath)
    fh = open(filePath, "r")
  except:
    print('File can not be found at ' + filePath)
    quit()
  
  for line in fh:
    print(line.upper())

upper_file("../files.md")
