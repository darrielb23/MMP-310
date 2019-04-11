/*
	laser class
*/

class Laser extends Entity {
    
	constructor() {
        super(spaceship.x + 94, spaceship.y + 81);
        this.speed.y = -10; 
	} 
	
	display() {
		fill('red');
		noStroke();
		ellipse (this.x, this.y, 10, 25);   
	}
}