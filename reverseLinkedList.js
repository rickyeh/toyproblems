/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 
var reverseList = function(head) {
  var currentNode = head;
  var savedPrev = null;

  while (currentNode !== null) {
    var savedNode = currentNode.next;
    currentNode.next = savedPrev;

    savedPrev = currentNode;
    currentNode = savedNode
  }

  head = savedPrev;
  return head;
};