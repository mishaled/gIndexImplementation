import Trie = require('array-trie');
import { serialize, deserialize } from 'serializer.ts/Serializer';
import { Graph } from '../Model';

export class GraphTrie {
    private trie: Trie;

    constructor() {
        this.trie = new Trie();
    }

    public Add(graph: Graph, canonicalLabel: Array<String>) {

        if (this.Get(canonicalLabel)) {
            throw Error('Canonical label already exists in trie');
        }
        this.trie.set(canonicalLabel, graph);
    }

    public Get(canonicalLabel: Array<String>): Graph {
        return this.trie.get(canonicalLabel);
    }
}