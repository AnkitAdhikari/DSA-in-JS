// function findFirstNonRepeatingCharacter(str) {
//   for (let i = 0; i < str.length; i++) {
//     let count = 0;
//     for (let j = 0; j < str.length; j++) {
//       if (str[i] === str[j]) count++
//     }
//     if (count === 1) {
//       return str[i];
//     }
//   }
//   return null;
// }



// more performant solutin

function findFirstNonRepeatingCharacter(str) {
  const charCount = new Map();

  for (char of str) {
    charCount.set(char, (charCount.get(char) || 0) + 1);
  }


  for (char of str) {
    if (charCount.get(char) === 1) {
      return char;
    }
  }

  return null;

}