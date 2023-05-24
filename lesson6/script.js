window.addEventListener("DOMContentLoaded", (event) => {
   var rect = new Object();
   rect.leftTopCorner = {
        X: 40, Y: 40
   }
   rect.rightBottomCorner = {
        X: 80, Y: 80
   }

   GetAllCorner(rect);
   console.log(GetWidth(rect));
   console.log(GetHeight(rect));
   console.log(GetArea(rect));
   console.log(GetPerimetr(rect));
   console.log(GetWidth(ChangeWidth(rect,10)));
   console.log(GetHeight(ChangeHeight(rect,10)));
   console.log(GetWidth(ChangeRightBottomCorner(rect,10,10)));
   console.log(GetHeight(ChangeRightBottomCorner(rect,10,10)));

   console.log("Было: " + rect.leftTopCorner.X);
   console.log(MoveRectangleX(rect,10));
   console.log("Было: " + rect.leftTopCorner.Y);
   console.log(MoveRectangleY(rect,10));
   console.log("Было: " + rect.leftTopCorner.X + " " + rect.leftTopCorner.Y);
   console.log(MoveRectangleXY(rect,10,10));
   console.log(PointInRectangle(rect,50,50));
});


function GetAllCorner(rectangle)
{
    console.log("Левый верхний угол: X:" + rectangle.leftTopCorner.X + 
    " Y:" + rectangle.leftTopCorner.Y);
    console.log("Правый верхний угол: X:" + rectangle.rightBottomCorner.X + 
    " Y:" + rectangle.leftTopCorner.Y);
    console.log("Правый нижний угол: X:" + rectangle.rightBottomCorner.X + 
    " Y:" + rectangle.rightBottomCorner.Y);
    console.log("Левый нижний угол: X:" + rectangle.leftTopCorner.X + 
    " Y:" + rectangle.rightBottomCorner.Y);
}

function GetWidth(rectangle)
{
    return rectangle.rightBottomCorner.X - rectangle.leftTopCorner.X;
}
function GetHeight(rectangle)
{
    return Math.abs(rectangle.rightBottomCorner.Y + -rectangle.leftTopCorner.Y);
}
function GetArea(rectangle)
{
    return Math.abs(rectangle.rightBottomCorner.Y + -rectangle.leftTopCorner.Y) * Math.abs(rectangle.rightBottomCorner.X + -rectangle.leftTopCorner.X);
}
function GetPerimetr(rectangle)
{
    return Math.abs(rectangle.rightBottomCorner.Y + -rectangle.leftTopCorner.Y)*2 + Math.abs(rectangle.rightBottomCorner.X + -rectangle.leftTopCorner.X)*2;
}
function ChangeWidth(rectangle, delta) {
    rectangle.rightBottomCorner.X += delta;
    return rectangle;
}
function ChangeHeight(rectangle, delta) {
    rectangle.rightBottomCorner.Y += delta;
    return rectangle;
}
function ChangeRightBottomCorner(rectangle, deltaW, deltaH) {
    rectangle.rightBottomCorner.X += deltaW;
    rectangle.rightBottomCorner.Y += deltaH;
    return rectangle;
}
function MoveRectangleX(rectangle, deltaW) {
    rectangle.leftTopCorner.X += deltaW;
    rectangle.rightBottomCorner.X += deltaW;
    return rectangle;
}
function MoveRectangleY(rectangle, deltaH) {
    rectangle.leftTopCorner.Y += deltaH;
    rectangle.rightBottomCorner.Y += deltaH;
    return rectangle;
}
function MoveRectangleXY(rectangle, deltaW, deltaH) {
    rectangle.leftTopCorner.X += deltaW;
    rectangle.rightBottomCorner.X += deltaW;
    rectangle.leftTopCorner.Y += deltaH;
    rectangle.rightBottomCorner.Y += deltaH;
    return rectangle;
}
function PointInRectangle(rectangle, X, Y) {
    if ( X > rectangle.leftTopCorner.X && X < rectangle.rightBottomCorner.X 
        && Y > rectangle.leftTopCorner.Y && Y < rectangle.rightBottomCorner.Y )
        return true;
    return false;
}