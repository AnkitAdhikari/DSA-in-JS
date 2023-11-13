// # Challenge: Sum of Squares of Even Numbers

// ## Instructions

// Write a function called `sumOfEvenSquares` that takes an array of numbers and returns the sum of the squares of the even numbers in the array.

function sumOfEvenSquares(numbers) {
  return numbers.reduce((sum, num) => {
    if (num % 2 == 0) return sum + num ** 2;
    return sum;
  }, 0)
}