import { Graph, Vertice, Edge, VerticeWithSubscript, EdgeWithVerticesWithSubscripts } from '../Model';
import * as lodash from 'lodash';

export class CanonicalFormGenerator {
    private vertices: VerticeWithSubscript[];
    private edges: EdgeWithVerticesWithSubscripts[];

    constructor(graph: Graph) {
        if (lodash.isEmpty(graph.V)) {
            throw 'There are no edges in the graph';
        }

        this.vertices = this.generateVerticesWithSubscripts(graph.V);
        this.edges = this.generateEdgesWithVerticesWithSubscripts(this.vertices, graph.E);
    }

    public GetCanonicalForm(): string[][] {
        let edgeCanonicalForms: string[][][] = this.getAllCanonicalForms(this.vertices);
        let minimalLabel = this.findMinimalCanonicalForm(edgeCanonicalForms);
        return minimalLabel;
    }

    private getAllCanonicalForms(vertices: VerticeWithSubscript[]): string[][][] {
        return lodash.map(vertices, (vertice) => {
            return this.getCanonicalFormStatringWithVertice(vertice);
        });
    }

    private getCanonicalFormStatringWithVertice(startingVertice: VerticeWithSubscript): string[][] {
        let finalEdges: string[][] = [];

        let clonedVertices = lodash.clone(this.vertices);
        let clonedEdges = lodash.clone(this.edges);

        let currentWithSubscript = this.findVerticeById(clonedVertices, startingVertice);
        currentWithSubscript.Subscript = 0;

        do {
            let connectedEdges = this.getAllEdgesConnectedToAVertice(clonedEdges, currentWithSubscript);

            if (lodash.isEmpty(connectedEdges)) {
                currentWithSubscript = this.decrementVertice(currentWithSubscript, clonedVertices);
                continue;
            }

            let notVisitedConnectedEdges = this.filterEdgesToNotVisitedVertices(clonedVertices, currentWithSubscript, connectedEdges);

            if (lodash.isEmpty(notVisitedConnectedEdges)) {
                let backwardEdges = this.generateBackwardEdged(connectedEdges, notVisitedConnectedEdges);
                let backwardEdgesCanonicalForms = this.transformEdgesToCanonicalForms(backwardEdges, currentWithSubscript, true);
                finalEdges.push.apply(finalEdges, backwardEdgesCanonicalForms);
                lodash.forEach(backwardEdges, (edge) => { edge.visited = true; });

                currentWithSubscript = this.decrementVertice(currentWithSubscript, clonedVertices);
                continue;
            }

            let minimalEdge = this.findMinimalEdgeByLabel(notVisitedConnectedEdges);
            minimalEdge.visited = true;
            finalEdges.push(minimalEdge.ToCanonicalForm(currentWithSubscript));

            let nextVertice = this.findVerticeWithSubscriptOnTheOtherSideOfTheEdge(minimalEdge, currentWithSubscript);
            if (nextVertice.Subscript < 0) {
                nextVertice.Subscript = currentWithSubscript.Subscript + 1;                
            }
            currentWithSubscript = nextVertice;
        } while (this.notVisitedVerticesExist(clonedVertices));

        return finalEdges;
    }

    private findVerticeById(vertices: VerticeWithSubscript[], oldVertice: Vertice) {
        return lodash.find(vertices, (newVertice: VerticeWithSubscript) => { return newVertice.Id == oldVertice.Id })
    }

    private findMinimalEdgeByLabel(edges: EdgeWithVerticesWithSubscripts[]) {
        let notVisitedEdges = lodash.filter(edges, (edge) => { return !edge.visited });
        return lodash.minBy(notVisitedEdges, (edge) => { return edge.label })
    }

    private findVerticeWithSubscriptOnTheOtherSideOfTheEdge(edge: EdgeWithVerticesWithSubscripts, firstVertice: VerticeWithSubscript) {
        let secondVertice: VerticeWithSubscript;
        if (firstVertice == edge.firstVertice) {
            secondVertice = edge.secondVertice
        }

        if (firstVertice.Id == edge.secondVertice.Id) {
            secondVertice = edge.firstVertice;
        }

        return secondVertice;
    }

    private findMinimalCanonicalForm(edgeCanonicalForms: string[][][]): string[][] {
        let minimalLabel = lodash.minBy(edgeCanonicalForms, (canonicalForm) => {
            return this.concatenateStrings(canonicalForm);
        });

        return minimalLabel;
    }

    private concatenateStrings(objects: object[]): string {
        return lodash.reduce(objects, (sum: string, currentString: object) => { return sum + currentString.toString() });
    }

    private decrementVertice(currentWithSubscript: VerticeWithSubscript, clonedVertices: VerticeWithSubscript[]) {
        return lodash.find(clonedVertices, (vertice) => {
            return vertice.Subscript == currentWithSubscript.Subscript - 1;
        });
    }

    private generateEdgesWithVerticesWithSubscripts(vertices: VerticeWithSubscript[], edges: Edge[]) {
        return lodash.map(edges, (edge) => {
            let newEdge = new EdgeWithVerticesWithSubscripts({ id: edge.id, label: edge.label });
            newEdge.firstVertice = this.findVerticeById(vertices, <VerticeWithSubscript>edge.firstVertice);
            newEdge.secondVertice = this.findVerticeById(vertices, <VerticeWithSubscript>edge.secondVertice);

            return newEdge;
        });
    }

    private generateBackwardEdged(connectedEdges: EdgeWithVerticesWithSubscripts[], notVisitedConnectedEdges: EdgeWithVerticesWithSubscripts[]): EdgeWithVerticesWithSubscripts[] {
        let edges = lodash.without(connectedEdges, Object.apply(notVisitedConnectedEdges));
        let notVisitedEdges = lodash.filter(edges, (edge) => { return !edge.visited; });
        let orderedEdges = lodash.orderBy(notVisitedEdges, (edge) => { return edge.label });

        return orderedEdges;
    }

    private transformEdgesToCanonicalForms(edges: EdgeWithVerticesWithSubscripts[], sourceVertice: VerticeWithSubscript, isBackward: boolean): string[][] {
        let canonicalForms: string[][] = lodash.map(edges, (edge: EdgeWithVerticesWithSubscripts) => {
            return edge.ToCanonicalForm(sourceVertice);
        });

        return canonicalForms;
    }

    private filterEdgesToNotVisitedVertices(clonedVertices: VerticeWithSubscript[], currentWithSubscript: VerticeWithSubscript, connectedEdges: EdgeWithVerticesWithSubscripts[]) {
        return lodash.filter(connectedEdges, (edge) => {
            let secondVertice = this.findVerticeWithSubscriptOnTheOtherSideOfTheEdge(edge, currentWithSubscript);
            return secondVertice.Subscript < 0;
        });
    }

    private notVisitedVerticesExist(vertices: VerticeWithSubscript[]) {
        return lodash.find(vertices, (vertice) => { return vertice.Subscript < 0; })
    }

    private getAllEdgesConnectedToAVertice(edges: EdgeWithVerticesWithSubscripts[], vertice: Vertice) {
        return lodash.filter(edges, (edge) => { return edge.firstVertice.Id == vertice.Id || edge.secondVertice.Id == vertice.Id })
    }

    private generateVerticesWithSubscripts(vertices: Vertice[]): VerticeWithSubscript[] {
        return lodash.map((vertices), (vertice) => { return new VerticeWithSubscript(vertice) });
    }
}