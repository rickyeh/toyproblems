function BinaryTreeNode(value) {
  this.value = value;
  this.left  = null;
  this.right = null;
}

BinaryTreeNode.prototype.insertLeft = function(value) {
  this.left = new BinaryTreeNode(value);
  return this.left;
};

BinaryTreeNode.prototype.insertRight = function(value) {
  this.right = new BinaryTreeNode(value);
  return this.right;
};

BinaryTreeNode.prototype.checkBalanced = function() {

  function traverse(node, min, max) {

    if (!node) {
      return true;
    }

    if (node.value > max) {
      return false;
    } else if (node.value < min) {
      return false;
    }

    return traverse(node.left, min, node.value) && traverse(node.right, node.value, max);
  }

  return traverse(this, -Infinity, Infinity);

}