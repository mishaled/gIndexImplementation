"use strict";
exports.__esModule = true;
var lodash = require("lodash");
var Graph = (function () {
    function Graph() {
        this.V = [];
        this.E = [];
    }
    Graph.prototype.IsEmpty = function () {
        return lodash.isEmpty(this.V) && lodash.isEmpty(this.E);
    };
    return Graph;
}());
exports["default"] = Graph;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk1vZGVsL0dyYXBoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsK0JBQWlDO0FBRWpDO0lBSUk7UUFDSSxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUNaLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQ2hCLENBQUM7SUFFTSx1QkFBTyxHQUFkO1FBQ0ksTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzVELENBQUM7SUFDTCxZQUFDO0FBQUQsQ0FaQSxBQVlDLElBQUEiLCJmaWxlIjoiTW9kZWwvR3JhcGguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWZXJ0aWNlLCBFZGdlIH0gZnJvbSAnLi8nO1xyXG5pbXBvcnQgKiBhcyBsb2Rhc2ggZnJvbSAnbG9kYXNoJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdyYXBoIHtcclxuICAgIFY/OiBWZXJ0aWNlW107XHJcbiAgICBFOiBFZGdlW107XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5WID0gW107XHJcbiAgICAgICAgdGhpcy5FID0gW107XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHB1YmxpYyBJc0VtcHR5KCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiBsb2Rhc2guaXNFbXB0eSh0aGlzLlYpICYmIGxvZGFzaC5pc0VtcHR5KHRoaXMuRSk7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
