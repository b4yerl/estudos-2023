function Calculadora() {
  this.display = document.querySelector('.display');
  this.start = function() { this.getInputClick(); };
  this.getInputClick = function() {
    document.addEventListener('click', e => {
      const element = e.target;
      if(element.classList.contains('btn-num')) {
        this.inputDisplay(element.innerText);
      }
      else if(element.classList.contains('btn-del')) {
        this.deleteElementDisplay();
      }
      else if(element.classList.contains('btn-clear')) {
        this.clearDisplay();
      }
      else if(element.classList.contains('btn-eq')) {
        this.evaluateExpression();
      }
    });
  };
  this.inputDisplay = function(inputValue) {
    this.display.value += inputValue;
  };
  this.deleteElementDisplay = function() {
    this.display.value = this.display.value.slice(0, -1);
  };
  this.clearDisplay = function() {
    this.display.value = '';
  };
  this.evaluateExpression = function() {
    let expression = this.display.value;
    try {
      expression = eval(expression);
      if(!expression) {
        alert('Invalid expression');
        return;
      }
      this.display.value = expression;
    } catch(err) {
      alert('Invalid expression');
    }
  };
};

let calc = new Calculadora();
calc.start();