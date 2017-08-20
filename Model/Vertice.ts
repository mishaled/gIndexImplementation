export default class Vertice {
    Id: string;
    label: string;

    constructor(partialObject?: Vertice) {
        (<any>Object).assign(this, partialObject);
    }
}