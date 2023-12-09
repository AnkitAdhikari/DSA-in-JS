function permutations(str) {

  let result = [];

  if (str == '') return [''];

  for (let i = 0; i < str.length; i++) {

    const firstChar = str[i];

    const restOfString = str.slice(0, i) + str.slice(i + 1);

    let subPermutaions = permutations(restOfString);

    for (let j = 0; j < subPermutaions.length; j++) {
      result.push(firstChar + subPermutaions[j]);
    }
  }
  return result;
}