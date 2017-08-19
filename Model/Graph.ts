import { Vertice, Edge } from './';
import * as lodash from 'lodash';

export default class Graph {
    V?: Vertice[];
    E: Edge[];

    constructor() {
        this.V = [];
        this.E = [];
    }
    
    public IsEmpty(): boolean {
        return lodash.isEmpty(this.V) && lodash.isEmpty(this.E);
    }
}