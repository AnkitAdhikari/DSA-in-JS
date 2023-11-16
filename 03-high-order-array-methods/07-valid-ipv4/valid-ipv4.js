// # Challenge: Valid IPv4 Addresses

// ## Instructions

// Write a function called `isValidIPv4` that takes a string as input and returns `true` if the input is a valid IPv4 address in dot-decimal format, and `false` otherwise. An IPv4 address should consist of four octets, with values between 0 and 255, inclusive.
// ### Constraints

// - The input will be a single string.


const isValidIPv4 = (str) => {
  const splittedStr = str.split('.');
  if (splittedStr.length !== 4) return false;
  return splittedStr.every((el) => {
    const num = Number(el);
    return num > 0 && num <= 255 & num.toString() === el
  })
};