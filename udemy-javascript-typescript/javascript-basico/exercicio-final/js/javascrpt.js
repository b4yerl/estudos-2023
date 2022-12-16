function main() {
  const form = document.querySelector('#form');
  const arrayPessoas = [];

  form.addEventListener('submit', submitForm);
  
  function submitForm(evento) {
    evento.preventDefault();

    const nome = document.querySelector('#nome');
    const sobrenome = document.querySelector('#sobrenome');
    const peso = document.querySelector('#peso');
    const altura = document.querySelector('#altura');
    const resultDiv = document.querySelector('#resultados');

    resultDiv.innerText = `${nome.value}, ${sobrenome.value}, ${peso.value}, ${altura.value}`;
    arrayPessoas.push(novoObjeto(nome.value, sobrenome.value, peso.value, altura.value));

    function novoObjeto(nome, sobrenome, peso, altura) {
      return {
        nome: nome,
        sobrenome: sobrenome,
        peso: peso,
        altura: altura
      };
    }
    console.log(arrayPessoas);
  }
}
main();