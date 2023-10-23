// # Challenge: FizzBuzz Array

// ## Instructions

// FizzBuzz is probably the most common interview question for entry level developers. At least, it used to be. It may not be used as much because of how common it was. It's a simple problem that tests your ability to think logically and write clean code.


// In this challenge, you will write a function called `fizzBuzzArray` that takes in a number and returns an array. The array should contain all the numbers from 1 to the number passed in. However, if the number is divisible by 3, you should replace the number with "Fizz". If the number is divisible by 5, you should replace the number with "Buzz". If the number is divisible by both 3 and 5, you should replace the number with "FizzBuzz".

function fizzBuzzArray(limit) {
  const resultArr = [];
  for (let i = 1; i <= limit; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      resultArr.push("FizzBuzz");
    } else if (i % 3 === 0) {
      resultArr.push("Fizz");
    } else if (i % 5 === 0) {
      resultArr.push("Buzz");
    } else {
      resultArr.push(i);
    }
  }
  return resultArr;
}