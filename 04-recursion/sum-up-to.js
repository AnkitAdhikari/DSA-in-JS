function sumUpTo(n) {
  if (n === 1) { return 1 };
  return sumUpTo(n - 1) + n;
}

console.log(sumUpTo(6));