"use strict";
exports.__esModule = true;
require("mocha");
var lodash = require("lodash");
var chai_1 = require("chai");
var Model_1 = require("../../Model");
var _1 = require("../");
describe('CanonicalFormGenerator', function () {
    var emptyValuesArr = [undefined, null, []];
    describe('GenerateCanonicalForm', function () {
        it('Not empty graph - should generate correct label for graph', function () {
            var graph = generateGraph();
            var canonicalFormGenerator = new _1.CanonicalFormGenerator(graph);
            var canonicalForm = canonicalFormGenerator.GetCanonicalForm();
            chai_1.expect(canonicalForm).to.be.deep.equal([['0', '1', 'X', 'a', 'X'], ['1', '2', 'X', 'a', 'Z'], ['2', '0', 'Z', 'b', 'X'], ['1', '3', 'X', 'b', 'Y']]);
        });
        emptyValuesArr.forEach(function (val) { return it('Graph vertices are ' + val + '- should generate correct label for graph', function () {
            var graph = new Model_1.Graph();
            graph.V = val;
            var badFunc = function () {
                var canonicalFormGenerator = new _1.CanonicalFormGenerator(graph);
                var canonicalForm = canonicalFormGenerator.GetCanonicalForm();
            };
            chai_1.expect(badFunc).to["throw"]('There are no edges in the graph');
        }); });
        function generateGraph() {
            var graph = new Model_1.Graph();
            var verticeX0 = new Model_1.Vertice({
                Id: '0',
                label: 'X'
            });
            graph.V.push(verticeX0);
            var verticeX1 = new Model_1.Vertice({
                Id: '1',
                label: 'X'
            });
            graph.V.push(verticeX1);
            var verticeY = new Model_1.Vertice({
                Id: '3',
                label: 'Y'
            });
            graph.V.push(verticeY);
            var verticeZ = new Model_1.Vertice({
                Id: '2',
                label: 'Z'
            });
            graph.V.push(verticeZ);
            graph.E.push(new Model_1.Edge({
                id: lodash.uniqueId(),
                label: 'a',
                firstVertice: verticeX0,
                secondVertice: verticeX1
            }));
            graph.E.push(new Model_1.Edge({
                id: lodash.uniqueId(),
                label: 'a',
                firstVertice: verticeX1,
                secondVertice: verticeZ
            }));
            graph.E.push(new Model_1.Edge({
                id: lodash.uniqueId(),
                label: 'b',
                firstVertice: verticeX1,
                secondVertice: verticeY
            }));
            graph.E.push(new Model_1.Edge({
                id: lodash.uniqueId(),
                label: 'b',
                firstVertice: verticeX0,
                secondVertice: verticeZ
            }));
            return graph;
        }
    });
});

//# sourceMappingURL=CanonicalFormGenerator.spec.js.map
