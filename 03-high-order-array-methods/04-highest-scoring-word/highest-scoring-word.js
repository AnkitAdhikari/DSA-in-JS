// # Challenge: Highest Scoring Word

// ## Instructions

// Given a string of words, you need to find the highest scoring word. Each letter of a word scores points according to its position in the alphabet: `a` = 1, `b` = 2, `c` = 3, and so on.

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.
// ### Constraints

// - The input string will only contain lowercase letters and spaces. It can not include numbers, special characters, or punctuation.

function higestScoringWord(str) {
  return str.split(' ').reduce((max, cur) => {

    const maxWeight = max.split('').reduce((acc, cur) => {
      return acc + cur.charCodeAt() - 96;
    }, 0)

    console.log(maxWeight, max)

    const curWeight = cur.split('').reduce((acc, cur) => {
      return acc + cur.charCodeAt() - 96;
    }, 0)
    console.log(curWeight, cur)
    if (maxWeight > curWeight) return max;
    return cur;
  })
}