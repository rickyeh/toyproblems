/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {

    if (root) {
      recurse(root);
    }
    
    function recurse(node) {
      var temp = node.left;

      node.left = node.right;
      node.right = temp;

      if (node.left) {
        recurse(node.left);
      }
      if (node.right) {
        recurse(node.right)
      }  
    }

    return root;

};

