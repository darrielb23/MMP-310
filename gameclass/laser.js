/*
	laser class
*/


   
class Laser extends Entity {
    
	constructor(x, y) {
         super(spaceship.x + x, spaceship.y + y);
        this.height = 25;
        this.width = 10;
        
        this.speed.y = -10; 
	} 
	
	display() {
		fill('red');
		noStroke();
		ellipse (this.x, this.y, this.height, this.width);   
	}
}

