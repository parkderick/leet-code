// Write a function that takes in three strings and returns a boolean representing whether the third string can be formed by interweaving the first two strings

// Input: {
//     "one": "algoexpert",
//     "three": "your-algodream-expertjob",
//     "two": "your-dream-job"
//   }
// Output: true

// Time: O(nm) string one string two
// Space: O(nm) l longest string

function interweavingStrings(one, two, three) {
	if (one.length + two.length !== three.length) {
		 return false;
	}
	function recurse(i, j, k) {
		if (k === three.length) {
			return true;
		}
		if (i < one.length && one[i] === three[k]) {
			if (recurse(i+1, j, k+1)) {
				return true;
			}
		}
		if (j < two.length && two[j] === three[k]) {
			if (recurse(i, j+1, k+1)) {
				return true;
			}
		}
		return false;
	}
	return recurse(0, 0, 0);
}
