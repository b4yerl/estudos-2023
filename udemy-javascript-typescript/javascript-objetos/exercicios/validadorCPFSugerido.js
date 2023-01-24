// Como a solução apresentada visa utilizar a ideia de constructor
// decidi refazer a atividade antes da correção =)

function CPFValidator(cpf) {
  Object.defineProperty(this, 'cpf', {
    enumerable: true,
    configurable: false,
    get: function() {
      const cleanedCPF = cpf.replace(/\D/g, '');
      const cpfArr = cleanedCPF.split('');
      return cpfArr.map(n => Number(n))
    }    
  });
}
CPFValidator.prototype.isValid = function() {
  if(this.cpf.length === 11) {
    if(this.firstDigitChecker(this.cpf.slice(0, 9)) === this.cpf[this.cpf.length - 2]) {
      if(this.lastDigitChecker(this.cpf.slice(0, 10)) === this.cpf[this.cpf.length - 1]) {
        return true;
      }
    }
  }
  return false;
};

Object.defineProperties(CPFValidator.prototype, {
  'firstDigitChecker': {
    enumerable: false,
    writable: false,
    value: function(cpf) {
      const total = cpf.reduce((total, num, index) => {
        return total += num * (10 - index);
      }, 0);

      const digit = 11 - (total % 11);
      return digit > 9 ? 0 : digit;
    }
  }, 
  'lastDigitChecker': {
    enumerable: false,
    writable: false,
    value: function(cpf) {
      const total = cpf.reduce((total, num, index) => {
        return total += num * (11 - index);
      }, 0);
    
      const digit = 11 - (total % 11);
      return digit > 9 ? 0 : digit;
    }
  }
});

  


const cpf = new CPFValidator('705.484.450-52')
console.log(cpf.isValid())

// O uso do defineProperties no proto foi ideia do chatGPT
// para emular um método privado
