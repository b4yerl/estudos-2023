function findSolution(target) {
  function find(current, history) {
    if (current === target) {
      return history;
    }
    else if (current > target) {
      return null;
    }
    else {
      return find(current + 5, `(${history} + 5)`) || find(current * 3, `(${history} * 3)`)
    }
  }

  return find(1, '1')
}

console.log(findSolution(24))

/* Tive que trazer esse código do livro pra cá pra passar ele no debugger,
 mas agora tá tudo ok kkkkkkk
 Basicamente a ideia que traz de "ramificações" e que tava zuando minha cabeça é a seguinte:

 Durante o loop o código sempre chama o  "+5" até que o número atual passa o target,
 nesse ponto é retornado null, o que faz a chamada cair pra segunda opção do "||"
 Isso vai se resolvendo na call stack de forma que ele vá testando todas as possibilidades
 */