// Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.

// Your algorithm's runtime complexity must be in the order of O(log n).

// If the target is not found in the array, return [-1, -1].

// Runtime: 56 ms
// Memory: 35.4 MB

var searchRange = function(nums, target) {
  var result = [];
  var mid = Math.floor(nums.length / 2);
  var low = 0;
  var high = nums.length - 1;
  var point1;
  var point2;

  while (low <= high) {
    mid = Math.floor((low + high) / 2);
    if (target === nums[mid]) {
      point1 = mid;
      point2 = mid;
      while (target === nums[point1-1] || target === nums[point2+1]) {
        target === nums[point1-1] && (point1 = point1-1)
        target === nums[point2+1] && (point2 = point2+1)
      }
      result[0] = point1;
      result[1] = point2;
      return result;
    } else if (target > nums[mid]) {
      low = mid + 1;
    } else if (target < nums[mid]) {
      high = mid - 1;
    }
  }
  return [0, 0]
};

console.log(searchRange([5,7,7,8,8,10], 8))
console.log(searchRange([5,7,7,8,8,10], 6))