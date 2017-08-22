"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("mocha");
var chai_1 = require("chai");
var _1 = require("../");
describe('Graph', function () {
    var emptyValuesArr = [undefined, null, []];
    describe('IsEmpty', function () {
        var emptyValuesArr = [undefined, null, []];
        (function () {
            emptyValuesArr.forEach(function (firstVal) {
                emptyValuesArr.forEach(function (secondVal) {
                    it('Vertices is ' + secondVal + ' and edged are ' + firstVal + '- should return true', function () {
                        var graph = new _1.Graph();
                        graph.V = secondVal;
                        graph.E = firstVal;
                        var returnVal = graph.IsEmpty();
                        chai_1.expect(returnVal).to.be.true;
                    });
                });
                it('Vertices is ' + firstVal + ' and edged not empty - should return false', function () {
                    var graph = new _1.Graph();
                    graph.V = firstVal;
                    graph.E.push(new _1.Edge());
                    var returnVal = graph.IsEmpty();
                    chai_1.expect(returnVal).to.be.false;
                });
                it('Vertices are not empty and edged are: ' + firstVal + ' - should return false', function () {
                    var graph = new _1.Graph();
                    graph.V.push(new _1.Vertice());
                    graph.E = firstVal;
                    var returnVal = graph.IsEmpty();
                    chai_1.expect(returnVal).to.be.false;
                });
            });
        })();
        it('Both edges and vertices are not empty - should return false', function () {
            var graph = new _1.Graph();
            graph.V.push(new _1.Vertice());
            graph.E.push(new _1.Edge());
            var returnVal = graph.IsEmpty();
            chai_1.expect(returnVal).to.be.false;
        });
    });
    describe('Size', function () {
        it('no edges and no vertices - shoudl return 0', function () {
            var graph = new _1.Graph();
            chai_1.expect(graph.Size).to.be.equal(0);
        });
        it('one edge and no vertices - shoudl return 0', function () {
            var graph = new _1.Graph();
            graph.E.push(new _1.Edge());
            chai_1.expect(graph.Size).to.be.equal(1);
        });
        it('no edges and one vertice - shoudl return 0', function () {
            var graph = new _1.Graph();
            graph.V.push(new _1.Vertice());
            chai_1.expect(graph.Size).to.be.equal(0);
        });
    });
});

//# sourceMappingURL=GraphUnitTests.spec.js.map
