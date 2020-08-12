// You're given an array of non-negative integers where each non-zero integer represents the height of a pillar of width 1. Imagine water being poured over all of the pillars; write a function that returns the surface area of the water trapped between the pillars viewed from the front. Note that spilled water should be ignored.

// heights = [0, 8, 0, 0, 5, 0, 0, 10, 0, 0, 1, 1, 0, 3]

// output = 48

function waterArea(heights) {
	var surfaceArea = new Array(heights.length).fill(0);
	var leftMax = 0;	
	for (var i = 0; i < heights.length; i++) {
		var height = heights[i];
		surfaceArea[i] = leftMax;
		leftMax = Math.max(height, leftMax);
	}
	var rightMax = 0;
	for (var j = heights.length - 1; j >= 0; j--) {
		var height = heights[j];
		var minHeight = Math.min(rightMax, surfaceArea[j]);
		if (height < minHeight) {
			surfaceArea[j] = minHeight - height;
		} else {
			surfaceArea[j] = 0;
		}
		rightMax = Math.max(rightMax, height)
	}
	return surfaceArea.reduce((a, b) => a + b, 0)
}


