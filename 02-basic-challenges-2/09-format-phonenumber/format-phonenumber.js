// # Challenge: Format Phone Number

// ## Instructions

// Write a function called `formatPhoneNumber` that takes in an array of numbers and returns a string representing the phone number formed by concatenating the numbers in the specified format.


// ### Constraints

// - The input array will always have 10 numbers
// - The numbers can be any integer from 0 to 9

function formatPhoneNumber(numarr) {
  const numHead = numarr.slice(0, 3);
  const numBody = numarr.slice(3);
  numHead.unshift('(');
  numHead.push(')');
  numBody.splice(3, 0, '-');
  return [numHead.join(''), numBody.join('')].join(' ');
}
