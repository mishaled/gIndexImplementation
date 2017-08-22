"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("mocha");
var chai_1 = require("chai");
var Model_1 = require("../../Model");
var _1 = require("../");
describe('GraphTrie', function () {
    describe('Add', function () {
        it('insert one element in new space - should not fail', function () {
            var trie = new _1.GraphTrie();
            var expectedGraph = new Model_1.Graph();
            var canonicalLabel = ['1', '2'];
            trie.Add(expectedGraph, canonicalLabel);
            var actualGraph = trie.Get(canonicalLabel);
            chai_1.expect(actualGraph).to.be.deep.equal(expectedGraph);
        });
        it('insert one element in occupied space - should fail', function () {
            var trie = new _1.GraphTrie();
            var firstGraph = new Model_1.Graph();
            firstGraph.V.push(new Model_1.Vertice({ Id: '1' }));
            var secondGraph = new Model_1.Graph();
            secondGraph.V.push(new Model_1.Vertice({ Id: '2' }));
            var canonicalLabel = ['1', '2'];
            trie.Add(firstGraph, canonicalLabel);
            var badFunc = function () { trie.Add(secondGraph, canonicalLabel); };
            chai_1.expect(badFunc).to.throw('Canonical label already exists in trie');
        });
    });
    describe('Get', function () {
        it('Try get empty element - should return undefined', function () {
            var trie = new _1.GraphTrie();
            var canonicalLabel = ['1', '2'];
            var actualGraph = trie.Get(canonicalLabel);
            chai_1.expect(actualGraph).to.be.undefined;
        });
        it('Try get elememt with partial canonical label of existing element - should return undefined', function () {
            var trie = new _1.GraphTrie();
            var expectedGraph = new Model_1.Graph();
            var canonicalLabel = ['1', '2'];
            trie.Add(expectedGraph, canonicalLabel);
            var actualGraph = trie.Get([canonicalLabel[0]]);
            chai_1.expect(actualGraph).to.be.undefined;
        });
        it('Try get elememt with which canonical label includes the one of an existing element - should return undefined', function () {
            var trie = new _1.GraphTrie();
            var expectedGraph = new Model_1.Graph();
            var canonicalLabel = ['1', '2'];
            trie.Add(expectedGraph, canonicalLabel);
            var actualGraph = trie.Get(canonicalLabel.push.apply(['f']));
            chai_1.expect(actualGraph).to.be.undefined;
        });
    });
});

//# sourceMappingURL=GraphTrieTests.spec.js.map
