function main() {
  const form = document.querySelector('#form');

  form.addEventListener('submit', calculoIMC)

  function calculoIMC(evento) {
    evento.preventDefault();

    const caixaResultado = document.querySelector('#resultado');
    const peso = document.querySelector('#peso');
    const altura = document.querySelector('#altura');
    const valorPeso = Number(peso.value);
    const valorAltura = Number(altura.value);
    console.log(valorPeso, valorAltura)
    if(valorPeso <= 0 || !valorPeso) {
      caixaResultado.setAttribute("style", "background-color: #ff3333; font-size: 24px; padding: 0 0 0 8px;")
      caixaResultado.textContent = 'Peso Inválido';
    } else if(valorAltura <= 0 || !valorAltura) {
      caixaResultado.setAttribute("style", "background-color: #ff3333; font-size: 24px; padding: 0 0 0 8px;")
      caixaResultado.textContent = 'Altura Inválida';
    } else {
      let imc = valorPeso / Math.pow(valorAltura, 2);
      let diagnostico;

      switch(true) {
        case imc < 18.5:
          diagnostico = 'abaixo do peso';
          break;
        case imc < 25:
          diagnostico = 'com peso normal';
          break;
        case imc < 30:
          diagnostico = 'com sobrepeso';
          break;
        case imc < 35:
          diagnostico = 'com obesidade grau 1';
          break;
        case imc < 40:
          diagnostico = 'com obesidade grau 2';
          break;
        case imc >= 40:
          diagnostico = 'com obesidade grau 3';
          break;
      }

      caixaResultado.setAttribute("style", "background-color: #33ff33; font-size: 20px; padding: 0 0 0 8px;")
      caixaResultado.textContent = `O seu IMC é ${imc.toFixed(2)}, você está ${diagnostico}`;
    }
  }
}
main();