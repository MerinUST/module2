interface Paint{
    drawPoint():void;//some thing which has abstract
}
interface Paint2D{
    draw2DImage():void;
}
class Circle implements 
Paint, Paint2D{
    draw2DImage(): void {
        console.log("drawing a 2d image");
    }
    drawPoint(): void {
        console.log("drawingline");
    }
}
var cir=new Circle();
cir.drawPoint();
cir.draw2DImage();