import { Vertice, Edge, VerticeWithSubscript, EdgeWithVerticesWithSubscripts } from './';
import * as lodash from 'lodash';
import { Type } from 'serializer.ts/Decorators';

export default class Graph {
    @Type(() => Vertice)
    V: Vertice[];
    @Type(() => Edge)
    E: Edge[];

    public get Size(): number {
        return this.E.length;
    }

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