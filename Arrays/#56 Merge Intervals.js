// Given a collection of intervals, merge all overlapping intervals.

// Example 1:

// Input: [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
// Example 2:

// Input: [[1,4],[4,5]]
// Output: [[1,5]]
// Explanation: Intervals [1,4] and [4,5] are considered overlapping.

// Runtime: 72 ms (+83.23%)
// Memory: 36.4 MB (+100%)

var merge = function(intervals) {
  var result = [];
  if (!intervals.length) {
    return result;
  }
  if (intervals.length === 1) {
    return intervals;
  }
  intervals.sort((a,b) => (a[0] < b[0] ? -1 : 1));
  var max = intervals[0][1];
  var min = intervals[0][0];
  for (var i = 1; i < intervals.length; i++) {
    if (max < intervals[i][0]) {
      result.push([min, max]);
      min = intervals[i][0]
      max = intervals[i][1]
    }
    max = Math.max(max, intervals[i][1]);
    min = Math.min(min, intervals[i][0]);
    if (i === intervals.length - 1) {
      result.push([min, max])
    }
  }
  return result;
};

// console.log(merge([[1,4],[0,0]]));
// console.log(merge([[1,3],[2,6],[8,10],[15,18]]));
console.log(merge([[2,3],[4,5],[6,7],[8,9],[1,10]]));