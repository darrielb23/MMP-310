/*
	asteroid class
*/

class Asteroid extends Entity {
	constructor() {
        
        super(random(width), -100); 
		this.speed = {
			x: random(-1, 1),
			y: random(18)
		};  
	}
	
	display() {
        
     image(img1, this.x, this.y, this.size); 
        
    
//		fill("red");
//		noStroke();
//		ellipse(this.x, this.y, this.size);
	}
	
	update() {
		this.x += this.speed.x;
		this.y += this.speed.y;
	}
	
//	collide() {
//		var d = dist(this.x, this.y, spaceship.x, spaceship.y);
//		if (d < this.size / 2) {
//			textSize(100);
//			textAlign(CENTER, CENTER);
//			fill('red');
//			text("GAME OVER", width/2, height/2);
//			noLoop();	
//		}
//	}
}


//
//class Special extends Asteroid {
//    display() {
//        fill('pink')
//        ellipse(this.x, this.y, this.size);
//    }
//}