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

### Métodos Úteis Para Objetos


