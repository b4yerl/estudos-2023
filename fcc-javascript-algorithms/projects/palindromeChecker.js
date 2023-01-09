function isPalindrome(str) {
  /* 
    A função stringCleaner formata o input mantendo apenas caracteres alfanuméricos
    e padronizando o lowerCase e retornando um array.
  */
  const cleanedArr = stringCleaner(str);
  
  // A callback aqui apenas inverte a ordem do array
  const reversedArr = cleanedArr.reduce((arr, char) => {
    return [char].concat(arr);
  }, []);

  /* 
    Como a variável de um array armazena apenas a referência e não os valores, 
    converti ambos para string a fim de comparar os valores
  */
  return cleanedArr.toString() === reversedArr.toString()
}

function stringCleaner(str) {
  const arr = [...str]
  const cleanerRegex = /\W|_/;
  
  const cleanedArr = arr.filter(char => !cleanerRegex.test(char));
  const loweredArr = cleanedArr.map(char => char.toLowerCase());

  return loweredArr;
}
isPalindrome('racecar');