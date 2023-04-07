var Circle = /** @class */ (function () {
    function Circle() {
    }
    Circle.prototype.draw2DImage = function () {
        console.log("drawing a 2d image");
    };
    Circle.prototype.drawPoint = function () {
        console.log("drawingline");
    };
    return Circle;
}());
var cir = new Circle();
cir.drawPoint();
cir.draw2DImage();
