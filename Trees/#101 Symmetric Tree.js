// Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).

// For example, this binary tree [1,2,2,3,4,4,3] is symmetric:

//     1
//    / \
//   2   2
//  / \ / \
// 3  4 4  3
 

// But the following [1,2,2,null,3,null,3] is not:

//     1
//    / \
//   2   2
//    \   \
//    3    3

// Runtime: 64 ms (+46.51%)
// Memory: 35.7 MB (+70.00%)

var isSymmetric = function(root) {
  var arrR = root && [root.val];
  var arrL = root && [root.val];

  root && recurse(root.left, 'L');
  root && recurse(root.right, 'R');

  function recurse(node, dir) {
    if (dir === 'L') {
      if (node) {
        arrL.push(node.val)
        recurse(node.left, dir);
        recurse(node.right, dir);
      } else {
        arrL.push(null);
      }
    } else {
      if (node) {
        arrR.push(node.val);
        recurse(node.right, dir);
        recurse(node.left, dir);
      } else {
        arrR.push(null)
      }
    }
  }
  return JSON.stringify(arrL) === JSON.stringify(arrR);
}; 

// Runtime: 52 ms (+97.08%)
// Memory: 36.3 MB (+20.00%)

var isSymmetric = function(root) {
  var strL = '';
  var strR = '';

  root && recurse(root.left, 'L');
  root && recurse(root.right, 'R');

  function recurse(node, dir) {
    if (dir === 'L') {
      if (node) {
        strL += node.val
        recurse(node.left, dir);
        recurse(node.right, dir);
      } else {
        strL += null;
      }
    } else {
      if (node) {
        strR += node.val
        recurse(node.right, dir);
        recurse(node.left, dir);
      } else {
        strR += null;
      }
    }
  }
  return strL === strR;
}; 

// Runtime: 60 ms (+71.75%)
// Memory: 36.8 MB (+10.00%)

var isSymmetric = function(root) {
  if (!root) {
    return true;
  }
  var queue = root && [[root, null]];
  var strL = '';
  var strR = '';
  var item;
  while (item = queue.pop()) {
    if (item[1] === 'L') {
      if (item[0]) {
        strL += item[0].val;
      } else {
        strL += 'null';
      }
      item[0] && queue.unshift([item[0].left, item[1]]);
      item[0] && queue.unshift([item[0].right, item[1]]);
    } else if (item[1] === 'R') {
      if (item[0]) {
        strR += item[0].val;
      } else {
        strR += 'null';
      }
      item[0] && queue.unshift([item[0].right, item[1]]);
      item[0] && queue.unshift([item[0].left, item[1]]);
    } else {
      item[0] && queue.unshift([item[0].left, 'L']);
      item[0] && queue.unshift([item[0].right, 'R']);
    }
  }
  return strL === strR;
}

var tree1 = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 3,
      left: null,
      right: null
    },
    right: {
      val: 4,
      left: null,
      right: null
    }
  },
  right: {
    val: 2,
    left: {
      val: 4,
      left: null,
      right: null
    },
    right: {
      val: 3,
      left: null,
      right: null 
    }
  }
}

var tree2 = {
  val: 1,
  left: {
    val: 2,
    left: null,
    right: {
      val: 3,
      left: null,
      right: null
    }
  },
  right: {
    val: 2,
    left: null,
    right: {
      val: 3,
      left: null,
      right: null 
    }
  }
}

console.log(isSymmetric(tree1));
console.log(isSymmetric(tree2));

