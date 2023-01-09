function convertToRoman(num) {
  const rawDecompose = getFactors(num);
  const sequence = getSequence(rawDecompose);

  // Switch para montar a string em algarismos romanos usando o array organizado
  const roman = sequence.reduce((str, num) => {
    switch (num) {
      case '1000':
        return str + 'M';
      case '500':
        return str + 'D';
      case '100':
        return str + 'C';
      case '50':
        return str + 'L';
      case '10':
        return str + 'X';
      case '5':
        return str + 'V';
      case '1':
        return str + 'I';
    }
  }, '')

  return roman;
}

function getFactors(target) {
  //  Isso aqui é uma função recursiva que retorna um array com os elementos necessários para chegar no resultado.
  function find(current, arr) {
    if (current == target) {
      return arr;
    }
    else if (current > target) {
      return null
    }
    else {
      // Infelizmente essa linha tá muito grande, mas eu não soube fazer de outra maneira para disparar a recursividade
      // Os elementos checados referem-se à [I, V, X, L, C, D, M]
      return find(current + 1000, arr.concat([1000])) || find(current + 500, arr.concat([500])) || find(current + 100, arr.concat([100])) || find(current + 50, arr.concat([50])) || find(current + 10, arr.concat([10])) || find(current + 5, arr.concat([5])) || find(current + 1, arr.concat([1]))
    }
  }
  return find(0, [])
}

function getSequence(arr) {
  let obj = {
    '1000': 0,
    '500': 0,
    '100': 0,
    '50': 0,
    '10': 0,
    '5': 0,
    '1': 0
  };
  
  // Esse for faz a contagem de quantos elementos de cada numeral temos na decomposição
  for(let item of arr) {
    obj[item]++;
  }

  /*
    Esse for in já devolve um array com a sequência correta a ser convertida pra romano
    Para isso, conferimos situações de 9 e 4 e ajustamos as quantidades de acordo
  */
  let elements = [];
  for (let item in obj) {
    if(obj[item] + obj[item * 5] == 5) {
      elements.unshift((item * 10).toString());
      elements.unshift(item);
      obj[item * 5] = 0;
    }
    else if(obj[item] == 4) {
      elements.unshift((item * 5).toString());
      elements.unshift(item);
    }
    else if(obj[item] > 0){
      for(let i = 0; i < obj[item]; i++) {
        elements.unshift(item);
      }
    }
  }

  return elements;
}
convertToRoman(69)