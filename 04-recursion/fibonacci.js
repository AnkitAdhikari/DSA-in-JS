/*
## What is the Fibonacci sequence?

The Fibonacci sequence is a series of numbers where the sequence starts with 0 and 1, and then each number is the sum of the previous two numbers. So the sequence would look like this:

`0, 1, 1, 2, 3, 5, 8, 13, 21, 34...`

`F(n) = F(n-1) + F(n-2)` is the formula for the Fibonacci sequence.

- F(n) is the number in the sequence.
- F(n-1) is the number before it.
- F(n-2) is the number before that.

So if we wanted to find the 5th number in the sequence, we would do this:

`F(5) = F(4) + F(3)`
`F(4) = F(3) + F(2)`
`F(3) = F(2) + F(1)`
`F(2) = F(1) + F(0)`
`F(1) = 1`
`F(0) = 0`

So we can see that `F(2) = 1 + 0 = 1`, `F(3) = 1 + 1 = 2`, `F(4) = 2 + 1 = 3`, and `F(5) = 3 + 2 = 5`. So the 5th number in the sequence is 5.

## Instructions

Write a function called `fibonacci` that takes in a number and returns the number at that index of the Fibonacci sequence.
*/

function fibonacci(num) {
  if (num < 2) return num;
  return fibonacci(num - 1) + fibonacci(num - 2)
}
