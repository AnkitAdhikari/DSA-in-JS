// # Challenge: Password Validation

// ## Instructions

// Write a function called `validatePassword` that takes in a string and validates it based on the following criteria:

// 1. The password must be at least 8 characters long.
// 2. The password must contain at least one uppercase letter.
// 3. The password must contain at least one lowercase letter.
// 4. The password must contain at least one digit.

// The function should return `true` if the password is valid according to the criteria, and `false` otherwise.


function validatePassword(str) {
  if (str.length < 8) return false;
  const hasUpperCase = str.split('').some((char) => char.toUpperCase() === char && char !== char.toLowerCase());
  const hasLowerCase = str.split('').some((char) => char.toLowerCase() === char && char !== char.toUpperCase());
  const hasDigit = str.split('').some((char) => !isNaN(parseInt(char, 10)));
  return hasLowerCase && hasDigit && hasUpperCase;
}

module.exports = validatePassword;
