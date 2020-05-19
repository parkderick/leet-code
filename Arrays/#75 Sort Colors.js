// Given an array with n objects colored red, white or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white and blue.

// Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.

// Note: You are not suppose to use the library's sort function for this problem.

// Example:

// Input: [2,0,2,1,1,0]
// Output: [0,0,1,1,2,2]
// Follow up:

// A rather straight forward solution is a two-pass algorithm using counting sort.
// First, iterate the array counting number of 0's, 1's, and 2's, then overwrite array with total number of 0's, then 1's and followed by 2's.
// Could you come up with a one-pass algorithm using only constant space?

// Runtime: 60 ms (+30.61%)
// Memory: 33.9 MB (+21.43%)

var sortColors = function(nums) {
  var red = 0;
  var white = 0;
  var blue = 0;
  var counter = 0;
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      red++;
    } else if (nums[i] === 1) {
      white++;
    } else if (nums[i] === 2) {
      blue++;
    }
  }
  while (red || blue || white) {
    if (red) {
      nums[counter] = 0;
      red--;
    } else if (white) {
      nums[counter] = 1;
      white--;
    } else if (blue) {
      nums[counter] = 2;
      blue--;
    }
    counter++;
  }
  return nums;
};

var sortColors = function(nums) {
  var low = 0;
  var mid = Math.floor(nums.length / 2);
  var high = nums.length - 1;

  var counter = 0;
  while (mid < high && counter < nums.length) {
    console.log(nums, low, mid, high)
    if (nums[counter] === 0) {
      temp = nums[low];
      nums[low] = 0;
      nums[counter] = temp;
      low++;
    } else if (nums[counter] === 1) {
      temp = nums[mid];
      nums[mid] = 1;
      nums[counter] = temp;
      counter--;
    } else if (nums[counter] === 2) {
      temp = nums[high];
      nums[high] = 2;
      nums[counter] = temp;
      high--;
    }
    counter++;
    var temp = mid;
    mid = Math.floor((low + high) / 2);
    if (temp === mid) {
      mid = mid+1;
    }
  }
  return nums;
};

// console.log(sortColors([2,0,2,1,1,0]));
console.log(sortColors([0,2,1]));