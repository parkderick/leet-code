// Write a function that takes in an array of unique integers and returns its powerset.

// Time: O(n * 2^n)
// Space: O(n * 2^n)

function powerset(array) {
	var permutations = [];
	function recurse(array, current) {
		permutations.push(current);
		for (var i = 0; i < array.length; i++) {
			var newCurrent = current.concat(array[i]);
			var newArray = array.slice(i+1)
			recurse(newArray, newCurrent);
		}
	}
	recurse(array, [])
	return permutations
}
