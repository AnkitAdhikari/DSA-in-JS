// # Challenge: Two Sum

// ## Instructions

// Write a function called `twoSum` that takes an array of integers and a target integer as input and returns an array of indices of the two numbers that add up to the target.

function twoSum(nums, target) {
  const numSet = new Set();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (newSet.has(complement)) {
      return [nums.indexOf(complement), nums[i]];
    }
    numSet.add(complement);
  }
  return [];
}