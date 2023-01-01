// Ao invés de fazer o proposto mexendo com HTML vou só printar o resultado no console
// A ideia deste exercício é manipular o Date(), seus getters e o switch
// Deu uma vontade de não fazer com switch, mas não vou avacalhar o exercício

const dataAtual = new Date();
let diaSemana, mes;

switch (dataAtual.getDay()) {
  case 0:
    diaSemana = 'domingo';
    break
  case 1:
    diaSemana = 'segunda-feira';
    break
  case 2:
    diaSemana = 'terça-feira';
    break
  case 3:
    diaSemana = 'quarta-feira';
    break
  case 4:
    diaSemana = 'quinta-feira';
    break
  case 5:
    diaSemana = 'sexta-feira';
    break
  case 6:
    diaSemana = 'sábado';
    break
}

switch (dataAtual.getMonth()) {
  case 0:
    mes = 'de Janeiro';
    break
  case 1:
    mes = 'de Fevereiro';
    break
  case 2:
    mes = 'de Março';
    break
  case 3:
    mes = 'de Abril';
    break
  case 4:
    mes = 'de Maio';
    break
  case 5:
    mes = 'de Junho';
    break
  case 6:
    mes = 'de Julho';
    break
  case 7:
    mes = 'de Agosto';
    break
  case 8:
    mes = 'de Setembro';
    break
  case 9:
    mes = 'de Outubro';
    break
  case 10:
    mes = 'de Novembro';
    break
  case 11:
    mes = 'de Dezembro';
    break
}

console.log(diaSemana + ', ' + dataAtual.getDate() + ' ' + mes + ' de ' + dataAtual.getFullYear())
