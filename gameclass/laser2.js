/*
	laser class
*/

class Laser extends Entity {
    
	constructor(x, y) {
        super(spaceship.x + 94, spaceship.y + 81);
        (spaceship.x - 126, spaceship.y + 81);
        this.speed.y = -10; 
	} 
	
	display() {
		fill('red');
		noStroke();
		ellipse (this.x, this.y, 10, 25);   
	}
}




//
//class Laser extends Entity {
//  constructor(x, y) {
//    super(spaceship.x + x, spaceship.y + y);
//    this.speed.y = -10;
//}