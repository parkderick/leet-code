// Write a function that takes in an array of at least two integers and returns an array of the starting and ending indices of the smallest subarray in the input array that needs to be sorted in place in order for the entire input array to be sorted (in ascending order).
// If the input array is already sorted, the function should return [-1, -1].

// Time: O(n^2)
// Space: O(1)

function subarraySort(array) {
  var startIndex = Infinity;
  var endIndex = -1;

  for (var i = 1; i < array.length; i++) {
    for (var j = i-1; j >= 0; j--) {
      if (array[j] > array[i]) {
        startIndex = Math.min(startIndex, j);
        endIndex = i;
      }
    }
  }
  if (startIndex === Infinity) {
    startIndex = -1;
  }
  return [startIndex, endIndex]
}


// Time: O(n)
// Space: O(1)

function subarraySort(array) {
	var minOutofOrder = Infinity;
	var maxOutofOrder = -Infinity;
	for (var i = 0; i < array.length; i++) {
		var num = array[i];
		if (isOutofOrder(i, num, array)) {
			minOutofOrder = Math.min(num, minOutofOrder);
			maxOutofOrder = Math.max(num, maxOutofOrder);
		}
	}
	if (minOutofOrder === Infinity) {
		return [-1, -1];
	}
	var left = 0;
	while (array[left] <= minOutofOrder) {
		left++;
	}
	var right = array.length - 1;
	while (array[right] >= maxOutofOrder) {
		right--;
	}
	return [left, right]
}

function isOutofOrder(i, num, array) {
	if (i===0) {
		return num > array[i+1];
	}
	if (i === array.length - 1) {
		return num < array[i-1];
	}
	return num > array[i+1] || num < array[i-1]
}

subarraySort([1,2,4,7,10,11,7,12,6,7,16,18,19])