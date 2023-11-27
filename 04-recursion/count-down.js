// # Recursion intro, intro to call stack
function countDown(num) {
  if (num <= 0) {
    return
  }
  console.log(num);
  countDown(num - 1);
}