function reverseLinkedList(node) {
  var first = null;
  var second = node
  while (second.next) {
    var third = second.next;

    second.next = first;
    first = second;
    second = third;
  }
  return first;
}