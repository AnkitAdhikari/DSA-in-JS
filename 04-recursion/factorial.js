/*
# Challenge: Factorial Using Recursion

## Description

The factorial of a number/integer is the product of that number and all of the numbers below it. It is denoted as `5!` (factorial of 5).

```text
- 0! = 1
- 1! = 1
- 2! = 2 * 1 = 2
- 3! = 3 * 2 * 1 = 6
- 4! = 4 * 3 * 2  * 1 = 24
- 5! = 5 * 4 * 3 * 2 * 1 = 120
```

The factorial function is commonly used in various mathematical and programming applications. It grows very quickly as `n` increases, which makes it a suitable challenge for exploring recursive functions.

## Instructions

Write a function called `factorial` that takes in a number and returns the factorial of that number.
*/

const factorial = n => n == 0 || n == 1 ? 1 : factorial(n - 1) * n;