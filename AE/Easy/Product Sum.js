// Write a function that takes in a "special array" and returns its product sum. A "special array" is a non-empty array that contains either integers or "special arrays". The product sum of a "special array" is the sum of its elements, where "special arrays" inside it are summed themselves and then multipled by their death."

// Input: array = [5, 2, [7, -1], 3, [6, [-13, 8], 5]]
// Output: 12

// Time: O(n) every number in array
// Space: O(d) deepest length of an element

function productSum(array, depth = 2) {
  sum = 0;
  for (var i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      sum += depth * productSum(array[i], depth + 1);
    } else {
      sum += array[i];
    }
  }
  return sum;
}

// var arr = [5, 2, [7, -1], 3, [6, [-13, 8], 4]]
// console.log(productSum(arr))