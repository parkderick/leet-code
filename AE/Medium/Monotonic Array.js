// Write a function that takes in an array of integers and returns a boolean representing whether the array is montonic. An array is said to be monotonic if its elements, from left to right, are entirely non-increasing or entirely non-decreasing.

// Input: array=[-1, -5, -10, -1100, -1100, -1101, -1102, -9001]
// Output: true

// Time: O(n);
// Space: O(1);

function isMonotonic(array) {
	var decreasing;
	for (var i = 0; i < array.length - 1; i++) {
		if (decreasing === undefined) {
			if (array[i] < array[i+1]) {
				decreasing = false;
			} else if (array[i] > array[i+1]) {
				decreasing = true;
			}
		} else {
			if (array[i] < array[i+1]) {
				if (decreasing) {
					return false;
				}
			} else if (array[i] > array[i+1]) {
				if (!decreasing) {
					return false;
				}
			}
		}
	}
	return true;
}

function isMonotonic(array) {
	if (array.length < 3) {
		return true;
	}
	
	var direction = array[1] - array[0];
	for (var i = 2; i < array.length; i++) {
		if (direction === 0) {
			direction = array[i] - array[i-1];
			continue;
		}
		if (breaksDirection(direction, array[i-1], array[i])) {
			return false;
		}
	}
	return true;
}

function breaksDirection(direction, previousInt, currentInt) {
	var difference = currentInt - previousInt
	if (direction > 0) {
		return difference < 0;
	}
	return difference > 0;
}
