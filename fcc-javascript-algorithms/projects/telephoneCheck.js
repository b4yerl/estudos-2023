function telephoneCheck(str) {
  // olha o tamanho dessa gracinha
  const validationRegex = /^\d{10}$|^1(\s\d{3}\-|\(\d{3}\)|\s\d{3}\s)\d{3}\W\d{4}$|^(\(\d{3}\)|\d{3}\W)\d{3}\W\d{4}$|^1\s\(\d{3}\)\s\d{3}\W\d{4}$/;
  /*
    Esse é o código, como devemos conferir se a string se encaixa em um dos vários padrões imposto no enunciado do problema,
    a melhor ferramenta disponível no JS que eu pude pensar foi o uso de RegEx. Não vou explicar cada padrão coberto com a expressão acima,
    mas dentro das 4 possibilidades acima pude englobar todos os padrões pedidos.
  */
  return validationRegex.test(str);
}
