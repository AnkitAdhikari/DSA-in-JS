// # Challenge: Count Vowels

// ## Instructions

// Write a function called `countVowels` that takes in a string and returns the number of vowels in the string.

function countVowels(str) {
  str = str.toLowerCase();
  let count = 0;
  for (let char of str) {
    if (['a', 'e', 'i', 'o', 'u'].includes(char)) count++;
  }
  return count;
}