// Write a function that takes in a string made up of brackets (, [, {, ), ], } and other optional characters. The function should return a boolean representing whether the string is balanced with regards to brackets.

// Time: O(n)
// Space: O(n)

function balancedBrackets(string) {
    var stack = [];
    var bar = {
      '[' : ']',
      '(' : ')',
      '{' : '}'
    }
    for (var i = 0; i < string.length; i++) {
      if (string[i] === ']' || string[i] === ')' || string[i] === '}') {
        var popped = stack.pop();
        if (bar[popped] !== string[i]) {
          return false;
        }
      } else if (string[i] === '[' || string[i] ==='(' || string[i] === '{'){
        stack.push(string[i])
      }
    }
    if (stack.length) {
      return false;
    } else {
      return true;
    }
  }