"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _1 = require("./");
var lodash = require("lodash");
var Decorators_1 = require("serializer.ts/Decorators");
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
    Object.defineProperty(Graph.prototype, "Size", {
        get: function () {
            return this.E.length;
        },
        enumerable: true,
        configurable: true
    });
    Graph.prototype.IsEmpty = function () {
        return lodash.isEmpty(this.V) && lodash.isEmpty(this.E);
    };
    __decorate([
        Decorators_1.Type(function () { return _1.Vertice; })
    ], Graph.prototype, "V", void 0);
    __decorate([
        Decorators_1.Type(function () { return _1.Edge; })
    ], Graph.prototype, "E", void 0);
    return Graph;
}());
exports.default = Graph;

//# sourceMappingURL=Graph.js.map
