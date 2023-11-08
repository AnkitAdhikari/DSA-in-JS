// # Challenge: Are all characters unique?

// ## Instructions

// Write a function called `areAllCharactersUnique` that takes in a string and returns `true` or `false` depending on whether all characters in the string are unique (i.e., no character is repeated).

// ### Constraints

// - It should be case sensitive, so `a` and `A` are considered different characters
// - An empty string should return `true` by default

function areAllCharactersUnique(str) {
  const initialLength = str.length;
  const set = new Set(str);
  const uniqueLength = set.size;

  return initialLength == uniqueLength;
}