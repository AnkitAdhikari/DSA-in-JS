// # Challenge: Remove Duplicates

// ## Instructions

// Write a function called `removeDuplicates` that takes in an array and returns a new array with duplicates removed.

function removeDuplicates(arr) {
  const uniqueArr = [];
  for (let el of arr) {
    if (!uniqueArr.includes(el)) uniqueArr.push(el)
  }
  return uniqueArr;
}