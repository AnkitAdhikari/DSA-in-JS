// # Challenge: Array Intersection

// ## Instructions

// Write a function called `arrayIntersection` that takes in two arrays and returns an array containing the intersection of the two input arrays (i.e., the common elements that appear in both arrays).

function arrayIntersection(arr1, arr2) {
  const intersectionArr = [];
  for (let el of arr1) {
    if (arr2.includes(el) && !intersectionArr.includes(el)) {
      intersectionArr.push(el);
    }
  }
  return intersectionArr;
}