// Given a sorted array nums, remove the duplicates in-place such that each element appear only once and return the new length.

// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

// Time: 92 ms
// Space: 37.4MB

var removeDuplicates = function(nums) {
    var previous;
    for (var i = 0; i < nums.length; i++) {
      if (nums[i] === previous) {
        nums.splice(i, 1);
        i--;
      } else {
        previous = nums[i];
      }
    }
    return nums;
  };

console.log(removeDuplicates([1, 1, 2]));