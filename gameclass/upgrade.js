/*
	upgrade class
*/

class Upgrade extends Entity {
	constructor() {
		this.x = random(width);
		this.y = -100;
		this.size = 100;
		this.speed = {
			x: random(-1, 1),
			y: random(15)
		};
	}
	
	display() {
		fill("red");
		noStroke();
		ellipse(this.x, this.y, this.size);
	}
	

	}
