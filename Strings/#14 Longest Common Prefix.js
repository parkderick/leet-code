// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Runtime: 56 ms
// Memory Usage: 35.4 MB
function longestCommonPrefix(words) {
  var prefix = '';
  var letters = {};
  var shortest = Infinity
  for (var k = 0; k < words.length; k++) {
    if (words[k].length < shortest) {
      shortest = words[k].length;
    }
  }
  var j = 0;
  var prefix = '';
  var temp;
  while (j < shortest) {
    var i = 0;
    while (i < words.length) {
      letters[words[i][j]] = words[i][j];
      temp = words[i][j]
      i++;
    }
    if (Object.keys(letters).length === 1) {
      prefix += temp;
    } else {
      return prefix;
    }
    letters = {};
    j++;
  }
  return prefix;
}

// Runtime: 52 ms
// Memory Usage: 35.3 MB
function longestCommonPrefix(words) {
  var prefix = '';
  var letters = {};
  var shortest = Infinity
  for (var k = 0; k < words.length; k++) {
    if (words[k].length < shortest) {
      shortest = words[k].length;
    }
  }
  var j = 0;
  var prefix = '';
  var temp;
  while (j < shortest) {
    var i = 0;
    while (i < words.length) {
      if (i === 0) {
        temp = words[i][j]
      }
      if (words[i][j] !== temp || words[i][j].length === 0) {
        return prefix;
      }
      i++
    }
    prefix += words[i-1][j]
    j++;
  }
  return prefix;
}

var prefix = ["flower", "flow", "flight"];
var prefix = ["dog","racecar","car"];
console.log(longestCommonPrefix(prefix));