"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Trie = require("array-trie");
var GraphTrie = (function () {
    function GraphTrie() {
        this.trie = new Trie();
    }
    GraphTrie.prototype.Add = function (graph, canonicalLabel) {
        if (this.trie.get(canonicalLabel)) {
            throw Error('Canonical label already exists in trie');
        }
        this.trie.set(canonicalLabel, graph);
    };
    GraphTrie.prototype.Get = function (canonicalLabel) {
        return this.trie.get(canonicalLabel);
    };
    return GraphTrie;
}());
exports.GraphTrie = GraphTrie;

//# sourceMappingURL=GraphTrie.js.map
