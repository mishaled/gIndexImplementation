"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var _1 = require("./");
var lodash = require("lodash");
var EdgeWithVerticesWithSubscripts = (function (_super) {
    __extends(EdgeWithVerticesWithSubscripts, _super);
    function EdgeWithVerticesWithSubscripts(partialObject) {
        var _this = _super.call(this, partialObject) || this;
        _this.visited = false;
        return _this;
    }
    EdgeWithVerticesWithSubscripts.prototype.ToCanonicalForm = function (sourceVertice) {
        if (lodash.isEmpty(this.firstVertice)) {
            throw 'First vertice is empty';
        }
        if (lodash.isEmpty(this.secondVertice)) {
            throw 'second vertice is empty';
        }
        var firstVertice;
        var secondVertice;
        if (sourceVertice == this.firstVertice) {
            firstVertice = this.firstVertice;
            secondVertice = this.secondVertice;
        }
        else {
            secondVertice = this.firstVertice;
            firstVertice = this.secondVertice;
        }
        return [firstVertice.Id, secondVertice.Id, firstVertice.label, this.label, secondVertice.label];
    };
    return EdgeWithVerticesWithSubscripts;
}(_1.Edge));
exports.default = EdgeWithVerticesWithSubscripts;

//# sourceMappingURL=EdgeWithVerticesWithSubscripts.js.map
