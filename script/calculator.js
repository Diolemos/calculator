/**
 * Calculator module (Singleton)
 * -----------------------------
 * Provides arithmetic operations and a generic 'calculate' method.
 * Returns numbers only.
 * Division by zero returns ERROR_CODE (-1).
 */

export const calculator = (() => {
  const ERROR_CODE = -1; // internal constant

  const add = (a, b) => a + b;
  const sub = (a, b) => a - b;
  const mul = (a, b) => a * b;
  const div = (a, b) => (b === 0 ? ERROR_CODE : a / b);

  /**
   * Executes the appropriate arithmetic operation
   * based on the provided operator string.
   * @param {number} a - first operand
   * @param {number} b - second operand
   * @param {string} op - one of '+', '-', '*', '/'
   * @returns {number} - result of operation or ERROR_CODE
   */
  const calculate = (a, b, op) => {
    switch (op) {
      case '+': return add(a, b);
      case '-': return sub(a, b);
      case '*': return mul(a, b);
      case '/': return div(a, b);
      default: return ERROR_CODE; // invalid operator
    }
  };

  return {
    add,
    sub,
    mul,
    div,
    calculate,
    ERROR_CODE,
  };
})();
