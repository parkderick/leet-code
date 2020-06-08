// Given a sorted linked list, delete all duplicates such that each element appear only once.

// Example 1:
// Input: 1->1->2
// Output: 1->2

// Example 2:
// Input: 1->1->2->3->3
// Output: 1->2->3

// Runtime: 84 ms (+24.43%)
// Space: 38.7 MB (+5.06%)

var deleteDuplicates = function(head) {
  var current = head;
  var prev = head;
  while (current) {
    if (prev.val !== current.val) {
      prev.next = current;
      prev = current;
    }
    current = current.next;
    if (current === null) {
      prev.next = current;
    }
  }
  return head;
};