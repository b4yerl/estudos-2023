# Javascript Programação Orientada a Objetos

### Criando classes

Em js a classe e a constructor function são a mesma coisa, sendo mais um syntax sugar. Podemos declarar uma classe da seguinte maneira:
```js
class MyClass {
  constructor(params) {
    this.property = params;
  }

  method() {
    console.log(this.property);
  }
}

const myObj = new MyClass('Hello World');
myObj.method();
```

Usando essa forma não precisamos ficar declarando métodos ao prototype de forma explicíta, aquele método fora da constructor já é diretamente jogado pro __proto__ sem a necessidade de mais nada.

### Getters e Setters

Podemos usar um Symbol() para simular uma propriedade privada fazendo necessário o uso de get e set para trabalhar com o seu valor, isso seria feito da seguinte forma:
```js
const estoque = Symbol('estoque')
class Produto {
  constructor(nome, estoque) {
    this.nome = nome;
    this[estoque] = estoque;
  }

  get estoque() {
    return this[estoque];
  }

  set estoque(valor) {
    if(valor < 0 && typeof valor !== 'number') return;
    this[estoque] = valor;
  }
}
```

Propriedades que queiramos trabalhar com get e set podem ser melhor utilizadas se a nomearmos com _, dessa forma o get e o set podem ter o nome da propriedade sem problemas.

### Herança com classes

Quando estamos mexendo com classe a herança basta ser realizada com:
> class Subclass extends Superclass;

Caso a subclass implemente mais coisas e seja necessário termos um constructor nela, basta passarmos um super(params) que ele vai funcionar muito similar ao Superclass.call(params) que estávamos fazendo até então. Juntando tudo temos por exemplo:

```js
class Athlete {
  constructor(name, sport) {
    this.name = name;
    this.sport = sport;
    this.isRetired = false
  }

  retire() {
    this.isRetired = true
    console.log("I'm too old for this, good bye everyone")
  }
}

class Footballer extends Athlete {
  constructor(name, sport, goalsInCareer) {
    super(name, sport);
    this._goals = goalsInCareer
  }

  get goals() {
    return this._goals;
  }
}

const ronaldo = new Footballer('Ronaldo', 'Football', 414);
console.log(ronaldo.goals);
ronaldo.retire();
```

### Métodos de instância e statics

Métodos estáticos são métodos atrelados a classe que não precisam ser instanciados para serem utilizados até porque nem aparecem nas instâncias da classe.

Quando criamos nossa classe, podemos buscar por metodos que poderiam ser estáticos, ou seja, não carregam o this, funcionam apenas internamente na classe e portanto não precisamos mante-lo no objeto.
