function numberRange(startNum, endNum) {
  if (startNum === endNum) return [startNum];
  const arr = numberRange(startNum + 1, endNum);
  arr.unshift(startNum);
  return arr;
}