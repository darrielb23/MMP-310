/*
	mmp 310 week 9
	spaceship object
*/

var spaceship;

var asteroids = [];

var upgrade = [];

var lasers = [];

var laserSize = 1;

var laserColor = "red";

//var astriodProb = 98;




function preload() {
	// if you have images
    
    img1 = loadImage("cans.png"); 
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
    if (random(100) > 98) {
        // create an asteroid
        if (random(1) > 0.5)
            asteroids.push(new Asteroid());
        else 
            asteroids.push(new Special());
    }
    

    	// add lasers 
	if (keyIsDown(32) || keyIsDown(88)) {
		lasers.push(new Laser(94, 81));
        lasers.push(new Laser(-108,  81));
	}
    
    
   	spaceship.controls();
	spaceship.display();
	spaceship.update();
      

   for (let i = 0; i < upgrade.length; i++) {
     upgrade[i].display();
     upgrade[i].update();   
       
       
    // collision with spaceship
		if (upgrade[i].collide(spaceship)) {
            
            
			// laser enlargement
			textAlign(CENTER, CENTER);
			

            
            
            laserColoor = "yellow";
            
            laserSize += 2;
            
            
       
            
            
            
            
        }
   }
    
    
    
    
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
//                Asteroid -=0.1; // increasinf prob 
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

