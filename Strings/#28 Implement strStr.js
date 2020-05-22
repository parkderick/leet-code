// Implement strStr().

// Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

// Example 1:

// Input: haystack = "hello", needle = "ll"
// Output: 2
// Example 2:

// Input: haystack = "aaaba", needle = "aab"
// Output: -1

// Runtime: 56 ms (+67.25%)
// Time: 35.8 MB (+25.00%)

var strStr = function(haystack, needle) {
  if (!needle.length) {
    return 0;
  }
  var counter = 0;
  var result = -1;
  for (var i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle[counter]) {
      if (result < 0) {
        result = i;
      }
      counter++;
    } else if (needle[counter] === undefined) {
      break;
    } else if (result >= 0) {
      i = result
      result = -1;
      counter = 0;
    }
  }
  if (counter - needle.length) {
    return -1;
  }
  return result;
};

console.log(strStr("aaaba", "aab"))
console.log(strStr("hello", "ll"))
console.log(strStr("", ""));
console.log(strStr("a", ""));
console.log(strStr("mississippi", "issipi"));
