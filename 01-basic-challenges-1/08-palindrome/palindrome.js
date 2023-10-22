// # Challenge: Palindrome

// A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward or forward. An example of a palindrome is "madam".

// ## Instructions

// Write a function called `isPalindrome` that takes in a string and returns `true` if the string is a palindrome and `false` if it is not.

function isPalindrome(str) {
  const filtered = str.toLowerCase().replace(/[^a-z0-9]/g, '')
  const filteredClone = filtered;
  return filtered.split(' ').reverse().join() === filteredClone
}