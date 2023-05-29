window.addEventListener("DOMContentLoaded", (event) => {
    var btn = new Button(300,60,"Узнать подробнее");
    btn.ShowBtn();
    var btn2 = new BootstrapButton("red",300,60,"Узнать подробнее");
    btn2.ShowBtn();

    var massiveFigure = [ new Figure("Abstract",10,5), new Square(6), new Rectangle(10,5), new Triangle(15,13,19)];
    for(let i = 0; i < massiveFigure.length; i++)
    {
        massiveFigure[i].getInfo();
        massiveFigure[i].getArea();
        massiveFigure[i].getPerimetr();
    }
});

class Button {
    constructor(width, height, text) {
        this.width = width;
        this.height = height;
        this.text = text;
    }
    ShowBtn() {
        let button = "<button ";
        button += `style="width:${this.width}; height:${this.height};"`;
        button +=">"
        button += this.text;
        button += "</button>";
        document.write(button);
    }
}
class BootstrapButton extends Button {
    constructor(color,width,height,text) {
        super(width,height,text);
        this.color = color;        
    }
    ShowBtn() {
        let button = "<button ";
        button += `style="width:${this.width}; height:${this.height}; background:${this.color};"`;
        button +=">"
        button += this.text;
        button += "</button>";
        document.write(button);
    }
}

class Figure {
    constructor(name, sides, lengthOfSide) {
        this.name = name;
        this.sides = sides;
        this.lengthOfSide = lengthOfSide;
    }
    get name() {
        return this.name;
    }
    set name(name) {

    }
    getInfo() {
        console.log(`This figure have a ${this.sides} sides and each of side 
                    have a length ${this.lengthOfSide}`);
    }
    getArea() {
        console.log("This method output area of a figure");
    }
    getPerimetr() {
        console.log("This method output perimetr of a figure");
    }
}
class Square extends Figure {
    constructor(lengthOfSide,name = "Square",sides = 4) {
        super(name,sides,lengthOfSide);        
    }
    getInfo() {
        console.log(`This square have a 4 sides and each of side 
                    have a length ${this.lengthOfSide}`);
    }
    getArea() {
        console.log("This method output area of a figure : " + this.lengthOfSide*this.lengthOfSide);
    }
    getPerimetr() {
        console.log("This method output perimetr of a figure:" + this.lengthOfSide * this.sides);
    }
}
class Rectangle extends Figure {
    constructor(lengthOfSide, lengthOfSideRight,name = "Rectangle",sides = 4,) {
        super(name,sides,lengthOfSide);
        this.lengthOfSideRight = lengthOfSideRight;
    }
    getInfo() {
        console.log(`This square have a 4 sides and both of top and bottom side 
                    have a length ${this.lengthOfSide} and both of left and right side 
                    have a length ${this.lengthOfSideRight}`);
    }
    getArea() {
        console.log("This method output area of a figure : " + this.lengthOfSide*this.lengthOfSideRight);
    }
    getPerimetr() {
        console.log("This method output perimetr of a figure:" + (this.lengthOfSide*2 + this.lengthOfSideRight *2));
    }
}
class Triangle extends Figure {
    constructor(lengthOfSide, lengthOfSideRight, lengthOfSideLeft,name = "Triangle",sides = 3) {
        super(name,sides,lengthOfSide);
        this.lengthOfSideRight = lengthOfSideRight;
        this.lengthOfSideLeft = lengthOfSideLeft;
    }
    getInfo() {
        console.log(`This square have a 3 sides and each have a different size -
                    one side have a ${this.lengthOfSide} size, other side 
                    have a ${this.lengthOfSideRight} size and third side have a ${this.lengthOfSideLeft} size`);
    }
    getArea() {
        let bigSide = this.lengthOfSide > this.lengthOfSideRight ? this.lengthOfSide : this.lengthOfSideRight;
        bigSide = bigSide > this.lengthOfSideLeft ? bigSide : this.lengthOfSideLeft;
        let radius = bigSide /2;
        let area = (this.lengthOfSide * this.lengthOfSideRight * this.lengthOfSideLeft) / (4 * radius);
        console.log("This method output area of a figure : " + area);
    }
    getPerimetr() {
        console.log("This method output perimetr of a figure:" + (this.lengthOfSide 
        + this.lengthOfSideRight + this.lengthOfSideLeft));
    }
}