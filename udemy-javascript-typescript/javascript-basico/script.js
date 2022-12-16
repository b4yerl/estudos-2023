const numero = Number(prompt('Digite um número'));

window.document.body.innerHTML = `<h1>Seu número é ${numero}</h1>`;
document.body.innerHTML += `Raiz quadrada: ${Math.pow(numero, 1/2)} <br />`;
document.body.innerHTML += `${numero} é inteiro: ${Number.isInteger(numero)} <br />`;
document.body.innerHTML += `É NaN: ${Number.isNaN(numero)} <br />`;
document.body.innerHTML += `Arredondando pra baixo: ${Math.floor(numero)}<br />`;
document.body.innerHTML += `Arredondando pra cima: ${Math.ceil(numero)}<br />`;
document.body.innerHTML += `Com duas casas decimais: ${Number(numero.toFixed(2))}<br />`;

/*
let varA = 'A';
let varB = 'B';
let varC = 'C';

console.log(varA, varB, varC);

[varA, varB, varC] = [varB, varC, varA]

//let aux = varA;
//varA = varB;
//varB = varC;
//varC = aux;

console.log(varA, varB, varC);
*/



/*
let x = Number(prompt('Digite um número'));
let y = Number(prompt('Digite outro número'));

let resposta = window.confirm(`Você confirma os números ${x} e ${y}?`);

while(!resposta)
{
	x = Number(prompt('insira o novo valor'));
	y = Number(prompt('insira outro valor'));
	resposta = window.confirm(`Você confirma os números ${x} e ${y}?`);
}

window.alert(`O resultado da operação ${x} + ${y} é ${x + y}`);
*/
