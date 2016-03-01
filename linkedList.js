var Node = function(value) {
  this.value = value;
  this.next = undefined;
};

var LinkedList = function(initialValue) {
  var firstNode = new Node(initialValue);

  this.head = firstNode;
  this.tail = firstNode;
};


LinkedList.prototype.addToTail = function(val) {
  var newNode = new Node(val);
  
  if (this.head.value === undefined) {
    this.head = newNode;
  }

  this.tail.next = newNode;
  this.tail = newNode;
};

LinkedList.prototype.removeHead = function() {
  var savedHead = this.head;
  this.head = this.head.next;

  if (this.head === undefined) {
    this.tail = undefined;
  }

  return savedHead.value;
};

LinkedList.prototype.contains = function(target) {
  var currNode = this.head;

  while (currNode !== undefined) {
    if (currNode.value === target) {
      return true;
    } else {
      currNode = currNode.next;
    }
  }
  return false;
};
