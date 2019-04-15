/*
	mmp 310 week 9
	spaceship object
*/

var spaceship;

var asteroids = [];

var lasers = [];

var astriodProb = 98;




function preload() {
	// if you have images
    
    img1 = loadImage("cannon.jpeg"); 
    img2 = loadImage("underwater.jpg");
    img3 = loadImage("sub.png");
}


function setup() {
    createCanvas(windowWidth, windowHeight);
    
    noStroke();
    imageMode(CENTER);
    spaceship = new Spaceship();
}

function draw() {
    background(10);

     
    image(img2, width/2, height/2, width, height); 
    
    
    
    
    // adds random asteroid
    if (random(100) > Asteroid) {
        // create an asteroid
        asteroids.push(new Asteroid());
    }
    

    	// add lasers
	if (keyIsDown(32) || keyIsDown(88)) {
		lasers.push(new Laser());
lasers.push(new Laser());
//        lasers.push(new Laser2());
	}
    
    
   	spaceship.controls();
	spaceship.display();
	spaceship.update();
      

    
    for (let i = 0; i < asteroids.length; i++) {
        asteroids[i].display();
        asteroids[i].update();
        
        
  // collision with spaceship
		if (asteroids[i].collide(spaceship)) {
			// end game
			textAlign(CENTER, CENTER);
			textSize(100);
			fill('orange');
			text('YOU DIED', width/2, height/2);
			noLoop();
		}
		
		// detect all lasers
		for (let j = 0; j < lasers.length; j++) {
			if (asteroids[i].collide(lasers[j])) {
				asteroids[i].died = true;
				lasers[j].died = true;
                Asteroid -=0.1; // increasinf prob 
			}
		}
	}
	
	for (let i = 0; i < lasers.length; i++) {
		lasers[i].display();
		lasers[i].update();
        
	}
	
	// clean up dead asteroids and lasers
	for (let i = 0; i < asteroids.length; i++) {
		if (asteroids[i].died) {
			asteroids[i].remove(asteroids);
		}
	}
	
	for (let i = 0; i < lasers.length; i++) {
		if (lasers[i].died) {
			lasers[i].remove(lasers);
            
		}
	}
}

