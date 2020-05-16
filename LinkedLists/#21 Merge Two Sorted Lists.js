// Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

// Runtime: 60 ms
// Memory: 35.6 MB

function ListNode(val) {
    this.val = val;
    this.next = null;
}


var mergeTwoLists = function(l1, l2) {
  var result = null;
  var temp;
  while (l1 || l2) {
    if (l1 && l2) {
      if (!result) {
        if (l1.val <= l2.val) {
          result = new ListNode(l1.val);
          temp = result;
          l1 = l1.next;
        } else {
          result = new ListNode(l2.val);
          temp = result;
          l2 = l2.next;
        }
      } else {
        if (l1.val <= l2.val) {
          temp.next = new ListNode(l1.val);
          l1 = l1.next;
        } else {
          temp.next = new ListNode(l2.val);
          l2 = l2.next;
        }
        temp = temp.next;
      }
    } else {
      if (l1) {
        if (!result) {
          result = new ListNode(l1.val);
          temp = result;
          l1 = l1.next;
        } else {
          temp.next = new ListNode(l1.val);
          l1 = l1.next;
          temp = temp.next;
        }
      }
      if (l2) {
        if (!result) {
          result = new ListNode(l2.val);
          temp = result;
          l2 = l2.next;
        } else {
          temp.next = new ListNode(l2.val);
          l2 = l2.next;
          temp = temp.next;
        }
      }
    }
  }
  return result;
};

// Input: 1->2->4, 1->3->4
// Output: 1->1->2->3->4->4

// var node = new ListNode(1);
// var node1 = new ListNode(2);
// var node2 = new ListNode(4);
// node.next = node1;
// node1.next = node2;

// var node3 = new ListNode(1);
// var node4 = new ListNode(3);
// var node5 = new ListNode(4);
// node3.next = node4;
// node4.next = node5;

var node = new ListNode(0);
var node1 = new ListNode(2);
var node2 = new ListNode(4);
node.next = node1;
node1.next = node2;
var node4;

console.log(JSON.stringify(mergeTwoLists(node, node4)))