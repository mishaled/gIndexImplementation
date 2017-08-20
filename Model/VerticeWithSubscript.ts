import { Vertice } from './';

export default class VerticeWithSuscript extends Vertice {
    public Subscript: number;

    constructor(partialObject?: Vertice) {
        super(partialObject);
        this.Subscript = -1;
    }
}