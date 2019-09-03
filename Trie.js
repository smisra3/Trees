function Trie() {
  this.children = {};
  this.isEndOfWord = false;
}

Trie.prototype.addWord = function(word) {
  if (!this.root) return false;
  var letter = word.charAt(0);
  var remaining = word.substring(1);
  var child = this.root.children[letter];
  if (child) {
    
  }
};

var trie = new Trie();

trie.addWord('Hello').addWord('World');