function Trie() {
  this.children = {};
  this.isEndOfWord = false;
}

Trie.prototype.addWord = function(word) {
  var letter = word.charAt(0);
  var remaining = word.substring(1);
};

var trie = new Trie();

trie.addWord('Hello').addWord('World');