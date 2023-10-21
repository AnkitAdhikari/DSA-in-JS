// # Challenge: Calculator

// ## Instructions

// Write a function called `calculator` that takes in 2 numbers and an operator and returns the result of the calculation.

function calculator(x, y, op) {
  let result;
  switch (op) {
    case '+':
      result = x + y;
      break;
    case '-':
      result = x - y;
      break;
    case '*':
      result = x * y;
      break;
    case '/':
      result = x / y;
      break;

    default:
      throw new Error('Invalid operator')
  }
  return result
}