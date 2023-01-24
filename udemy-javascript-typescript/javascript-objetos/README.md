# Javascript Objetos e prototypes

### Object.defineProperty() e Object.defineProperties()

Podemos travar uma ou algumas propriedades de um objeto, o que pode ser mais interessante do que travar tudo com "Object.freeze(this)".

Dentro do Object.defineProperty() podemos definir getters e setters para proteger nossa propriedade, assim a nossa constructor function ficaria da seguinte forma:
```js
function Produto(nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;
  let _estoque = estoque; // desnecessário, mas eu quero

  Object.defineProperty(this, 'estoque', {
    enumerable: false,
    configurable: false,
    get: function() {
      return _estoque;
    },
    set: function(valor) {
      if (typeof valor !== 'number') {
        throw new TypeError('O estoque deve ser um número');
      }
      _estoque = valor;
    }
  });
}
```

### Object.getOwnPropertyDescriptor()

Podemos verificar o PropertyDescriptor usando o método Object.getOwnPropertyDescriptor(OBJ, PROP), com isso podemos ver as configurações que podem ser settadas com Object.defineProperty(OBJ, PROP, DESC).

### Prototypes

Prototypes são a base da OOP em Javascript. Quando temos uma constructor function com um método "padrão" àquela classe, estamos desperdiçando rescursos ao declarar esse método na constructor, pois com 1000 instâncias desse constructor, teremos 1000 vezes esse método. Para resolver isso usamos prototypes.

Toda vez que instanciamos um objeto, o js já "linka" o CONSTRUCTOR.prototype como uma propriedade geral do nosso objeto "__proto__".

Podemos usar a função Object.setPrototypeOf() e passar 2 objetos para que o segundo seja o prototype do primeiro. Dessa maneira conseguimos extender a cadeia de prototypes.

Outra maneira de settar um prototype é um simples "Constructor.prototype.method = x".

### Herança

Vamos entender agora como implementar a hearança no Javascript. Para isso utilizaremos um exemplo de uma "Shirt" que herda propriedades e métodos de "Product":
```js
function Product(name, price) {
  this.name = name;
  this.price = price;
}
Product.prototype.priceRaise = function(increment) {
  this.price += increment;
};
Product.prototype.priceDown = function(decrement) {
  this.price -= decrement;
};

function Shirt(name, price, size) {
  Product.call(this, name, price);
  this.size = size;
}
// Criamos o prototype de shirt a partir do prototype de product
Shirt.prototype = Object.create(Product.prototype);
// Recuperamos a ligação ao constructor de shirt
Shirt.prototype.constructor = Shirt;
```

Além disso podemos aind sobrescrever os métodos associados a Product com um Shirt.prototype.priceRaise por exemplo.

Note que, apesar de estarmos falando em herança, isso não ocorre realmente no javascript, o que temos aqui é mais uma delegação. Isso aparece quando apontamos o prototype de um 'objeto' como um objeto vazio contendo o proto de outro, na verdade o que estamos fazendo, e melhor, o que fizemos logo acima foi delegar Product para a cadeia de prototypes de Shirt.

### Polimorfismo

Vou começar a tratar as constructor functions como classes aqui. Sendo assim polimorfismo é a capacidade de diferentes subclasses invocarem um método com a mesma assinatura presente na superclasse, mas com comportamentos distintos.

### Factory functions + Prototypes

Achei que a aula tomou outro rumo então com vocêssss chatGPT:

> Inheritance is a mechanism in object-oriented programming (OOP) where a class can inherit properties and methods from a parent class. It is useful when you have a class that is a specialized version of another class, and you want to reuse code and structure. An example is a "Car" class that inherits from a more general "Vehicle" class.

> However, inheritance can be overused, and sometimes it may be better to use composition instead. Composition is a technique where a class contains one or more objects of other classes as fields, rather than inheriting from them. This can be useful when the relationship between classes is not a "is-a" relationship, but a "has-a" relationship. An example is a "Person" class that contains a "Car" object, rather than inheriting from a "Car" class.

> In general, you should use inheritance when the relationship between classes is an "is-a" relationship, and you should use composition when the relationship is a "has-a" relationship. Additionally, it's also good to use composition when you want to avoid tight coupling between classes and prefer a looser, more flexible design.

