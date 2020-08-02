// Write a function that takes in an array of strings and groups anagrams together.

// Anagrams are strings made up of exactly the same letters, where order doesn't matter. For example, "cinema" and "iceman" are anagrams.

// w amount of words n length of largest word
// Time: O(w * n * log(n) + w * n * log(w)) for every word sort each word wnlog(n) 
// Space: O(wn) copy will take wn & result will take in w words therefore we have wn + w = wn => wn

function groupAnagrams(words) {
	if (words.length === 0) {
		return [];
	}
	if (words.length === 1) {
	  return [words];
	}
  var result = [];
  for (var i = 0; i < words.length; i++) {
    result.push([words[i].split('').sort().join(''), i])
  }
  result.sort((a,b) => a[0] < b[0] ? -1 : 1);


  var answers = [];
  var arr = [words[result[0][1]]];
  for (var i = 1; i < result.length; i++) {
     if (result[i][0] === result[i-1][0]) {
      arr.push(words[result[i][1]])
    }
    if (result[i][0] !== result[i-1][0]) {
      answers.push(arr)
      arr = [words[result[i][1]]];
    }
    if (i === result.length - 1) {
      answers.push(arr)
    }
  }
  return answers;
}

groupAnagrams(["yo", "act", "flop", "tac", "foo", "cat", "oy", "olfp"])