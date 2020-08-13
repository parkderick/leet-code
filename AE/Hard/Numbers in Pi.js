// Given a string representation of the first n digits of Pi and a list of positive integers (all in string format), write a function that returns the smallest number of spaces that can be added to the n digits of Pi such that all resulting numbers are found in the list of integers.

// For ex, if Pi is "3141" and the numbers are ["1", "3", "4"], the number "1" is allowed to appear twice in the list of resulting numbers after three spaces are added: "3 | 1 | 4 | 1".

// If no numbers of spaces to be added exists such that all resulting numbers are found in the list of integers, the function should return -1.


function numbersInPi(pi, numbers) {
	var obj = {};
	
	for (var i = 0; i < numbers.length; i++) {
		var result = [];
		var substring = pi;
		var rotation = 0;
		
		while (substring.indexOf(numbers[i]) >= 0) {
			var start = substring.indexOf(numbers[i]);
			var end = substring.indexOf(numbers[i]) + numbers[i].length;
			if (rotation) {
				result.push([start+rotation, end+rotation])
			} else {
				result.push([start, end])
			}
			rotation = rotation === 0 ? numbers[i].length : rotation + numbers[i].length;
		  substring = substring.substring(0, start) + substring.substring(end);
		}
		obj[i] = result;
	}
	
	var ans = Infinity;
	
	function recurse(begin, end, counter, me) {
		if (end === pi.length) {
			ans = Math.min(ans, counter);
		}

		for (var key in obj) {
			for (var i = 0; i < obj[key].length; i++) {
		    if (obj[key][i][0] === end) {
					recurse(obj[key][i][0], obj[key][i][1], counter + 1, key)
			  }
		  }
		}
	}
	recurse(0, 0, -1);
	
	if (ans !== Infinity) {
		return ans;
	} else {
		return -1
	}
}