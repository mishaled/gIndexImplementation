"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lodash = require("lodash");
var Graph = (function () {
    function Graph(partialObject) {
        Object.assign(this, partialObject);
        if (!this.V) {
            this.V = [];
        }
        if (!this.E) {
            this.E = [];
        }
    }
    Graph.prototype.IsEmpty = function () {
        return lodash.isEmpty(this.V) && lodash.isEmpty(this.E);
    };
    return Graph;
}());
exports.default = Graph;
//# sourceMappingURL=Graph.js.map