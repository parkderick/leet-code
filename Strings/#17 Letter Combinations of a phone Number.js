// Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent.

// A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

// Time: 56 ms
// Space: 33.8 MB

var letterCombinations = function(digits) {
  var phone = {
    1: null,
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz'
  }
  var result = [];

  function recursion(digits, string) {
    if (digits.length === 0) {
      if (string.length === 0) {
        return;
      } else {
        result.push(string);
        return;
      }
    }
    for (var i = 0; i < phone[digits[0]].length; i++) {
      recursion(digits.substring(1), string + phone[digits[0]][i]);
    }
  }
  recursion(digits, '');
  return result;
};

console.log(letterCombinations("23"));
// Input: "23"
// Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].