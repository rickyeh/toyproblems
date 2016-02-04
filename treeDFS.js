var Tree = function(value, depth){
  this.value = value;
  this.children = [];
  if (!depth) {
    this.depth = 0;
  } else {
    this.depth = depth;
  }
  console.log('New Tree : ' + this.value + ' Depth : ' + this.depth);
};

Tree.prototype.DFSelect = function(filter, depth, results) {
      
  if (results === undefined) {
    var results = [];
  }

  if (this.depth === depth) {
    return results;
  }

  if (filter(this.value, this.depth)) {
    results.push(this.value);
  }
  for (var i = 0; i < this.children.length; i++) {
    this.children[i].DFSelect(filter, depth, results);
  }
  console.log(results);
  return results;
};

Tree.prototype.addChild = function(child){
  if (!child || !(child instanceof Tree)){
    child = new Tree(child, this.depth + 1);
  }
  if(!this.isDescendant(child)){
    this.children.push(child);
  }else {
    throw new Error("That child is already a child of this tree");
  }
  // return the new child node for convenience
  return child;
};

Tree.prototype.isDescendant = function(child){
  if(this.children.indexOf(child) !== -1){
    // `child` is an immediate child of this tree
    return true;
  }else{
    for(var i = 0; i < this.children.length; i++){
      if(this.children[i].isDescendant(child)){
        // `child` is descendant of this tree
        return true;
      }
    }
    return false;
  }
};

Tree.prototype.removeChild = function(child){
  var index = this.children.indexOf(child);
  if(index !== -1){
    // remove the child
    this.children.splice(index,1);
  }else{
    throw new Error("That node is not an immediate child of this tree");
  }
};

var root1 = new Tree(1);
var branch2 = root1.addChild(2);
var branch3 = root1.addChild(3);
var leaf4 = branch2.addChild(4);
var leaf5 = branch2.addChild(5);
var leaf6 = branch3.addChild(6);
var leaf7 = branch3.addChild(7);

root1.DFSelect(function (value, depth) {
  return value % 2 === 1;
}) //=> [1, 5, 3, 7]

root1.DFSelect(function (value, depth) {
  return depth === 1;
}) //=> [2, 3]