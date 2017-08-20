import { Vertice, Edge, VerticeWithSubscript, EdgeWithVerticesWithSubscripts } from './';
import * as lodash from 'lodash';

export default class Graph {
    V: Vertice[];
    E: Edge[];

    constructor(partialObject?: Graph) {
        (<any>Object).assign(this, partialObject);

        if (!this.V) {
            this.V = [];
        }

        if (!this.E) {
            this.E = [];
        }
    }

    public IsEmpty(): boolean {
        return lodash.isEmpty(this.V) && lodash.isEmpty(this.E);
    }
}