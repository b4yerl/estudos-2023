class Club {
  constructor (name, sport) {
    this._name = name;
    this._sport = sport;
  }

  getCurrentYear = function() {
    let date = new Date(); 
    date = date.getFullYear(); 
    return date;
  };

  get name() {
    return this._name;
  }

  get sport() {
    return `Até ${this.getCurrentYear()} o principal esporte do ${this._name} tem sido ${this._sport}`
  }


}

const cruzeiro = new Club('Cruzeiro', 'Futebol');
const sjSharks = new Club('San José Sharks', 'Hockey');

console.log(cruzeiro.sport);
console.log(sjSharks.sport);

/*
Algumas coisas que fui pegando aqui,
Fora do constructor eu até consegui definir propriedades, mas sem o uso de let nem de const
Inclusive métodos não aceitam o function a frente
Mas funciona com o identificador recebendo function ou arrow function.
*/