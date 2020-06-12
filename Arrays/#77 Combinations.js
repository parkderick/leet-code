// Given two integers n and k, return all possible combinations of k numbers out of 1 ... n.

// Runtime: 268ms (+12.97%)
// Memory: 44.7MB (+15.34%)

function combinations(n, k) {
  var result = [];

  function recurse(num, arr) {
    if (arr.length === k) {
      result.push(arr);
      return;
    }
    for (var i = num; i <= n; i++) {
      recurse(i+1, arr.concat([i]))
    }
  }
  recurse(1, []);
  return result;
}



console.log(combinations(4, 2));