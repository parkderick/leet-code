// Given a set of candidate numbers (candidates) (without duplicates) and a target number (target), find all unique combinations in candidates where the candidate numbers sums to target.

// The same repeated number may be chosen from candidates unlimited number of times.

// Note:

// All numbers (including target) will be positive integers.
// The solution set must not contain duplicate combinations.
// Input: candidates = [2,3,6,7], target = 7,
// A solution set is:
// [
//   [7],
//   [2,2,3]
// ]
// Example 2:

// Input: candidates = [2,3,5], target = 8,
// A solution set is:
// [
//   [2,2,2,2],
//   [2,3,3],
//   [3,5]
// ]

// Runtime: 88 ms (+28.09%)
// Memory: 37.3 MB (+26.67%)

var combinationSum = function(candidates, target) {
  var result = [];
  var recursion = (candidates, arr, total) => {
    if (total === target) {
      result.push(arr);
      return;
    } else if (total > target) {
      return;
    }
    for (var i = 0; i < candidates.length; i++) {
      if (total + candidates[i] > target || candidates[i] > candidates[0]) {
        if (recursion(candidates.slice(1), arr, total) === undefined) {
          return;
        }
      } else {
        recursion(candidates, arr.concat([candidates[i]]), total + candidates[i]);
      }
    }
  }
  recursion(candidates, [], 0)
  return result;
};

console.log(combinationSum([2,3,5], 8))