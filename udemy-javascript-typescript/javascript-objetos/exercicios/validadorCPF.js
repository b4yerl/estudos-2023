function isCPF(cpf) {
  const cleanedCPF = cpf.replace(/\D/g, '');
  const cpfArr = cleanedCPF.split('');
  
  if(firstDigitChecker(cpfArr.slice(0, 9)) == cpfArr[cpfArr.length - 2]) {
    if(lastDigitChecker(cpfArr.slice(0, 10)) == cpfArr[cpfArr.length - 1]) {
      return true;
    }
  }
  return false;
}

function firstDigitChecker(cpf) {
  const total = cpf.reduce((total, num, index) => {
    return total += num * (10 - index);
  }, 0);

  const digit = 11 - (total % 11);
  return digit > 9 ? 0 : digit;
}

function lastDigitChecker(cpf) {
  const total = cpf.reduce((total, num, index) => {
    return total += num * (11 - index);
  }, 0);

  const digit = 11 - (total % 11);
  return digit > 9 ? 0 : digit;
}

const test = isCPF('858.832.855-03');
console.log(test);
