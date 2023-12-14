function wordFrequencyCounter(str) {
  const wordFrequency = new Map();
  if (str == '') return wordFrequency;
  for (word of str.split(/\W+/)) {
    if (word == '') continue;
    const formattedWord = word.toLowerCase();
    if (wordFrequency.has(formattedWord)) {
      wordFrequency.set(formattedWord, wordFrequency.get(formattedWord) + 1)
    } else {
      wordFrequency.set(formattedWord, 1);
    }
  }
  return wordFrequency;
}