/*
Na correção vimos uma forma de fazer isso usando o event.target
*/
function main() {
  const timerElement = document.querySelector('#timer');
  const startBtn = document.querySelector('#start');
  const pauseBtn = document.querySelector('#pause');
  const resetBtn = document.querySelector('#reset');
  
  let seconds = 0;
  let timer;

  document.addEventListener('click', (e) => {
    const target = e.target;
    if(target === startBtn) {
      timerElement.classList.remove('paused');
      clearInterval(timer);
      timer = setInterval(() => {
        seconds++;
        timerElement.innerHTML = getNewDate(seconds)
      }, 1000);
    }
    else if(target === pauseBtn) {
      timerElement.classList.add('paused');
      clearInterval(timer);
    }
    else if(target === resetBtn) {
      timerElement.classList.remove('paused')
      clearInterval(timer)
      seconds = 0;
      timerElement.innerHTML = getNewDate(seconds)
    }
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