// Write a function that takes in the head of a Singly Linked List and an integer k and removes the kth node from the end of the list.Write

// The removal should be done in place, meaning that the original data structure should be mutated.

// The input head of the linked list should remain the head of the linked list after removal is done, even if the head is the node thats supposed to be removd. In other words, if the head is the node that's supposed to be removed, your function should simply mutate its value and next pointer.

class LinkedList {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }


// Time: O(n)
// Space: O(1)

function removeKthNodeFromEnd(head, k) {
    var slow = head;
    var fast = head;
    while (k) {
      fast = fast.next;
      k--;
    }
    var prev;
    while (fast) {
      prev = slow;
      slow = slow.next;
      fast = fast.next;
    }
  
      if (prev === undefined) {
          slow.value = slow.next.value;
          slow.next = slow.next.next;
      } else {
          prev.next = slow.next;
      }
    return head;
  }