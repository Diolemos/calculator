export const calculator = (() => {
    const add = (a, b) => a + b;
    const sub = (a, b) => a - b;
    const mul = (a, b) => a * b;
    const div = (a, b) => b==0?'Err':a / b //if second operand is zero return an error, otherwise return a / b
    return {
      add,
      sub,
      mul,
      div,
    };
  })();