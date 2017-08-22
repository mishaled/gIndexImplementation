"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Model_1 = require("../Model");
var lodash = require("lodash");
var CanonicalFormGenerator = (function () {
    function CanonicalFormGenerator(graph) {
        if (lodash.isEmpty(graph.V)) {
            throw 'There are no edges in the graph';
        }
        this.vertices = this.generateVerticesWithSubscripts(graph.V);
        this.edges = this.generateEdgesWithVerticesWithSubscripts(this.vertices, graph.E);
    }
    CanonicalFormGenerator.prototype.GetCanonicalForm = function () {
        var edgeCanonicalForms = this.getAllCanonicalForms(this.vertices);
        var minimalLabel = this.findMinimalCanonicalForm(edgeCanonicalForms);
        return minimalLabel;
    };
    CanonicalFormGenerator.prototype.getAllCanonicalForms = function (vertices) {
        var _this = this;
        return lodash.map(vertices, function (vertice) {
            return _this.getCanonicalFormStatringWithVertice(vertice);
        });
    };
    CanonicalFormGenerator.prototype.getCanonicalFormStatringWithVertice = function (startingVertice) {
        var finalEdges = [];
        var clonedVertices = lodash.clone(this.vertices);
        var clonedEdges = lodash.clone(this.edges);
        var currentWithSubscript = this.findVerticeById(clonedVertices, startingVertice);
        currentWithSubscript.Subscript = 0;
        do {
            var connectedEdges = this.getAllEdgesConnectedToAVertice(clonedEdges, currentWithSubscript);
            if (lodash.isEmpty(connectedEdges)) {
                currentWithSubscript = this.decrementVertice(currentWithSubscript, clonedVertices);
                continue;
            }
            var notVisitedConnectedEdges = this.filterEdgesToNotVisitedVertices(clonedVertices, currentWithSubscript, connectedEdges);
            if (lodash.isEmpty(notVisitedConnectedEdges)) {
                var backwardEdges = this.generateBackwardEdged(connectedEdges, notVisitedConnectedEdges);
                var backwardEdgesCanonicalForms = this.transformEdgesToCanonicalForms(backwardEdges, currentWithSubscript, true);
                finalEdges.push.apply(finalEdges, backwardEdgesCanonicalForms);
                lodash.forEach(backwardEdges, function (edge) { edge.visited = true; });
                currentWithSubscript = this.decrementVertice(currentWithSubscript, clonedVertices);
                continue;
            }
            var minimalEdge = this.findMinimalEdgeByLabel(notVisitedConnectedEdges);
            minimalEdge.visited = true;
            finalEdges.push(minimalEdge.ToCanonicalForm(currentWithSubscript));
            var nextVertice = this.findVerticeWithSubscriptOnTheOtherSideOfTheEdge(minimalEdge, currentWithSubscript);
            if (nextVertice.Subscript < 0) {
                nextVertice.Subscript = currentWithSubscript.Subscript + 1;
            }
            currentWithSubscript = nextVertice;
        } while (this.notVisitedVerticesExist(clonedVertices));
        return finalEdges;
    };
    CanonicalFormGenerator.prototype.findVerticeById = function (vertices, oldVertice) {
        return lodash.find(vertices, function (newVertice) { return newVertice.Id == oldVertice.Id; });
    };
    CanonicalFormGenerator.prototype.findMinimalEdgeByLabel = function (edges) {
        var notVisitedEdges = lodash.filter(edges, function (edge) { return !edge.visited; });
        return lodash.minBy(notVisitedEdges, function (edge) { return edge.label; });
    };
    CanonicalFormGenerator.prototype.findVerticeWithSubscriptOnTheOtherSideOfTheEdge = function (edge, firstVertice) {
        var secondVertice;
        if (firstVertice == edge.firstVertice) {
            secondVertice = edge.secondVertice;
        }
        if (firstVertice.Id == edge.secondVertice.Id) {
            secondVertice = edge.firstVertice;
        }
        return secondVertice;
    };
    CanonicalFormGenerator.prototype.findMinimalCanonicalForm = function (edgeCanonicalForms) {
        var _this = this;
        var minimalLabel = lodash.minBy(edgeCanonicalForms, function (canonicalForm) {
            return _this.concatenateStrings(canonicalForm);
        });
        return minimalLabel;
    };
    CanonicalFormGenerator.prototype.concatenateStrings = function (objects) {
        return lodash.reduce(objects, function (sum, currentString) { return sum + currentString.toString(); });
    };
    CanonicalFormGenerator.prototype.decrementVertice = function (currentWithSubscript, clonedVertices) {
        return lodash.find(clonedVertices, function (vertice) {
            return vertice.Subscript == currentWithSubscript.Subscript - 1;
        });
    };
    CanonicalFormGenerator.prototype.generateEdgesWithVerticesWithSubscripts = function (vertices, edges) {
        var _this = this;
        return lodash.map(edges, function (edge) {
            var newEdge = new Model_1.EdgeWithVerticesWithSubscripts({ id: edge.id, label: edge.label });
            newEdge.firstVertice = _this.findVerticeById(vertices, edge.firstVertice);
            newEdge.secondVertice = _this.findVerticeById(vertices, edge.secondVertice);
            return newEdge;
        });
    };
    CanonicalFormGenerator.prototype.generateBackwardEdged = function (connectedEdges, notVisitedConnectedEdges) {
        var edges = lodash.without(connectedEdges, Object.apply(notVisitedConnectedEdges));
        var notVisitedEdges = lodash.filter(edges, function (edge) { return !edge.visited; });
        var orderedEdges = lodash.orderBy(notVisitedEdges, function (edge) { return edge.label; });
        return orderedEdges;
    };
    CanonicalFormGenerator.prototype.transformEdgesToCanonicalForms = function (edges, sourceVertice, isBackward) {
        var canonicalForms = lodash.map(edges, function (edge) {
            return edge.ToCanonicalForm(sourceVertice);
        });
        return canonicalForms;
    };
    CanonicalFormGenerator.prototype.filterEdgesToNotVisitedVertices = function (clonedVertices, currentWithSubscript, connectedEdges) {
        var _this = this;
        return lodash.filter(connectedEdges, function (edge) {
            var secondVertice = _this.findVerticeWithSubscriptOnTheOtherSideOfTheEdge(edge, currentWithSubscript);
            return secondVertice.Subscript < 0;
        });
    };
    CanonicalFormGenerator.prototype.notVisitedVerticesExist = function (vertices) {
        return lodash.find(vertices, function (vertice) { return vertice.Subscript < 0; });
    };
    CanonicalFormGenerator.prototype.getAllEdgesConnectedToAVertice = function (edges, vertice) {
        return lodash.filter(edges, function (edge) { return edge.firstVertice.Id == vertice.Id || edge.secondVertice.Id == vertice.Id; });
    };
    CanonicalFormGenerator.prototype.generateVerticesWithSubscripts = function (vertices) {
        return lodash.map((vertices), function (vertice) { return new Model_1.VerticeWithSubscript(vertice); });
    };
    return CanonicalFormGenerator;
}());
exports.CanonicalFormGenerator = CanonicalFormGenerator;
//# sourceMappingURL=CanonicalFormGenerator.js.map