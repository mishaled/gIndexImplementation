import { Vertice } from './';

export default class Edge {
    id: string;
    label: string;
    firstVertice: Vertice;
    secondVertice: Vertice;

    constructor(partialObject?: object) {
        (<any>Object).assign(this, partialObject);
    }
}