var hasCycle = function(node){

  // Traverse through with a slower crawler and a faster one
  // If at any time they are equal, then list is cyclical

  var singleTraverse = node;
  var doubleTraverse = node;

  if (node.next && node.next.next) {
    doubleTraverse = doubleTraverse.next.next;
  }

  while (doubleTraverse.next && doubleTraverse.next.next) {
    if (singleTraverse === doubleTraverse) {
      return true;
    }
    doubleTraverse = doubleTraverse.next.next;
    singleTraverse = singleTraverse.next;
  }
  return false;
};

function Node (val) {
    // TODO
    var obj = {};
    obj.value = val || null;
    obj.next = null;
    return obj;
}

// aka, start -> tail0 -> tail1 -> ... -> tail8 -> null
var startNode = Node('start');
var currentNode = startNode;
for(var i = 0; i < 9; i++){
  currentNode.next = Node('tail' + i);
  currentNode = currentNode.next;
}
console.log(hasCycle(startNode));

// aka, start -> tail0 -> tail1 -> ... -> tail8 -> start
// var startNode = Node('start');
// var currentNode = startNode;
// for(var i = 0; i < 9; i++){
//   currentNode.next = Node('tail' + i);
//   currentNode = currentNode.next;
// }
// // have the tail of the linked list point to the start
// currentNode.next = startNode;
// console.log(hasCycle(startNode));
