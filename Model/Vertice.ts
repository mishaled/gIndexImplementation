export default class Vertice {
    Id: string;
    label: string;

    constructor(partialObject?: Object) {
        (<any>Object).assign(this, partialObject);
    }
}