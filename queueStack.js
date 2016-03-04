var Stack = function() {
  var storage = [];

  this.push = function(val){
    storage[storage.length] = val;
  };

  this.pop = function(){
    if (storage.length === 0 ) {
      return undefined;
    }

    var retVal = storage[storage.length - 1];
    storage.splice(storage.length - 1, 1);

    return retVal;
  };

  this.size = function(){
    return storage.length;
  };

  this.printStorage = function() {
    console.log(storage);
  }
};

var Queue = function() {

  var inbox = new Stack();
  var outbox = new Stack();

  this.enqueue = function(val){
    inbox.push(val);
    inbox.printStorage();
  };

  this.dequeue = function(){
    console.log('Dequeue Called');
    console.log('outbox size', outbox.size);
    if (outbox.size() === 0) {
      console.log('Outbox size is 0');
      if (inbox.size() === 0) {
        return undefined;
      }
      console.log('Outbox is empty, popping all from inbox onto outbox');
      while(inbox.size() !== 0) {
      console.log('inbox');
      inbox.printStorage();
      console.log('outbox');
      outbox.printStorage();

        outbox.push(inbox.pop());

      }
    }
    return outbox.pop();
  };

  this.size = function(){
    return inbox.size() + outbox.size();
  };
};

// var newStack = new Stack();
// newStack.push(1);
// newStack.push(2);
// newStack.push(3);
// newStack.push(4);
// newStack.pop()
// newStack.size();

// var newQueue = new Queue();
// newQueue.enqueue('a');
// newQueue.enqueue('b');
// newQueue.size();