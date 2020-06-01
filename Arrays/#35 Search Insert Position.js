// Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You may assume no duplicates in the array.

// Example 1:

// Input: [1,3,5,6], 5
// Output: 2
// Example 2:

// Input: [1,3,5,6], 2
// Output: 1

// Runtime: Runtime: 60 ms (+40.57%)
// Memory Usage: 35.7 MB (+25.00%)

function searchInsert(array, target) {
    var prev = -Infinity
    for (var i = 0; i < array.length; i++) {
      if (target === array[i] || target < array[i] && target > prev) {
        return i;
      }
    }
    return array.length
  }

console.log(searchInsert([1,3,5,6], 5))
console.log(searchInsert([1,3,5,6], 2))