// # Challenge: Find Max Number

// ## Instructions

// Write a function called `findMaxNumber` that takes in an array of numbers and returns the largest number in the array.

function findMaxNumber(arr) {
  return arr.reduce((max, cur) => cur > max ? cur : max)
}