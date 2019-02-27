/*
	mmp 310 week 4
	loop example with random
*/

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);
	rectMode(CENTER);
	noStroke();
	textAlign(100);
	
	 //making a row of self portraits
    
	let faceSize = random(100, 200);
	let increment = faceSize;
	for (let x = 0; x <= width; x += increment) {
		
		let y = height/2 + random(-100, 100);
		
		faceSize = random(50, 100);
		
		let r = random(255);
		let g = random(200, 255);
		let b = random(255);
		fill(r, g, b);
        
		ellipse(x , y, faceSize); // face
        
        
		
		var randomChoice = random(100); // making random choices 
		if (randomChoice > 2) {
			fill('red');
		} else if (randomChoice > 1) {
			fill('black');
		} 
		
		let eyeSize = faceSize / 2;
		
		if (random(2) > 1) {
            
            
		    rect(x + eyeSize, y - eyeSize, eyeSize, eyeSize); // left eye
			rect(x - eyeSize, y - eyeSize, eyeSize, eyeSize); // right eye
		} else {
            
            
            
			rect(x + eyeSize, y - eyeSize, eyeSize, eyeSize); // left eye
			rect(x - eyeSize, y - eyeSize, eyeSize, eyeSize); // right eye
		}
		 

    
       //  mouth
    
    
		fill('yellow');
		let mouthSize = faceSize / 2;
		rect(x, y + mouthSize / 2 + random(20), mouthSize, mouthSize / 4);
		
		// text('x: ' + x, x, y); // x label
	}
	
}







