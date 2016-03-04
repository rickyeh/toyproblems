var treeMaker = function(value) {
  var newTree = Object.create(treeMaker.methods);
  
  newTree.value = value;
  newTree.children = [];
  return newTree;
};

treeMaker.methods = {};
treeMaker.methods.addChild = function(value) {
  var node = treeMaker(value);
  this.children.push(node);
};

treeMaker.methods.contains = function(value) {
  var targetFound = false;

  if (this.value === value) {
    return true;
  }
  if (this.children.length) {
    for (var i = 0; i < this.children.length; i++) {
      targetFound = this.children[i].contains(value) || targetFound;
    }
  }
  return targetFound;
}



var newTree = treeMaker(5);
newTree.addChild(5);

console.log(newTree.contains(5));