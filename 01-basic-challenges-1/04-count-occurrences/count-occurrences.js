// # Challenge: Count Occurrences


// ## Instructions

// Write a function called `countOccurrences()` that takes in a string and a character and returns the number of occurrences of that character in the string.

function countOccurrences(str, char) {
  return str.split(char).length - 1;
}