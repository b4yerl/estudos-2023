const pessoa1 = {
  nome: 'Bayerl',
  idade: 24,
  peso: 105,
  alturaM: 1.75,
}

function imc(pessoa) {
  return (pessoa.peso / Math.pow(pessoa.alturaM, 2))
}

console.log(`${pessoa1.nome} nasceu em ${2022 - pessoa1.idade}`);
console.log(`Seu IMC é de ${imc(pessoa1)}`);