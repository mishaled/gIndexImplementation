import { Vertice } from './';
import * as lodash from 'lodash';

export default class Edge {
    id: string;
    label: string;
    firstVertice: Vertice;
    secondVertice: Vertice;

    constructor(partialObject?: object) {
        (<any>Object).assign(this, partialObject);
    }

    public ToCanonicalForm(): string[] {
        if (lodash.isEmpty(this.firstVertice)) {
            throw 'First vertice is empty';
        }

        if (lodash.isEmpty(this.secondVertice)) {
            throw 'second vertice is empty';
        }

        return [this.firstVertice.Id, this.secondVertice.Id, this.firstVertice.label, this.label, this.secondVertice.label];
    }
}