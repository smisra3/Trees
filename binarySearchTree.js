/**
 * This File creates a binary search tree and add helper functions to perform various operations on it.
 */

 /**
  * This is the constructor for the class Tree.
  */
function Tree() {
  this.root = null;
}

/**
 * This is constructor of class Node for creating new nodes of the tree.
 * @param {Number} val Is the value to be stored in the tree nodes.
 * @return NONE. 
 */
function Node(val) {
  this.value = val;
  this.lChild = null;
  this.rChild = null;
}

/**
 * This method is used to add nodes to the Binary Search Tree.
 * @param {Number} value Is the value passed to this function to add value to a node.
 * @returns The root node of the tree after adding the new node to the tree.
 */
Tree.prototype.addNode = function (value) {
  var node = new Node(value),
    currentNode = this.root;
  if (!this.root) {
    this.root = node;
  } else {
    while (currentNode) {
      if (value < currentNode.value) {
        if (currentNode.lChild == null) {
          currentNode.lChild = node;
          break;
        }
        currentNode = currentNode.lChild;
      } else if (value > currentNode.value) {
        if (currentNode.rChild == null) {
          currentNode.rChild = node;
          break;
        }
        currentNode = currentNode.rChild;
      } else {
        console.log("Node already exists");
      }
    }
  }
  return this.root;
};

/**
 * This method is used to get the root of the tree.
 * @return The root of the tree.
 */
Tree.prototype.getRoot = function () {
  return this.root;
};

/**
 * This method is used to traverse the current tree in inorder.
 * @param {Object} node Is the node from which we have to start the traversal in inorder. 
 * @returns True or false telling whether our fucntion executed successfully or not.
 */
Tree.prototype.inorderTraversal = function (node) {
  if (!node)
    return false;
  this.inorderTraversal(node.lChild);
  console.log(node.value);
  this.inorderTraversal(node.rChild);
  return true;
};

exports.Tree = Tree;