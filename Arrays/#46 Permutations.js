// Given a collection of distinct integers, return all possible permutations.

// Runtime: 72 ms
// Memory: 37.7 MB

var permute = function(nums) {
  var result = [];

  var recurse = (nums, arr) => {
    if (nums.length === 0) {
      result.push(arr);
      return;
    }
    for (var i = 0; i < nums.length; i++) {
      var temp = [];
      temp.push(nums[i])
      var copy = nums.slice(0, i).concat(nums.slice(i + 1, nums.length));
      recurse(copy, arr.concat(temp));
    }
  }
  recurse(nums, []);
  return result;
};

console.log(permute([1,2,3]));