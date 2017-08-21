"use strict";
exports.__esModule = true;
require("mocha");
var chai_1 = require("chai");
var _1 = require("../");
describe.only('EdgeWithVerticesWithSubscripts', function () {
    var emptyValuesArr = [undefined, null];
    var truthValues = [false, true];
    describe('ToCanonicalForm', function () {
        truthValues.forEach(function (truthVal) {
            describe('empty values when isBackward is ' + truthVal, function () {
                emptyValuesArr.forEach(function (firstVal) {
                    emptyValuesArr.forEach(function (secondVal) {
                        it('From first vertice, first vertice is ' + firstVal + ' and the second is ' + secondVal + ' - should throw error appropriately', function () {
                            var edge = new _1.EdgeWithVerticesWithSubscripts();
                            edge.firstVertice = firstVal;
                            edge.secondVertice = secondVal;
                            var badFunc = function () { var canonicalForm = edge.ToCanonicalForm(truthVal, edge.firstVertice); };
                            chai_1.expect(badFunc).to["throw"]('First vertice is empty');
                        });
                        it('From second vertice, first vertice is ' + firstVal + ' and the second is ' + secondVal + ' - should throw error appropriately', function () {
                            var edge = new _1.EdgeWithVerticesWithSubscripts();
                            edge.firstVertice = firstVal;
                            edge.secondVertice = secondVal;
                            var badFunc = function () { var canonicalForm = edge.ToCanonicalForm(truthVal, edge.secondVertice); };
                            chai_1.expect(badFunc).to["throw"]('First vertice is empty');
                        });
                    });
                });
                emptyValuesArr.forEach(function (val) {
                    it('From first vertice, first vertice is ' + val + ' - should throw error appropriately', function () {
                        var edge = new _1.EdgeWithVerticesWithSubscripts();
                        edge.secondVertice = new _1.VerticeWithSubscript();
                        var badFunc = function () { var canonicalForm = edge.ToCanonicalForm(truthVal, edge.firstVertice); };
                        chai_1.expect(badFunc).to["throw"]('First vertice is empty');
                    });
                    it('From second vertice, first vertice is ' + val + ' - should throw error appropriately', function () {
                        var edge = new _1.EdgeWithVerticesWithSubscripts();
                        edge.secondVertice = new _1.VerticeWithSubscript();
                        var badFunc = function () { var canonicalForm = edge.ToCanonicalForm(truthVal, edge.secondVertice); };
                        chai_1.expect(badFunc).to["throw"]('First vertice is empty');
                    });
                });
                emptyValuesArr.forEach(function (val) {
                    it('From first vertice, Second vertice is ' + val + ' - should throw error appropriately', function () {
                        var edge = new _1.EdgeWithVerticesWithSubscripts();
                        edge.firstVertice = new _1.VerticeWithSubscript();
                        var badFunc = function () { var canonicalForm = edge.ToCanonicalForm(truthVal, edge.firstVertice); };
                        chai_1.expect(badFunc).to["throw"]('second vertice is empty');
                    });
                    it('From second vertice, Second vertice is ' + val + ' - should throw error appropriately', function () {
                        var edge = new _1.EdgeWithVerticesWithSubscripts();
                        edge.firstVertice = new _1.VerticeWithSubscript();
                        var badFunc = function () { var canonicalForm = edge.ToCanonicalForm(truthVal, edge.secondVertice); };
                        chai_1.expect(badFunc).to["throw"]('second vertice is empty');
                    });
                });
            });
        });
        describe('Correct edge', function () {
            it('from first vertice, backwards if false - should return correct result', function () {
                var edge = new _1.EdgeWithVerticesWithSubscripts({ id: '0', label: 'a' });
                edge.firstVertice = new _1.VerticeWithSubscript({ Id: '0', label: 'X' });
                edge.secondVertice = new _1.VerticeWithSubscript({ Id: '1', label: 'Y' });
                var canonicalForm = edge.ToCanonicalForm(false, edge.firstVertice);
                chai_1.expect(canonicalForm).to.be.deep.equal(['0', '1', 'X', 'a', 'Y']);
            });
            it('from first vertice, isbackwards is true - should return correct result', function () {
                var edge = new _1.EdgeWithVerticesWithSubscripts({ id: '0', label: 'a' });
                edge.firstVertice = new _1.VerticeWithSubscript({ Id: '0', label: 'X' });
                edge.secondVertice = new _1.VerticeWithSubscript({ Id: '1', label: 'Y' });
                var canonicalForm = edge.ToCanonicalForm(true, edge.firstVertice);
                chai_1.expect(canonicalForm).to.be.deep.equal(['1', '0', 'Y', 'a', 'X']);
            });
            it('from second vertice, backwards if false - should return correct result', function () {
                var edge = new _1.EdgeWithVerticesWithSubscripts({ id: '0', label: 'a' });
                edge.firstVertice = new _1.VerticeWithSubscript({ Id: '0', label: 'X' });
                edge.secondVertice = new _1.VerticeWithSubscript({ Id: '1', label: 'Y' });
                var canonicalForm = edge.ToCanonicalForm(false, edge.secondVertice);
                chai_1.expect(canonicalForm).to.be.deep.equal(['1', '0', 'Y', 'a', 'X']);
            });
            it('from second vertice, isbackwards is true - should return correct result', function () {
                var edge = new _1.EdgeWithVerticesWithSubscripts({ id: '0', label: 'a' });
                edge.firstVertice = new _1.VerticeWithSubscript({ Id: '0', label: 'X' });
                edge.secondVertice = new _1.VerticeWithSubscript({ Id: '1', label: 'Y' });
                var canonicalForm = edge.ToCanonicalForm(true, edge.secondVertice);
                chai_1.expect(canonicalForm).to.be.deep.equal(['0', '1', 'X', 'a', 'Y']);
            });
        });
    });
});

//# sourceMappingURL=EdgeWithVerticesWithSubscriptsUnitTests.spec.js.map
