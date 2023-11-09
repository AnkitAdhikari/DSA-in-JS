// # Challenge: Validate Email

// ## Instructions

// Write a function called `validateEmail` that takes in a string and returns whether the string is a valid email address. For the purposes of this challenge, a valid email address is defined as a string that contains an `@` symbol and a `.` symbol.

function validateEmail(email) {
  return email.includes('@') && email.includes(".") && !email.startsWith('@');
}