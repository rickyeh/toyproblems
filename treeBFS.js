var Tree = function(value){
  this.value = value;
  this.children = [];
  console.log('New Tree created. Value: ' + this.value + ' Depth : ');
};

Tree.prototype.BFSelect = function(filter) {
  var queue = [{ 
    tree: this,
    depth: 0
   }];
  var results = [];
  var currNode;

  while (queue.length > 0) {
    currNode = queue.shift();
    console.log('Current Node is : ' + currNode.tree.value + ' depth: ' +currNode.depth );

    for (var i = 0; i < currNode.tree.children.length; i++) {
      queue.push({
        tree: currNode.tree.children[i],
        depth: currNode.depth + 1
      });
    }

    if (filter(currNode.tree.value, currNode.depth)) {
      results.push(currNode.tree.value);
      console.log(currNode.tree.value + ' pushed to the results');
    }
  }

  console.log(results);
  return results;
};

/**
 * You shouldn't need to change anything below here, but feel free to look.
 */

/**
  * add an immediate child
  * (wrap values in Tree nodes if they're not already)
  */
Tree.prototype.addChild = function(child){
  if (!child || !(child instanceof Tree)){
    child = new Tree(child);
  }

  if(!this.isDescendant(child)){
    this.children.push(child);
  }else {
    throw new Error('That child is already a child of this tree');
  }
  // return the new child node for convenience
  return child;
};

/**
  * check to see if the provided tree is already a child of this
  * tree __or any of its sub trees__
  */
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

/**
  * remove an immediate child
  */
Tree.prototype.removeChild = function(child){
  var index = this.children.indexOf(child);
  if(index !== -1){
    // remove the child
    this.children.splice(index,1);
  }else{
    throw new Error('That node is not an immediate child of this tree');
  }
};

var root1 = new Tree(1);
var branch2 = root1.addChild(2);
var branch3 = root1.addChild(3);
var leaf4 = branch2.addChild(4);
var leaf5 = branch2.addChild(5);
var leaf6 = branch3.addChild(6);
var leaf7 = branch3.addChild(7);

root1.BFSelect(function (value, depth) {
  console.log('Value % 2 : ' + value);
  return value % 2;
}) //=> [1, 3, 5, 7]

root1.BFSelect(function (value, depth) {
  console.log(depth);
  return depth === 1;
}) //=> [2, 3]

