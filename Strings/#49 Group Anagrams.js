// Given an array of strings, group anagrams together.

// Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
// Output:
// [
//   ["ate","eat","tea"],
//   ["nat","tan"],
//   ["bat"]
// ]

// Runtime: 132 ms
// Memory: 45 MB

var groupAnagrams = function(strs) {
  var copy = strs.slice();
  var result = [];
  for (var i = 0; i < copy.length; i++) {
    var temp = copy[i].split('').sort()
    copy[i] = {
      word: temp.join(''),
      index: i
    };
  }
  var previous
  var mini = [];
  copy.sort((a, b) => a.word > b.word ? 1 : -1);

  for (var j = 0; j < copy.length; j++) {
    if (!previous) {
      mini.push(strs[copy[j].index])
    } else if (previous.word === copy[j].word) {
      mini.push(strs[copy[j].index])
    } else {
      result.push(mini);
      mini = [strs[copy[j].index]];
    }
    if (j === copy.length - 1) {
      result.push(mini)
    }
    previous = copy[j];
  }
  return result;
};

Runtime: 124 ms
Memory: 44.8 MB

var groupAnagrams = function(strs) {
  var copy = strs.slice();
  var result = [];
  for (var i = 0; i < copy.length; i++) {
    var temp = copy[i].split('').sort()
    copy[i] = {
      word: temp.join(''),
      index: i
    };
  }
  copy.sort((a, b) => a.word > b.word ? 1 : -1);
  var previous = copy[0]
  var mini = [strs[copy[0].index]];
  for (var j = 1; j < copy.length; j++) {
    if (previous.word === copy[j].word) {
      mini.push(strs[copy[j].index])
    } else {
      result.push(mini);
      mini = [strs[copy[j].index]];
    }
    previous = copy[j];
  }
  result.push(mini)
  return result;
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
console.log(groupAnagrams([""]))
