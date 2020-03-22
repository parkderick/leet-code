const {LinkedList} = require('../Data-Structures/LinkedList');

// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Example:
// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8
// Explanation: 342 + 465 = 807.

function ListNode(val) {
  this.val = val;
  this.next = null;
}
  
var addTwoNumbers = function(l1, l2) {
  var num1 = [];
  var num2 = [];
  var size1 = 0;
  var size2 = 0;
  while (l1 || l2) {
    if (l1) {
      num1.unshift(l1.val)
      l1 = l1.next;
      size1++;
    } else {
      num1.unshift(0)
    }
    if (l2) {
      num2.unshift(l2.val);
      l2 = l2.next;
      size2++;
    } else {
      num2.unshift(0)
    }
  }
  sum = (Number(num1.join('')) + Number(num2.join(''))).toString();
  var result = null;
  for (var i = 0; i < sum.length; i++) {
    var current = new ListNode(Number(sum[i]));
    current.next = result;
    result = current;
  }
  return result;
};

/* TEST */

var test1 = new LinkedList();
test1.addToTail(9);
test1.addToTail(8);

var test2 = new LinkedList();
test2.addToTail(1);

var test1 = new LinkedList();
test1.addToTail(0);

var test2 = new LinkedList();
test2.addToTail(7);
test2.addToTail(3);

var test1 = new LinkedList();
test1.addToTail(1);
test1.addToTail(0);
test1.addToTail(0);
test1.addToTail(0);
test1.addToTail(0);
test1.addToTail(0);
test1.addToTail(0);
test1.addToTail(1);

var test2 = new LinkedList();
test2.addToTail(5);
test2.addToTail(6);
test2.addToTail(4);

addTwoNumbers(test1.head, test2.head);