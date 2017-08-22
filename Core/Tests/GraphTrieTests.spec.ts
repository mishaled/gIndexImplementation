import 'mocha';
import * as lodash from 'lodash';
import { expect } from 'chai';
import { Vertice, Edge, Graph } from '../../Model';
import { GraphTrie } from '../'

describe('GraphTrie', () => {
    describe('Add', () => {
        it('insert one element in new space - should not fail', () => {
            let trie = new GraphTrie();

            let expectedGraph = new Graph();
            let canonicalLabel = ['1', '2'];

            trie.Add(expectedGraph, canonicalLabel);

            let actualGraph = trie.Get(canonicalLabel);

            expect(actualGraph).to.be.deep.equal(expectedGraph);

        });

        it('insert one element in occupied space - should fail', () => {
            let trie = new GraphTrie();

            let firstGraph = new Graph();
            firstGraph.V.push(new Vertice({ Id: '1' }));
            let secondGraph = new Graph();
            secondGraph.V.push(new Vertice({ Id: '2' }));
            let canonicalLabel = ['1', '2'];

            trie.Add(firstGraph, canonicalLabel);

            let badFunc = function () { trie.Add(secondGraph, canonicalLabel); };

            expect(badFunc).to.throw('Canonical label already exists in trie');
        });
    });

    describe('Get', () => {
        it('Try get empty element - should return undefined', () => {
            let trie = new GraphTrie();
            let canonicalLabel = ['1', '2'];

            let actualGraph = trie.Get(canonicalLabel);

            expect(actualGraph).to.be.undefined;
        });

        it('Try get elememt with partial canonical label of existing element - should return undefined', () => {
            let trie = new GraphTrie();
            let expectedGraph = new Graph();
            let canonicalLabel = ['1', '2'];

            trie.Add(expectedGraph, canonicalLabel);
            let actualGraph = trie.Get([canonicalLabel[0]]);

            expect(actualGraph).to.be.undefined;
        });

        it('Try get elememt with which canonical label includes the one of an existing element - should return undefined', () => {
            let trie = new GraphTrie();
            let expectedGraph = new Graph();
            let canonicalLabel = ['1', '2'];

            trie.Add(expectedGraph, canonicalLabel);
            let actualGraph = trie.Get(canonicalLabel.push.apply(['f']));

            expect(actualGraph).to.be.undefined;
        });
    });

});