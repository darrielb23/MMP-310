/*
	laser class
*/


   
class Laser extends Entity {
    
	constructor(x, y) {
         super(spaceship.x + x, spaceship.y + y);
        
        
        
        this.speed.y = -10; 
	} 
	
	display() {
		fill('red');
		noStroke();
		ellipse (this.x, this.y, 10, 25);   
	}
}

