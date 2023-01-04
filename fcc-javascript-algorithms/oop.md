# Object-Oriented Programming

### Basic Objects

Objetos possuem características e comportamentos, propriedades e métodos.

Podemos acessar as propriedades do nosso objeto com a notação de ponto.

Quando declaramos um método pro nosso objeto, podemos referenciar propriedades do mesmo utilizando a keyword this. Apesar de this ser um tópico bem profundo, auqi ele trata do objeto ao qual o método está associado.
> this.propriedade;

### Função construtora

Constructors são funçoes que criam novos objetos. Elas definem propriedades e comportamento que pertencerão ao novo objeto, são como a planta de uma construção mesmo.

Por convenção constructors são nomeados em PascalCase.

Dentro do constructor utilizamos a keyword this. Ela referencia o novo objeto que está sendo criado.

Para chamar uma função construtora usamos a keyword 'new', ela indica ao javscript que estamos instanciando um objeto novo em determinada variável
> const myDog = new Dog();

Toda vez que um objeto é criado a partir de um constructor, aquele objeto é dito 'uma instância de...'. Javascript nos fornece um operador 'instanceof' que nos permite verificar se um objeto veio de uma função construtora.
> objeto instanceof Constructor;

### Own properties

Own properties são as propriedades definidas logo no instanciamento do objeto (constructor). O método .hasOwnProperty() recebe o nome de uma propriedade como argumento e retorna um boolean caso o objeto tenha aqula own property.

### prototype

Tá ligado quando tu vai no mdn e tem lá, String.prototype, Array.prototype, e talz? Pois entaão bora lá.

Quando temos uma propriedade padrão e comum a todas as instâncias de um determinado constructor, exemplo: Todo pássaro tem asas, podemos evitar que cada novo objeto tenha a mesma propriedade com o mesmo valor, multiplicando a quantidade de memória gasta sem sentido.

Para definir esse padrão usamos o prototype:
> Bird.prototype.hasWings = true;

A partir daí toda instância de Bird passa a estar ligado a essa informação. Note que prototype properties não são own properties.

Como ficar definindo várias propriedades e métodos prototype pode ficar um saco, podemos fazer de uma vez como se fosse um objeto mesmo:
> Bird.prototype = {.......}

### Constructor property

Ponto rápido aqui, quando instanciamos um objeto, ele passa a ter uma constructor property que é igual ao identificador do constructor, mas para fim de checar o tipo do objeto é melhor usar o instanceof mesmo.

Note que ao settarmos manualmente prototype properties pra nossa "classe", nós apagamos a constructor property, por isso é importande que declaremos novamente o constructor lá no protorype.

### Where an object's prototype comes from?

Assim como herdaemos genes dos pais, objetos herdam o prototype diretamente do constructor. Podemos verificar isso com
> Constructor.prototype.isPrototypeOf(objeto)

Todos os objetos no Javascript, menos alguns, tem um prototype e, como já visto, o prototype de um objeto é também um objeto.

Se voltarmos nessa cadeia veremos que 'Object' é o supertype lá do nosso Bird que por sua vez é supertype do objeto, sendo ambos subtypes de Object.

### Inheritance / DRY

In programming, temos o princípio DRY, don't repeat yourself. O problema de código repetido é que qualquer mudança no código requer ajuste em vários lugares.

O primeiro passo seria definir o constructor e o prototype do nosso supertype, para na sequência instanciá-lo. É dito nesta lição para não usar o 'new' devido a disvantangens muito complexas pro escopo atual... --\_(u_u)_/--

Sendo assim vamos instanciar o objeto com:
> let superObj = Object.create(Supertype.prototype);

Object.create(obj) cria um novo objeto e define ''obj'' como o prototype nosso novo objeto. Lembra que o prototype serve como um molde/classe aqui? Pois então.

Tá agora minha cabeça meio que deu uma congelada, mas bora. Entendendo como podemos criar um objeto que herda as características e comportamentos de um supertype, vamos então fazer com que o prototype do subtype, herde o supertype....... Vou trocar os termos no exemplo, pra exlicar melhor.
> Bird.prototype = Object.create(Animal.prototype);

Agora se instanciarmos nosso objeto pato que é um Bird ele herda todas as propriedades do animal:
> let duck = new Bird('Donald');

Quando um objeto herda seu prototype de um outro objeto, ele traz junto a constructor property. Por isso é importante fazer o reset
> Bird.prototype.constructor = Bird;

### Adicionar métodos após a herança

Se após realizarmos o processo acima, quisermos adiconar um método único ao prototype de Bird, podemos fazer isso Atribuindo com dot notation a nova função:
> Bird.prototype.fly = function() {...};

### Override métodos herdados

Assim como adicionamos um novo método ao subtype prototype, podemos alterar os métodos do supertype, para isso usamos a mesma ideia de dot notation, o lance aqui é a forma como Javascript busca pelo método na prototype chain:
- objeto => metodo() está definido aqui? não
- Subtype => metodo() está definido aqui? sim, retorna e executa
- Supertype => metodo() também está aqui, mas o código não chegou
- Object => cara, o código já parou........

### Use a Mixin to Add Common Behavior Between Unrelated Objects

Apesar de podermos compartilhar comportamentos com herança, nem sempre os tipos terão correlação. Para objeto que compartilhem o mesmo comportamneto, mas sejam coisas distintas, podemos usar os mixins.

Um mixin permite que outros objetos usem uma coleção de funções.
> let flyMixin = function(obj) {
> obj.fly = () => console.log('I\'m Flying!!!!'); 
> }

No caso acima, o flyMixin recebe um objeto qualquer e dá a ele o método fly.

### Uso de encapsulamento para proteger propriedades do objeto

A ideia de encapsulamento tu já tá ligado, proteger informações internas do objeto e controlar o seu acesso. A depender do objeto, poder mudar suas propriedades livremente pode gerar probleams.

No javascript a forma mais simples de fazer esse encapsulamento é através do constructor. Propriedades declaradas no constructpr ficam limitadas àquele escopo.

A partir dessa ideia podemos criar método privilegiados dentro do constructor, que eles sim, serão os responsáveis pr acessar essa informação privada. Nosso construtor pra resgatar o nome do Bird seria:
> function Bird(inputName) {
> let name = inputName;
> this.getName = () => name;
> }

### Immediately Invoked Function Expression (IIFE)

Um padrão comum em JS é executar uma função, logo após ser declarada, por exemplo:
> (function() {console.log('oi');}) ();

Note que os parenteses no final fazem com que essa função anônima seja executada imediatamente, imprimindo 'oi' no console. Isso é IIFE.

Com as IIFE podemos agrupar fuuncionalidades relacionadas em um único módulo, por exemplo, vimos 2 mixins anteriormente que poderiam ser agrupados dentro de um IIFE:
> const motionModule = (function() { return {...mixins...}})();

Note que temos então uma IIFE que imediatamente retorna um objeto motionModule. Este objeto contém nossos mixins como propriedades suas. A vantagem desse padrão é o agrupamento de todos os métodos relacionados em um único objeto.

