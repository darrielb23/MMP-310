/*
	mmp 310 week 9
	spaceship object
*/

var spaceship = { 
	x: 390, 
	y: 200,
	size: 60,
    w: 22,
    h: 85,
	speed: 5,
	display: function () {
		fill('lightskyblue');
		triangle(
			this.x, this.y, 
			this.x - this.size, this.y + this.size * 2, 
			this.x + this.size, this.y + this.size * 2
		);
            
        fill('orange');
        
        rect(this.x + 50, this.y + 35, this.w, this.h);   // right
        
        rect(this.x - 73, this.y + 35, this.w, this.h); // left
         
	},
    
	update: function () {
		if (keyIsDown(RIGHT_ARROW)) {
			this.x += this.speed;
		}
	
		if (keyIsDown(LEFT_ARROW)) {
			this.x -= this.speed;
		}
        
        if (keyIsDown(UP_ARROW)) {
			this.y -= this.speed;
		}
        
        if (keyIsDown(DOWN_ARROW)) {
			this.y += this.speed;
		} 
        
	}
};

var asteroids = [];


function setup() {
	createCanvas(windowWidth, windowHeight);
	noStroke();
    
    // position the spaceship at start of game
	spaceship.x = width/2;
	spaceship.y = height - 200;
}

function draw() {
	background(10);
    
    // adds random asteroid
	if (random(100) > 90) {
		// create an asteroid
		asteroids.push(new Asteroid());
	}
	
	spaceship.display();
	spaceship.update();
    
    
	for (let i = 0; i < asteroids.length; i++) {
		asteroids[i].display();
		asteroids[i].update();
		asteroids[i].collide();
	}
}






