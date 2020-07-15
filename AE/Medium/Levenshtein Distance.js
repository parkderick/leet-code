// Write a fucntiion that takes in two strings and returns the minimum number of edit operations that need to be performed on the first string to obtain the second string. 
// There are 3 edit operations: insertion, deletion, and substitution.

function levenshteinDistance(str1, str2) {
  if (str1.length === 0 && str2.length === 0) {
    return 0;
  }

  var matrix = [];
  for (var i = 0; i < str1.length + 1; i++) {
    var arr = new Array();
    arr[0] = i;
    matrix.push(arr);
  }

  for (var j = 0; j < str2.length + 1; j++) {
    matrix[0][j] = j;
  }

  for (var i = 0; i < str1.length; i++) {
    var letter1 = str1[i];
    for (var j = 0; j < str2.length; j++) {
      var letter2 = str2[j];
      if (letter1 === letter2) {
        matrix[i+1][j+1] = matrix[i][j];
      } else {
        matrix[i+1][j+1] = Math.min(matrix[i][j+1], matrix[i][j], matrix[i+1][j]) + 1;
      }
    }
  }
  console.log(matrix)
  return matrix[str1.length][str2.length];
}

// console.log(levenshteinDistance("abc", "yabd"));
levenshteinDistance("abc", "")
