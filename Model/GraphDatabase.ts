import { Graph } from './';

export default class GraphDatabase  {
    public Graphs: Graph[];

    constructor(partialObject?: GraphDatabase) { 
        (<any>Object).assign(this, partialObject);
    }
}