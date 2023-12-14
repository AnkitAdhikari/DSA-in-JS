function anagramGrouping(arr) {
  const groupMap = new Map();
  for (let word of arr) {
    const wordKey = word.split('').sort().join('');

    if (groupMap.has(wordKey)) {
      groupMap.set(wordKey, [...groupMap.get(wordKey), word]);
    } else {
      groupMap.set(wordKey, [word]);
    }

  }

  return Array.from(groupMap.values());
}