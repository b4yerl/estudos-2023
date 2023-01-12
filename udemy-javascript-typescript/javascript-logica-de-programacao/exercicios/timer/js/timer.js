/*
Primeira versão do exercício de timer,
tentei fazer tudo usando os assuntos vistos nas últimas aulas como
Date e setInterval().

Infelizmente nessa primeira versão não consegui organizar o código como gostaria,
Acabei criando um super escopo pro primeiro event listener, pois não
consegui pensar outra forma de dar o acesso ao timer para os outros botões.

Mas enfim, tá tudo funcionando como o briefing pedia :)
*/

function main() {
  const timerElement = document.querySelector('#timer');
  const startBtn = document.querySelector('#start');
  const pauseBtn = document.querySelector('#pause');
  const resetBtn = document.querySelector('#reset');
  const timer = getNewDate();

  startBtn.addEventListener('click', () => {
    timerElement.classList.remove('paused');
    const start = setInterval(() => {
      timer.setMilliseconds(timer.getMilliseconds() + 1000)
      timerElement.innerHTML = timer.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      }); 
    }, 1000)
    
    pauseBtn.addEventListener('click', () => {
      timerElement.classList.add('paused');
      clearInterval(start);
    })
    
    resetBtn.addEventListener('click', () => {
      timerElement.classList.remove('paused')
      clearInterval(start)
      timer.setHours(0, 0, 0, 0)
      timerElement.innerHTML = timer.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      });
    })
  })
}

function getNewDate() {
  const date = new Date();
  date.setHours(0, 0, 0, 0)
  return date;
}


main();