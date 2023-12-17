// # Challenge: Symmetric Difference Challenge

// ## Instructions

// We'll start with a pretty simple challenge. Write a function called `symmetricDifference` that takes in two arrays and returns an array containing the symmetric difference of the two arrays. The symmetric difference of two arrays is a new array containing only the elements that are present in one of the arrays but not both, with no duplicates.

function symmetricDifference(arr1, arr2) {
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);
  const arr = [];
  for (let el of set1.values()) {
    if (set2.has(el)) continue;
    arr.push(el);
  }
  for (let el of set2.values()) {
    if (set3.has(el)) continue;
    arr.push(el);
  }
  return arr;
}