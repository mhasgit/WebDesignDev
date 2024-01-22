let currentInput = '';

function inputValue(value) {
  if (currentInput === '0' && value !== '.') {
    currentInput = value;
  } else {
    currentInput += value;
  }
  updateDisplay();
}

function clearDisplay() {
  currentInput = '';
  updateDisplay();
}

function deleteLast() {
  currentInput = currentInput.slice(0, -1);
  if (currentInput === '') {
    currentInput = '0';
  }
  updateDisplay();
}

function calculate() {
  try {
    currentInput = new Function('return ' + currentInput)();
    if (currentInput === undefined) {
      currentInput = '0';
    }
  } catch (e) {
    alert('Error in expression');
  }
  updateDisplay();
}

function updateDisplay() {
  document.getElementById('display').innerText = currentInput;
}

document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.btn').forEach(function(button) {
    button.addEventListener('click', function() {
      const value = this.innerText.trim(); // Use innerText and trim any whitespace
      if (!isNaN(value) || value === '.') {
        inputValue(value);
      } else if (value === 'C') {
        clearDisplay();
      } else if (value === '←') {
        deleteLast();
      } else if (value === '=') {
        calculate();
      } else {
        inputValue(value);
      }
    });
  });
});
