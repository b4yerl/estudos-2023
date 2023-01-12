// Ao invés de fazer o proposto mexendo com HTML vou só printar o resultado no console
// A ideia deste exercício é manipular o Date(), seus getters e o switch
// Deu uma vontade de não fazer com switch, mas não vou avacalhar o exercício

function getDiaSemana(data) {
  let diaSemana;
  switch (data.getDay()) {
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
  return diaSemana;
}

function getMesAtual(data) {
  let mes;
  switch (data.getMonth()) {
    case 0:
      mes = 'Janeiro';
      break
    case 1:
      mes = 'Fevereiro';
      break
    case 2:
      mes = 'Março';
      break
    case 3:
      mes = 'Abril';
      break
    case 4:
      mes = 'Maio';
      break
    case 5:
      mes = 'Junho';
      break
    case 6:
      mes = 'Julho';
      break
    case 7:
      mes = 'Agosto';
      break
    case 8:
      mes = 'Setembro';
      break
    case 9:
      mes = 'Outubro';
      break
    case 10:
      mes = 'Novembro';
      break
    case 11:
      mes = 'Dezembro';
      break
  }
  return `de ${mes}`
}

function printData() {
  const dataAtual = new Date();
  const mesAtual = getMesAtual(dataAtual);
  const diaSemana = getDiaSemana(dataAtual);

  console.log(`${diaSemana}, ${dataAtual.getDate()} ${mesAtual} de ${dataAtual.getFullYear()}`)
}

function main() {
  printData();
  usandoToLocaleDateString();
}

main();

// Refatorei o código original para isolar as funções
// Mas no javascript podemos fazer tudo isso de forma bem mais simples
// No caso usaremos o toLocaleDateString() e pra isso precisamos de um objeto options

function usandoToLocaleDateString() {
  const data = new Date();
  const options = {
    dateStyle: 'full',
    // Para adicionar as horas
    //timeStyle: 'short'
  };
  
  console.log(data.toLocaleDateString('pt-BR', options))
}
