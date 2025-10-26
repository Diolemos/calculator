export const view = {
  display: document.querySelector('.display'),
  buttons: document.querySelectorAll('.btn'),

  updateDisplay(value) {
    this.display.textContent = value;
  },

  clear() {
    this.display.textContent = '0';
  }
};
