// # Challenge: Find The Missing Number

// ## Instructions

// Write a function called `findMissingNumber` that takes in an array of unique numbers from 1 to n (inclusive), whe re one number is missing. It should return the missing number.

function findMisssingNumber(arr) {
  if (!arr) {
    return undefined
  } else if (arr.length == 0) {
    return 1
  }
  const currentLength = arr.length;
  const expectedLength = currentLength + 1;
  const currentSum = arr.reduce((sum, cur) => sum + cur, 0);
  const requiredSum = expectedLength * (expectedLength + 1) / 2;
  return requiredSum - currentSum;
}