// # Challenge: Longest Consecutive Sequence

// ## Instructions

// Write a function called `longestConsecutiveSequence` that takes an array of integers as input and returns the length of the longest consecutive sequence of integers in the array.

// A consecutive sequence is a sequence of consecutive integers, meaning each integer in the sequence is exactly one more than the previous integer.

function longestConsecuitveSequence(nums) {
  const numSet = new Set(nums);
  let longestSequence = 0;
  for (const num of nums) {
    if (!numSet.has(num - 1)) {
      let currentsequence = 1;
      let currentNum = num;
      while (numSet.has(currentNum + 1)) {
        currentNum++;
        currentsequence++
      }
      longestSequence = Math.max(longestSequence, currentsequence);
    }
  }
  return longestSequence;
}