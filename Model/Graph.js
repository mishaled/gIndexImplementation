"use strict";
exports.__esModule = true;
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
exports["default"] = Graph;

//# sourceMappingURL=Graph.js.map
