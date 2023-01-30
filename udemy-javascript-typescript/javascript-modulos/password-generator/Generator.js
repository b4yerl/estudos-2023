export class Generator {
  constructor(options) {
    this.setsToUse = [];

    if(options.upper) this.setsToUse.push('upperCase');
    if(options.lower) this.setsToUse.push('lowerCase');
    if(options.numbers) this.setsToUse.push('numbers');
    if(options.special) this.setsToUse.push('special');
    
    this.passwordSize = options.size;
  }

  allCharSets = {
    upperCase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    lowerCase: 'abcdefghijklmnopqrstuvwxyz',
    numbers: '0123456789',
    special: '!@#$%^&*()-_=+|]}{[":/?><~'
  }  

  generatePassword() {
    let password = [];

    // Generate password characters
    for(let i = 0; i < this.passwordSize; i++) {
      let set = this.setsToUse[i % this.setsToUse.length];
      let char = this.allCharSets[set][Math.floor(Math.random() * this.allCharSets[set].length)]

      password.push(char);
    }

    // Shuffle the password
    for(let i = password.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [password[i], password[j]] = [password[j], password[i]]
    }

    return password.join('');
  }
};