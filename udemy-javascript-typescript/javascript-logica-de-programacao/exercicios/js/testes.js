const data = new Date();
let diaSemana = data.getDay();
const d = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo']
switch(diaSemana) {
  case 0:
    console.log(`Hoje é ${d[0]}`)
    break;
  case 1:
    console.log(`Hoje é ${d[1]}`)
    break;
  case 2:
    console.log(`Hoje é ${d[2]}`)
    break;
  case 3:
    console.log(`Hoje é ${d[3]}`)
    break;
  case 4:
    console.log(`Hoje é ${d[4]}`)
    break;
  case 5:
    console.log(`Hoje é ${d[5]}`)
    break;
  case 6:
    console.log(`Hoje é ${d[6]}`)
    break;
  case 7:
    console.log(`Hoje é ${d[7]}`)
    break;
}