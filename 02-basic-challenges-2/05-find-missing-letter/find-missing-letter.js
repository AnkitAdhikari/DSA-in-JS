// # Challenge: Find Missing Letter

// ## Instructions

// Write a function called `findMissingLetter` that takes in an array of consecutive (increasing) letters as input and returns the missing letter in the array.

// ### Constraints

// - The input array will only contain letters in one case (lower or upper)
// - If no letters are in the array, return an empty string

function findMissingLetter(arr) {
  const missingLetter = arr.reduce((acc, cur) => {
    if (acc.charCodeAt() + 1 == cur.charCodeAt()) {
      return cur;
    }
    return String.fromCharCode(acc.charCodeAt() + 1);
  })
  return missingLetter;
}

console.log(findMissingLetter(['a', 'b', 'c', 'e']))