// Given two binary strings, return their sum (also a binary string).

// The input strings are both non-empty and contains only characters 1 or 0.

// Example 1:

// Input: a = "11", b = "1"
// Output: "100"

// 1 + 2 + 1

// Example 2:

// Input: a = "1010", b = "1011"
// Output: "10101"

// 2 + 8 + 1 + 2 + 8 = 21
// 1 + 4 + 16 = 21

var addBinary = function(a, b) {
  var pow = 0;
  var sumA = 0;
  for (var i = a.length - 1; i >= 0; i--) {
    sumA += Number(a[i]) * Math.pow(2, pow);
    pow++;
  }

  pow = 0;
  var sumB = 0;
  for (var j = b.length - 1; j >= 0; j--) {
    sumB += Number(b[j]) * Math.pow(2, pow);
    pow++;
  }
  pow = 0;
  var sum = sumA + sumB;
  var result = '';
  var init = false;
  while (pow >= 0) {
    if (init) {
      console.log(sum, Math.pow(2, pow))
      if (sum - Math.pow(2, pow) >= 0) {
        sum -= Math.pow(2, pow)
        result += '1'
      } else {
        result += '0'
      }
      pow--;
    } else if (sum - Math.pow(2, pow) >= 0) {
      pow++;
    } else {
      init = true;
      pow--;
    }
  }
  return result;
};

// console.log(addBinary("1010", "1011"))
console.log(addBinary("10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101", "110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011"))
// "110111101100010011000101110110100000011101000101011000000000000000000000000000000000000000000000000"
// "110111101100010011000101110110100000011101000101011001000011011000001100011110011010010011000000000"