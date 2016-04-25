var Stack = function() {
  this.storage = [];
  this.maxStack = [];
}

Stack.prototype.push = function(val) {
  this.storage.push(val);

  if (this.getMax() <= val) {
    this.maxStack.push(val);
  }
}

Stack.prototype.pop = function() {
  var popValue = this.storage.pop();
  
  if (popValue === this.getMax()) {
    this.maxStack.pop();
  }

  return popValue;
}

Stack.prototype.getMax = function() {
  console.log(this.storage);
  console.log(this.maxStack);
  console.log();
  if (this.maxStack.length === 0) {
    return -Infinity;
  }

  return this.maxStack[this.maxStack.length - 1];
}

var myStack = new Stack();
myStack.push(-10);
myStack.push(1);
myStack.push(-5);
myStack.push(0);
myStack.push(100);
myStack.pop();
myStack.pop();
console.log(myStack.getMax());
