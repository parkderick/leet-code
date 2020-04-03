// Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.

// Runtime: 212 ms
// Memory Usage: 46 MB

var isPalindrome = function(x) {
  x = x.toString();
  if (x.split('').reverse().join('') === x) {
    return true;
  } else {
    return false;
  }
};

// Runtime: 172 ms
// Memory Usage: 45.7 MB

var isPalindrome = function(x) {
  x = x.toString();
  for (var i = 0; i < x.length; i++) {
    if (x[i] !== x[x.length-i-1]) {
      return false;
    }
  }
  return true;
};

// Runtime: 192 ms
// Memory Usage: 45.5 MB

var isPalindrome = function(x) {
  for (var i = 0; i < x.toString().length; i++) {
    if (x.toString()[i] !== x.toString()[x.toString().length-i-1]) {
      return false;
    }
  }
  return true;
};
console.log(isPalindrome(121))
console.log(isPalindrome(-121))
console.log(isPalindrome(10))