// Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

// Note:

// The solution set must not contain duplicate triplets.

// Example:

// Given array nums = [-1, 0, 1, 2, -1, -4],

// A solution set is:
// [
//   [-1, 0, 1],
//   [-1, -1, 2]
// ]

// var threeSum = function(nums) {
//   var result = [];
//   var combinations = {};
//   for (var i = 0; i < nums.length; i++) {
//     for (var j = i+1; j < nums.length; j++) {
//       for (var k = j+1; k < nums.length; k++) {
//         if (nums[i] + nums[j] + nums[k] === 0) {
//           if (!combinations[[nums[i], nums[j], nums[k]].sort()]) {
//             combinations[[nums[i], nums[j], nums[k]].sort()] = true;
//             result.push([nums[i], nums[j], nums[k]]);
//           }
//         }
//       }
//     }
//   }
//   return result;
// };

// Runtime: 388 ms
// Memory Usage: 57.7 MB

var threeSum = function(nums) {
    var result = [];
    nums.sort(function(a, b){return a - b});
    var combinations = {};
  
    for (var i = 0; i < nums.length; i++) {
      var left = i+1;
      var right = nums.length - 1
      var current = i;
      while (left < right) {
        var sum = nums[left] + nums[right] + nums[current];
        if (sum < 0) {
          left++;
        } else if (sum > 0) {
          right--;
        } else {
          if (!combinations[`${nums[current]}-${nums[left]}-${nums[right]}`]) {
            combinations[`${nums[current]}-${nums[left]}-${nums[right]}`] = true
            result.push([nums[current], nums[left], nums[right]]);
          }
          left++;
          right--;
        }
      }
    }
    return result;
  };

console.log(threeSum([-1,-2,-3,4,1,3,0,3,-2,1,-2,2,-1,1,-5,4,-3]));