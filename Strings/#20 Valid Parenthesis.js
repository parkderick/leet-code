// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Note that an empty string is also considered valid.

const Stack = require('../Data-Structures/Stack');

// Runtime: 56 ms
// Memory Usage: 34.9MB

var isValid = function(s) {
  var stack = new Stack();
  var left = 0;
  var temp;
  while (left < s.length) {
    if (stack.peek() === s[left]) {
      stack.pop();
    } else {
      s[left] === '(' && (temp = ')');
      s[left] === '[' && (temp = ']');
      s[left] === '{' && (temp = '}'); 
      stack.push(temp);
    }
    left++;
  }
  return stack.size() !== 0 ? false : true;
};

console.log(isValid('()'));
console.log(isValid('()[]{}'));
console.log(isValid('(]'));
console.log(isValid('([)]'));
console.log(isValid('{[]}'));