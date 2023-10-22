// # Challenge: Title Case

// ## Instructions

// Write a function called `titleCase` that takes in a string and returns the string with the first letter of each word capitalized.

function titleCase(str) {
  let title = str.toLowerCase()
  title = title.split(" ").map((word) => word[0].toUpperCase() + word.slice(1)).join(' ');
  return title;
}