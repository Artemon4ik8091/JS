window.addEventListener("DOMContentLoaded", (event) => {
    var btn = new Button(300,60,"Узнать подробнее");
    btn.ShowBtn();
    var btn2 = new BootstrapButton("red",300,60,"Узнать подробнее");
    btn2.ShowBtn();
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