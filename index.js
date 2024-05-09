let displayValue = '';
let history = [];
let historyPointer = -1;

function appendToDisplay(value) {
  displayValue += value;
  document.getElementById('display').value = displayValue;
}

function undo() {
  if (historyPointer >= 0) {
    historyPointer--;
    displayValue = history[historyPointer];
    document.getElementById('display').value = displayValue;
  }
}

function redo() {
  if (historyPointer < history.length - 1) {
    historyPointer++;
    if (typeof history[historyPointer] !== 'undefined') {
      displayValue = history[historyPointer];
      document.getElementById('display').value = displayValue;
    }
  }
}

function clearDisplay() {
  displayValue = '';
  document.getElementById('display').value = displayValue;
}

function calculate() {
  if (displayValue) {
    const result = eval(displayValue); // Usando eval aquí por simplicidad, pero nota que eval no se recomienda generalmente por razones de seguridad
    displayValue = result.toString();
    document.getElementById('display').value = displayValue;
    addToHistory(displayValue);
  }
}

function addToHistory(value) {
  historyPointer++;
  history.splice(historyPointer, history.length - historyPointer, value);
}
