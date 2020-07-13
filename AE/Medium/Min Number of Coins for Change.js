// Given an array of positive integers representing coin denominations and a single non-negative integer representing a target amount of money, write a function that returns the smalles number of coins needed to make change for that target amount using the given coin denominations.

// Time: O(nd)
// Space: O(n)

function minNumberOfCoinsForChange(n, denoms) {
	var newArray = new Array(n+1).fill(Infinity);
	newArray[0] = 0;
	
	for (var i = 0; i < denoms.length; i++) {
		for (var j = 0; j < newArray.length; j++) {
			if (denoms[i] <= j) {
				newArray[j] = Math.min(newArray[j], newArray[j - denoms[i]] + 1);
			}
		}
	}
	return newArray[n] !== Infinity ? newArray[n] : -1;
}