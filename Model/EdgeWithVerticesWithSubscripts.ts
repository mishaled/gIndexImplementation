import { Edge, VerticeWithSubscript } from './';
import * as lodash from 'lodash';

export default class EdgeWithVerticesWithSubscripts extends Edge {
    firstVertice: VerticeWithSubscript;
    secondVertice: VerticeWithSubscript;
    visited: boolean;

    constructor(partialObject?: object) {
        super(partialObject);
        this.visited = false;
    }

    public ToCanonicalForm(sourceVertice: VerticeWithSubscript): string[] {
        if (lodash.isEmpty(this.firstVertice)) {
            throw 'First vertice is empty';
        }

        if (lodash.isEmpty(this.secondVertice)) {
            throw 'second vertice is empty';
        }

        let firstVertice: VerticeWithSubscript;
        let secondVertice: VerticeWithSubscript;
        if (sourceVertice == this.firstVertice) {
            firstVertice = this.firstVertice;
            secondVertice = this.secondVertice;
        }
        else {
            secondVertice = this.firstVertice;
            firstVertice = this.secondVertice;
        }

        return [firstVertice.Id, secondVertice.Id, firstVertice.label, this.label, secondVertice.label];
    }
}