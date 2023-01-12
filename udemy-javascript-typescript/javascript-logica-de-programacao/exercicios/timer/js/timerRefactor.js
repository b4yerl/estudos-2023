/*
Tá comecei a ver um pouco da correção e aí vi uma forma melhor de resolver isso,
mas não quero apagar o primeiro código...
*/
function main() {
  const timerElement = document.querySelector('#timer');
  const startBtn = document.querySelector('#start');
  const pauseBtn = document.querySelector('#pause');
  const resetBtn = document.querySelector('#reset');
  
  let seconds = 0;
  let timer;

  startBtn.addEventListener('click', () => {
    timerElement.classList.remove('paused');
    clearInterval(timer)
    timer = setInterval(() => {
      seconds++;
      timerElement.innerHTML = getNewDate(seconds)
    }, 1000)
  });
  pauseBtn.addEventListener('click', () => {
    timerElement.classList.add('paused');
    clearInterval(timer);
  });
  resetBtn.addEventListener('click', () => {
    timerElement.classList.remove('paused')
    clearInterval(timer)
    seconds = 0;
    timerElement.innerHTML = getNewDate(seconds)
  });
  
  function getNewDate(s) {
    const date = new Date(s * 1000);
    return date.toLocaleTimeString('pt-BR', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
      timeZone: 'UTC'
    }); 
  }
}

main();