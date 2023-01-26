export class ValidadorCpf {
  constructor(cpf) {
    this.cpf = cpf.replace(/\D+/g, '');
  }

  isValid() {
    if(this.cpf.length === 11)
      if(this.firstDigit() && this.lastDigit())
        return true;
    console.log(this.cpf.length)
    return false;
  }

  firstDigit() {
    const arr = this.cpf.split('').splice(0, 9).map(n => +n)

    const total = arr.reduce((sum, num, index) => {
      return sum += num * (10 - index);
    }, 0)
    
    const digit = 11 - (total % 11);
    return digit > 9 ? 0 == this.cpf[9] : digit == this.cpf[9];
  }

  lastDigit() {
    const arr = this.cpf.split('').splice(0, 10).map(n => +n)

    const total = arr.reduce((sum, num, index) => {
      return sum += num * (11 - index);
    }, 0)
    
    const digit = 11 - (total % 11);
    return digit > 9 ? 0 ==this.cpf[10] : digit == this.cpf[10];
  }
}

const cpf = new ValidadorCpf('858.832.855-03');
console.log(cpf.isValid())