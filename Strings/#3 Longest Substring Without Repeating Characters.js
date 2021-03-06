// Given a string, find the length of the longest substring without repeating characters.

// Example 1:

// Input: "abcabcbb"
// Output: 3 
// Explanation: The answer is "abc", with the length of 3. 
// Example 2:

// Input: "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3. 
//              Note that the answer must be a substring, "pwke" is a subsequence and not a substring.


// Time: O(n^2)
// Space: O(n)
var lengthOfLongestSubstring = function(s) {
  if (s.length === 1) {
      return 1;
    }
  var letters = {};
  var counter = 1;
  var longest = 0;
  for (var i = 0; i < s.length; i++) {
    for (var j = i+1; j < s.length; j++) {
      if (letters[s[j]]) {
        letters = {};
        counter = 1;
        break;
      } else {
        letters[s[i]] = true;
        letters[s[j]] = true;
        s[i] !== s[j] ? counter++ : null;
        if (counter > longest) {
          longest = counter;
        }
      }
    }
  }
  return longest;
};

// Time: O(n)
// Space: O(n)
var lengthOfLongestSubstring = function(s) {
  var set = new Set();
  var start = 0;
  var end = 0;
  var counter = 0;
  var result = 0;
  var n = s.length;
  while (start < n && end < n) {
    if (!set.has(s[end])) {
      set.add(s[end]);
      end++;
      counter++;
      result = Math.max(result, counter);
    } else {
      set.delete(s[start]);
      start++;
      counter--;
      result = Math.max(result, counter);
    }
  }
  return result;
};

/* TEST */
console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));
console.log(lengthOfLongestSubstring("dvdf"));
