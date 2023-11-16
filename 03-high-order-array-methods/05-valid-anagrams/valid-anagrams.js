function validAnagrams(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  for (let char of str1) {
    if (str2.includes(char)) {
      continue
    } else {
      return false;
    }
  }
  return true;
}