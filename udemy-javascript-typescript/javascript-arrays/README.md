# Javascript - Arrays

### Revisão do básico de arrays

Se quisermos deletar um item do nosso array sem alterar o index de nenhum item, podemos usar "delete arr[i]", isso remove o valor e deixa um espaço vazio no index i.

Ao invés de criar um array da maneira literal, podemos utilizar o constructor Array e passar os elemntos como argumento.

Para copiar os valores de um array para outro temos que usar um .slice() ou o spread operator, lembre-se que a variável de um array guarda uma referência ao array na memória.

### .splice()

De início já é importante lembrar que o splice altera o array original e retorna um array do que foi removido.

Além do index de começo e da quantidade de itens a serem removidos, podemos passar também novos valores para serem inseridos naquele local.

Podemos usar o splice para realizar as mesmas operações feitas por push, pop, unshift e shift.

### Concatenando arrays

Para concatenar os arrays veremos 2 formas bem simples. A primeira é usando o método Array.prototype.concat. Esse método recebe o segundo array e retorna um array novo juntando os 2:
> let arr3 = arr1.concat(arr2);

Outra maneira de fazer a concatenação é através do spread operator:
> let arr3 = [...arr1, ...arr2];

### .filter(); .map(); .reduce()

Como isso foi muito explorado em algum lugar [aqui](../../fcc-javascript-algorithms/) eu vou trazer só coisas novas ou interessantes de se rever.

Quando a nossa arrow function apenas retornar um objeto devmos envolver esse objeto em parenteses para indicar ao interpretador que aquilo é um return
> const names = personas.map(obj => ({ name: obj.name }));

Quando queremos acrescentar ou alterar propriedades de um objeto com o Array.prototype.map() sem alterar o original, devemos primeiro copia o objeto, odemos fazer isso com { ...obj }.

### .forEach()

O forEach só está dispnível em Arrays. Com uma sintaxe muito similar à map, filter e reduce, o forEach inicialmente serve apenas para iterar, sem necessariamente retornar alguma coisa.
