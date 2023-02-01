# Crafting Elegant Code With Stacks and Queues

Até agpra temos focado na performance das estruturas de dados para determinadas operações, mas não só por velocidade que optamos pelo uso de alguma estrutura. Stacks (pilhas) e queues (filas) são basicamente Arrays com algumas restrições de comportamento, muitos utilizadas para lidar com dados temporários, formando seus containers. Dados temporários são aqueles que após processados, não tem mais nenhum valor, como um pedido em um restaurante, por exemplo.

## Stacks

Stacks são armazenadas da mesma forma que arrays, são listas de valores contíguos, mas possuem 3 regras básicas que devem ser seguidas:
- Só podemos inserir um elemento no final da stack (push)
- Só podemos deletar o elemento no final da stack (pop)
- Só podemos ler o elemento no final da stack

Podemos então entender a stack como uma pilha de pratos, à medida que vamos empilhando, o último a chegar está no topo, é o único que pode ser visto de cima e o primeiro a ser lavado. Esse é o comportamento básico de uma pilha, LIFO (Last in First out). Um exemplo de stack é a função de undo em editores de texto e imagem.

## Abstract Data Types

A maioria das linguagens de programação não trazem um modelo de stack pronto, então precisamos implementar um. Para isso precisamos de uma classe que inicializa um array vazio e que contenha 3 métodos: um para inserir valores no final do array, um para remover os valores do final e o outro para ler o último valor. Por mais que estejamos no fim interagindo com um array, nós criamos uma interface que força o usuário a seguir essas regras.

Perceba que a stack não é uma estrutura em si que conversa diretamente com a memória do computador e talz, ela é na verdade um conjunto de regras e processos que determinam como deve ocorrer a interação seja com o Array, seja com qualquer outra estrutura de dados "nativa". Isso caracteriza um tipo de dado abstrato, um conjunto de regras teorícas implementadas a redor de outra estrutura de dados.

O Set, visto [aqui](./whyDsMatters.md), também é um tipo abstrato, já que nas verdade ele é só uma lista de valores, seja um array, uma hash table, enfim, que não contém valores duplicados. Mesmo que essas estruturas já venham implementadas na linguagem, elas não deixam de ser um tipo abstrato.

## The Importance of Constrained Data Structures

Se uma stack é nada mais do que uma versão limitada do array, por que não usar o array? A força dessas estruturas de dadosrestritas se econtra em alguns pontos, primeiro a prevenção de possíveis bugs, já que estamos restringindo o comportamento e a interação do usuário, assim um desavisado não vai ferrar tudo e também pela facilidade que isso traz de mentalizarmos e abstrairmos o problema, até pra outros programadores enxergarem o comportamento LIFO e terem familiaridade com o comportamento esperado do código.

## Queues

Semelhantes às Stacks, queues são estruturas abstratas que limitam a interação de um suário com um array com base em 3 regras, mas dessa vez temos aqui um comportamento FIFO (First in First out):
- Só podemos inserir um elemento no final da queue (enqueue)
- Só podemos deletar o elemento no início da queue (dequeue)
- Só podemos ler o elemento no início da queue

Repare que as duas estruturas tem 1 regra em comum e duas opostas. Baseado nessas regras podemos implementar a fila, crianod uma interface que limita a interação do usuário com nossos dados. Podemos enxergar filas em muitos lugares, como um sistema de um impressora, ou uma ordem de chegada de pacientes em um laboratório, sempre esses dados temporários são processados respeitando a ordem em que foram recebidos.

## Exercises

#### Página 148

1. Queue, respeitando a ordem de entrada de novos clientes eu direciono-os para atendimento, como um processamento assíncrono faria.
2. 4
3. 3
4. A implementação seria:
```js
class Stack {
  constructor() {
    this.list = [];
  }

  push(item) {
    this.list.push(item);
  }

  pop() {
    return this.list.pop();
  }

  read() {
    return this.list[this.list.length - 1];
  }
}

function reverseIt(str) {
  const stack = new Stack();
  let reversed = '';
  for(const char of str) {
    stack.push(char);
  }
  
  while(stack.read()) {
    reversed += stack.pop();
  }

  return reversed;
}
```
