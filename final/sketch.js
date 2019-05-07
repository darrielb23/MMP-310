var triangles = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
    noStroke();


    triangles.push(new Triangle(width / 3, height / 2, 50, 0.025));
    triangles.push(new Triangle(width / 2, height / 2, 100, 0.025));
    triangles.push(new Triangle(width / 3 * 2, height / 2, 50, 0.025));

    
    
    
//    (x, y, s, p, )
    
    
    triangles.push(new Triangle(width , height / 2, 50, 0.025));
    
    
    
    triangles.push(new Triangle(width /4, height / 2, 100, 0.025));
    triangles.push(new Triangle(width / 4 * 2, height / 2, 50, 0.025));
    triangles.push(new Triangle(width / 5, height / 2, 50, 0.025));
    
    
    
    
    triangles.push(new Triangle(width / 2, height / 2, 100, 0.025));
    triangles.push(new Triangle(width / 3 * 2, height / 2, 50, 0.025));






}

function draw() {
    background(0);
    for (let i = 0; i < triangles.length; i++) {
        triangles[i].display();
        triangles[i].update();
    }
}

class Triangle {
    constructor(x, y, s, p, ) {
        this.x = x;
        this.y = y;
        this.angle = 0;
        this.size = s;
        this.speed = p;

    }
    display() {
        push();
        translate(this.x, this.y);
        rotate(this.angle);



        stroke('rgb(0,255,0)');
        strokeWeight(7);
        noFill();


        triangle(0, -this.size,
            this.size, this.size,
            -this.size, this.size);

        pop();
    }
    update() {
        this.angle += this.speed; // speed
    }
}
