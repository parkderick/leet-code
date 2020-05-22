// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

// Example:

// Input: [-2,1,-3,4,-1,2,1,-5,4],
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.

// Runtime: 56 ms (+82.79%)
// Memory: 35.2 MB (+79.63%)

var maxSubArray = function(nums) {
  var sum = 0;
  var max = 0;
  for (var i = 0; i < nums.length; i++) {
    if (sum < 0) {
      sum = 0;
    }
    sum += nums[i];
    max = Math.max(sum, max);
  }
  return max;
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));
