"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lodash = require("lodash");
var Edge = (function () {
    function Edge(partialObject) {
        Object.assign(this, partialObject);
    }
    Edge.prototype.ToCanonicalForm = function () {
        if (lodash.isEmpty(this.firstVertice)) {
            throw 'First vertice is empty';
        }
        if (lodash.isEmpty(this.secondVertice)) {
            throw 'second vertice is empty';
        }
        return [this.firstVertice.Id, this.secondVertice.Id, this.firstVertice.label, this.label, this.secondVertice.label];
    };
    return Edge;
}());
exports.default = Edge;
//# sourceMappingURL=Edge.js.map