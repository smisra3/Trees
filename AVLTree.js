function AVLTree() {
  this.root = null;
}

function Node(value) {
  this.data = value;
  this.lChild = null;
  this.rChild = null;
}

AVLTree.prototype.createAVLTree = function(value) {
  var newNode = new Node(value);
  if(this.root = null) {
    root = newNode;
  }
  
  return root;
};