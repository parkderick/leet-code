// Given a 32-bit signed integer, reverse digits of an integer.

// Example 1:

// Input: 123
// Output: 321
// Example 2:

// Input: -123
// Output: -321
// Example 3:

// Input: 120
// Output: 21
// Note:
// Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.



function reverseInteger(int) {
  if (int === 0) {
      return 0;
  }
  while (int % 10 === 0) {
    int = int / 10;
  }
  int = int.toString();
  if (int[0] === '-') {
    int = '-' + int.substring(1, int.length).split('').reverse().join('');
  } else {
    int = int.split('').reverse().join('');
  }
  if (int <= -2147483648 || int >= 2147483648 - 1) {
    return 0;
  }
  return Number(int);
}

function reverseInteger(int) {
  if (int === 0) {
    return 0;
  }
  while (int % 10 === 0) {
    int = int / 10;
  }
  int = int.toString();
  var result = '';
  for (var i = int.length - 1; i >= 0; i--) {
    if (int[i] === '-') {
      result = '-' + result;
    } else {
      result += int[i]
    }
  }
  result = Number(result);
  if (result <= -2147483648 || result >= 2147483648 - 1) {
    return 0;
  }
  return result;
}

// console.log(reverseInteger(-123));
// console.log(reverseInteger(123));
// console.log(reverseInteger(120));