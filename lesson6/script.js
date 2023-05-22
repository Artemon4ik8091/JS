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