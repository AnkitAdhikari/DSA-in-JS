// # Challenge: Hashtag Generator

// ## Instructions

// Write a function called `generateHashtag` that takes a string as input and returns a hashtag-generated string according to the rules below. If the generated hashtag string is longer than 140 characters or the input/result is an empty string, the function should return `false`.
// ### Constraints

// - Return `false` if the input string is empty or contains only whitespace characters.
// - Return `false` if the generated hashtag string is longer than 140 characters.
// - Every word in the hashtag should start with a capital letter.
// - The input string may contain leading/trailing whitespace characters.

function generateHashtag(str) {
  const trimmedStr = str.trim();
  if (trimmedStr.length === 0) return false;
  const formattedStr = trimmedStr.split(/\s+/).map(el => {
    return el[0].toUpperCase() + el.slice(1);
  }).join('')
  const hashtag = '#' + formattedStr;
  return hashtag.length > 140 ? false : hashtag;
}