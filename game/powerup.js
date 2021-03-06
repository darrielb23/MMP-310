/*
	asteroid2 class
*/

class Asteroid extends Entity {
	constructor() {
        super {
		this.x = random(width);   
		this.y = -100;
		this.size = 100;
		this.speed = {
			x: random(-1, 1),
			y: random(40)
		};  }
	}
	
	display() {
		fill("red");
		noStroke();
		ellipse(this.x, this.y, this.size);
	}
	
	update() {
		this.x += this.speed.x;
		this.y += this.speed.y;
	}
	
	collide() {
		var d = dist(this.x, this.y, spaceship.x, spaceship.y);
		if (d < this.size / 2) {
			textSize(100);
			textAlign(CENTER, CENTER);
			fill('red');
			text("GAME OVER", width/2, height/2);
			noLoop();	
		}
	}
}


//
//class Special extends Asteroid {
//    display() {
//        
//    }
//}