# Objects

## Sample Class

```py
class Mouth:
  teeth = 32
  # self funciona como alias para o
  # objeto que chama o método
  def __init__(self, teeth):
    self.teeth = teeth
  def extractTooth(self):
    self.teeth = self.teeth - 1
  def getTeeth(self):
    return self.teeth

my_mouth = Mouth()
my_mouth.extractTooth()
print(my_mouth.getTeeth()) # 31
```

## Inheritance

A herança em Python é feita passando a superclasse como parâmetro na declaração da subclasse:
```py
class Animal:
  def __init__(self, name):
    self.name = name
class Dog(Animal):
  def bark:
    print('AUAUAUAUAUAUAUAUAU')

my_dog = Dog('Zé')
print(my_dog.bark())
```
