// Given an array nums of n integers and an integer target, find three integers in nums such that the sum is closest to target. Return the sum of the three integers. You may assume that each input would have exactly one solution.

// Runtime: 392 ms (+7.06%)
// Space: 37.2 MB (+100.00%)
var threeSumClosest = function(nums, target) {

  var closest;
  var isNegative = false;
  var sum;

  for (var i = 0; i < nums.length; i++) {
    for (var j = i+1; j < nums.length; j++) {
      for (var k = j+1; k < nums.length; k++) {
        if (nums[i] + nums[j] + nums[k] - target < 0) {
          isNegative = true;
        }
        var gap =  Math.abs(nums[i] + nums[j] + nums[k] - target);
        if (!closest && closest !== 0) {
          closest = gap;
          sum = nums[i] + nums[j] + nums[k]
        } else {
          if (gap < closest) {
            closest = gap;
            sum = nums[i] + nums[j] + nums[k]
          }
        }
        console.log(gap, sum);
      }
    }
  }
  return sum;
};

// console.log(threeSumClosest([1, 1, 1, 1], 3));
console.log(threeSumClosest([-1,2,1,-4], 1))
// Given array nums = [-1, 2, 1, -4], and target = 1.

// The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).