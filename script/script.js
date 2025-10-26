import { state } from './state.js';
import { view } from './view.js';
import { calculator } from './calculator.js';

function handleButtonClick(e) {
  const value = e.target.dataset.value.toLowerCase();
  if (!value) return;

  if (!isNaN(value) || value === '.') {
    state.current += value;
    view.updateDisplay(`${state.previous ||''} ${state.operator ||''} ${state.current} `);
  } 
else if (['+', '-', '*', '/'].includes(value)) {
  // If there’s already a previous value, operator, and current input
  if (state.previous !== '' && state.operator !== null && state.current !== '') {
    // Calculate previous operation
    const result = calculator.calculate(
      parseFloat(state.previous),
      parseFloat(state.current),
      state.operator
    );

    // Update state
    state.previous = String(result);
    state.operator = value;
    state.current = '';
  } else {
    // Normal case: no previous or current input
    state.previous = state.current !== '' ? state.current : '0';
    state.operator = value;
    state.current = '';
  }

  // Update display to show current operation
  view.updateDisplay(`${state.previous} ${state.operator} ${state.current}`);
}
  else if (value === '=') {
    const a = parseFloat(state.previous);
    const b = parseFloat(state.current);
    const result = calculator.calculate(a, b, state.operator);

    if (result === calculator.ERROR_CODE) {
      view.updateDisplay('Error');
    } else {
      view.updateDisplay(result);
      state.current = String(result);
    }

    state.previous = '';
    state.operator = null;
  } 
  else if (value === 'c') {
    state.current = '';
    state.previous = '';
    state.operator = null;
    view.clear();
  } 
  else if (value === 'del') {
    state.current = state.current.slice(0, -1);
     view.updateDisplay(`${state.previous} ${state.operator} ${state.current} `)
  }
}

view.buttons.forEach(btn => btn.addEventListener('click', handleButtonClick));
