var triangles = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
    noStroke();
  
/*
    triangles.push(new Triangle(width / 5, 200, 50, 0.025));
    triangles.push(new Triangle(width / 5, 200, 50, -0.025));

    triangles.push(new Triangle(width / 5, 400, 50, 0.025));
    triangles.push(new Triangle(width / 5, 400, 50, -0.025));

    triangles.push(new Triangle(width / 5, 600, 50, 0.025));
    triangles.push(new Triangle(width / 5, 600, 50, -0.025));

    triangles.push(new Triangle(width / 3, 200, 50, 0.025));
    triangles.push(new Triangle(width / 3, 200, 50, -0.025));

    triangles.push(new Triangle(width / 3, 400, 50, 0.025));
    triangles.push(new Triangle(width / 3, 400, 50, -0.025));

    triangles.push(new Triangle(width / 3, 600, 50, 0.025));
    triangles.push(new Triangle(width / 3, 600, 50, -0.025));

    triangles.push(new Triangle(width / 2, 200, 50, 0.025));
    triangles.push(new Triangle(width / 2, 200, 50, -0.025));

    triangles.push(new Triangle(width / 2, 400, 50, 0.025));
    triangles.push(new Triangle(width / 2, 400, 50, -0.025));

    triangles.push(new Triangle(width / 2, 600, 50, 0.025));
    triangles.push(new Triangle(width / 2, 600, 50, -0.025));
*/
    var columns = 6;
    var w = width / columns;
    
    var rows = 4;
    var h = height / rows;
    
    for (let x = w; x < width - w/2; x += w) {
        for (let y = h; y < height - h/2; y += h) {
            triangles.push( new Triangle(x, y, 50, 0.025) );
//            triangles.push( new Triangle(x, y, 50, -0.025) );
        }
    }
    
    

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
        
        stroke('rgb(0,255,0)');
        strokeWeight(7);
        noFill();
        
        
        push();
        translate(this.x, this.y);
        rotate(this.angle);
       
        triangle(0, -this.size,
            this.size, this.size,
            -this.size, this.size);

        pop();
        
        push();
        translate(this.x, this.y);
        rotate(-this.angle);
       
        triangle(0, -this.size,
            this.size, this.size,
            -this.size, this.size);

        pop();
    }
    update() {
        this.angle += this.speed; // speed
    }
}
