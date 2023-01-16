function factoryCalculadora() {
  return {
    display: document.querySelector('.display'),




    turnsOn() { this.getClickInput(); },
    getClickInput() {
      document.addEventListener('click', e => {
        const element = e.target;
        if(element.classList.contains('btn-num')) {
          this.btnToDisplay(element.innerText)
        }
        if(element.classList.contains('btn-clear')) {
          this.clearDisplay()
        }
        if(element.classList.contains('btn-del')) {
          this.backspace()
        }
        if(element.classList.contains('btn-eq')) {
          this.executeCalc();
        }
      });
    },
    btnToDisplay(btnValue) {
      this.display.value += btnValue;
    },
    clearDisplay() {
      this.display.value = ''
    },
    backspace() {
      this.display.value = this.display.value.slice(0, -1)
    },
    executeCalc() {
      // CUIDADO COM O USO DO EVAL
      let expression = this.display.value;
      try {
        expression = eval(expression);
        if(!expression) {
          alert('Insert valid expression');
          return;
        }
        this.display.value = expression;
      } catch(err) {
        alert('Invalid Expression')
      }
    }

  };
}

const calculadora = factoryCalculadora();
calculadora.turnsOn();