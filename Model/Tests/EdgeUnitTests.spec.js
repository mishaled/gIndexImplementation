"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("mocha");
var chai_1 = require("chai");
var _1 = require("../");
describe('Edge', function () {
    var emptyValuesArr = [undefined, null];
    describe('ToCanonicalForm', function () {
        emptyValuesArr.forEach(function (firstVal) {
            emptyValuesArr.forEach(function (secondVal) { return it('First vertice is ' + firstVal + ' and the second is ' + secondVal + ' - should throw error appropriately', function () {
                var edge = new _1.Edge();
                edge.firstVertice = firstVal;
                edge.secondVertice = secondVal;
                var badFunc = function () { var canonicalForm = edge.ToCanonicalForm(); };
                chai_1.expect(badFunc).to.throw('First vertice is empty');
            }); });
        });
        emptyValuesArr.forEach(function (val) {
            it('First vertice is ' + val + ' - should throw error appropriately', function () {
                var edge = new _1.Edge();
                edge.secondVertice = new _1.Vertice();
                var badFunc = function () { var canonicalForm = edge.ToCanonicalForm(); };
                chai_1.expect(badFunc).to.throw('First vertice is empty');
            });
        });
        emptyValuesArr.forEach(function (val) {
            it('Second vertice is ' + val + ' - should throw error appropriately', function () {
                var edge = new _1.Edge();
                edge.firstVertice = new _1.Vertice();
                var badFunc = function () { var canonicalForm = edge.ToCanonicalForm(); };
                chai_1.expect(badFunc).to.throw('First vertice is empty');
            });
        });
        it('Correct edge - should return correct result', function () {
            var edge = new _1.Edge({ id: '0', label: 'a' });
            edge.firstVertice = new _1.Vertice({ Id: '0', label: 'X' });
            edge.secondVertice = new _1.Vertice({ Id: '1', label: 'Y' });
            var canonicalForm = edge.ToCanonicalForm();
            chai_1.expect(canonicalForm).to.be.deep.equal(['0', '1', 'X', 'a', 'Y']);
        });
    });
});
//# sourceMappingURL=EdgeUnitTests.spec.js.map