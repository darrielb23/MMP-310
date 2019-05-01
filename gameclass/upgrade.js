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
	
	update() {
		this.x += this.speed.x;
		this.y += this.speed.y;
	}
	
	collide() {
        
        
        
        
        
		var d = dist(this.x, this.y, spaceship.x, spaceship.y);
		if (d < this.size / 2) {
            
            laser.display 
            
			var lasersize	
            
            
            
            
		}
	}
}