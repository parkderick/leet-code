// Given an array of non-negative integers, you are initially positioned at the first index of the array.

// Each element in the array represents your maximum jump length at that position.

// Determine if you are able to reach the last index.

// Runtime: 88 ms
// Memory: 35.6 MB

var canJump = function(nums) {
  if (nums.length === 1) {
    return true;
  }
  var max = 0;
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] >= max) {
      max = nums[i];
    } else {
      i !== 0 && max--;  
    }
    if (max === 0) {
      return false;
    }
  }
  return true;
};

console.log(canJump([2,3,1,1,4]));
console.log(canJump([3,2,1,0,4]))