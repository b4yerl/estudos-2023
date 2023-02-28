import socket
import urllib.request, urllib.parse, urllib.error

def browser_v1():
  mysock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
  mysock.connect( ('data.pr4e.org', 80) )
  cmd = 'GET http://data.pr4e.org/clown.txt HTTP/1.0\n\n'.encode()
  mysock.send(cmd)

  while True:
    data = mysock.recv(512)
    if len(data) < 1:
      break
    print(data.decode())
  mysock.close()

def browser_v2():
  fhandler = urllib.request.urlopen('http://data.pr4e.org/romeo.txt')
  for line in fhandler:
    print(line.decode().strip())

browser_v2()