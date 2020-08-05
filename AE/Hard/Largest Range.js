Write a function that takes in an array of integers and returns an array of lengeth 2 representing the largest range of integers contained in that array. First number should be the first number in the range, while the second number should be the last number in the range.


// Time: O(n)
// Space: O(n)

function largestRange(array) {
	if (array.length === 1) {
		return [array[0], array[0]]
	}
	var obj = {};
	var min = Infinity
	for (var i = 0; i < array.length; i++) {
		min = Math.min(min, array[i]);
		obj[array[i]] = true;
	}
	
	var result = [];
	var startRange = min;
	var endRange;
	var counter = 0;
	
	var toggle = false;
	var currentLength = 0;
	var maxLength = 0
	
	for (var i = 0; i < array.length; i++) {
		if (!obj[array[i]]) {
			continue;
		}
		obj[array[i]] = false;
		currentLength = 1;
		var left = array[i]-1;
		while (left in obj) {
			obj[left] = false;
			currentLength++;
			left--;
		}
		
		var right = array[i]+1;
		while (right in obj) {
			obj[right] = false;
			currentLength++;
			right++;
		}
		
		if (currentLength > maxLength) {
			maxLength = currentLength;
			result = [left + 1, right - 1]
		}
	}
	return result;
}
