// # Challenge: Valid Anagrams

// ## Instructions

// Write a function called `validAnagrams` that takes in two strings and determines whether they are valid anagrams of each other. An anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

function validAnagrams(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  for (let char of str1) {
    if (str2.includes(char)) {
      continue
    } else {
      return false;
    }
  }
  return true;
}