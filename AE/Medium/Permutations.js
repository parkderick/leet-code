// Write a function that takes in an array of unique integers and returns all the permutations of those integers in no particular order.

// If the input array is empty it should return an empty array
// UpperBound
// Time: O(n^2 * n!)
// Space: O(n * n!)

// LowerBound
// Time: O(n * n!)
// Space: O(n * n!)

function getPermutations(array) {
	if (!array.length) {
	  return [];
	}
  var result = [];

  var recurse = function(res, arr) {
    if (arr.length === 0) {
      result.push(res);
      return;
    }
    for (var i = 0; i < arr.length; i++) {
      recurse(res.concat([arr[i]]), arr.slice(0, i).concat(arr.slice(i+1)));
    }
  }
  recurse([], array);
  return result;
}

console.log(getPermutations([1,2,3]))