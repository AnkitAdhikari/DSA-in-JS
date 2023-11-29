// ## Instructions

// Write a function called `arraySum` that takes in an array of numbers and returns their sum using recursion.

function arraySum(arr) {
  if (arr.length === 0) return 0;
  return arraySum(arr.slice(1)) + arr[0];
}