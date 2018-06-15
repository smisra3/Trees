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
 * @returns True or false telling whether our function executed successfully or not.
 */
Tree.prototype.inorderTraversal = function (node) {
  if (!node)
    return false;
  this.inorderTraversal(node.lChild);
  console.log(node.value);
  this.inorderTraversal(node.rChild);
  return true;
};

/**
 * This method is used to do the postorder traversal of the binary search tree.
 * @param {Object} node Is the node from which we have to start the traversal in postorder. 
 * @returns True or false telling whether our function executed successfully or not.
 */
Tree.prototype.postorderTraversal = function (node) {
  if (!node)
    return false;
  this.postorderTraversal(node.lChild);
  this.postorderTraversal(node.rChild);
  console.log(node.value);
  return true;
};

/**
 * This method is used to do the preorder traversal of the binary search tree.
 * @param {Object} node Is the node from which we have to start the traversal in preorder. 
 * @returns True or false telling whether our function executed successfully or not.
 */
Tree.prototype.preorderTraversal = function (node) {
  if (!node)
    return false;
  console.log(node.value);
  this.preorderTraversal(node.lChild);
  this.preorderTraversal(node.rChild);
  return true;
};

/**
 * This method is used to print the right view of the binary searh tree.
 * @param {Object} node Is the root node from where we want to start the traversal to print the view.
 * @returns True or false whether the function executed successfully or not.
 */
Tree.prototype.rightView = function () {
  var currentNode = this.root;
  console.log(currentNode.value);
  while (currentNode) {
    if (currentNode.rChild) {
      console.log(currentNode.rChild.value);
      currentNode = currentNode.rChild
    } else if (currentNode.lChild) {
      console.log(currentNode.lChild.value);
      currentNode = currentNode.lChild;
    }
  }
};

/**
 * This method is used to perform binary tree search.
 * @param {Object} node Is the node from which we want to start the search.
 * @param {Number} searchValue Is the value which we want to search in the tree.
 * @returns True or false depending upon whether we found the node or not.
 */
Tree.prototype.search = function (searchValue) {
  if (!searchValue)
    return false;
  var currentNode = this.root,
    searchValueFound = 0;
  while (currentNode) {
    if (currentNode.value === searchValue) {
      searchValueFound = 1;
      break;
    } else if (currentNode.value > searchValue) {
      currentNode = currentNode.lChild;
    } else if (currentNode.value < searchValue) {
      currentNode = currentNode.rChild;
    }
  }
  return searchValueFound ? true : false;
};

/**
 * This method is used to find the height of the tree.
 */
Tree.prototype.height = function () {
  var currentNode = this.root,
    leftHeight,
    rightHeight,
    leftSubTree = this.root.lChild,
    rightSubTree = this.root.rChild;
  while (leftSubTree) {
    if(leftSubTree.lChild) {
      leftSubTree = leftSubTree.lChild;
      leftHeight++;
    } else if(leftSubTree.rChild){
      leftSubTree = leftSubTree.rChild;
      leftHeight++;
    }
  }
}

exports.Tree = Tree;