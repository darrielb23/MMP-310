
/* global variables */
var bg = "white";
var g = 255;
var columns = 8;
var rows = 8;
var sw = 25;

function setup() {
	createCanvas(windowWidth, windowHeight/2);
	pattern();

	var button = createButton("Save Image");
	button.mousePressed(saveImage);
//	button.style('color', bg);
	button.style('font-family', 'monaco');
	button.id('my-button');
	button.class('interface');
//	button.position(0, height - 50);
	
	var generatePattern = createButton("Generate Pattern");
	generatePattern.mousePressed(pattern);
	generatePattern.class('interface');
//	generatePattern.position(180, height - 50);
	
	// columns slider
	createDiv("magnifeye button");
	var columnSlider = createSlider(8, 100, columns);
	columnSlider.input(setColumn);
	
	// rows 
	
	// bg color
	createDiv("random color change");
	var colorSlider = createSlider(0, 255, g);
	colorSlider.input(setColor);
	
	
}

function setColumn() {
	columns = this.value();
    sw = map(this.value(), 8, 100, 20, 8);
	pattern();
}

function setColor() {
	g = this.value();
	pattern();
}

function pattern() {
	background(0, g, 127); // color bk
	
	var w = width / columns;
	var h = height / rows;
	
	for (let x = 0; x <= width; x += w) {
		for (let y = 0; y <= height; y += h) {
			
			// drawing 
			
			strokeWeight(sw);
			var r = random(4);
			if (r > 3) {

            stroke(0);
            fill("blue");
            ellipse(x+w/2, y+h/2, w, h); //big blue circle
            
            fill("blue");
            ellipse(x + w/4, y + h/4, w/2, h/2); //top left circle
                
            } else if (r > 2) {
                
                stroke(0);
            fill("blue");
            ellipse(x+w/2, y+h/2, w, h); //big blue circle
            
            fill("blue");
            ellipse(x + w - w/4, y + h/4, w/2, h/2); //top right
            
          
            
			} else if (r > 1) { 
                
                stroke(0);
            fill("yellow");
            ellipse(x+w/2, y+h/2, w, h); //big blue circle
            
            fill("yellow");
                ellipse(x + w - w/4, y + h - h/4, w/2, h/2); //bottom right circle

				
			} else {
                
                stroke(0);
            fill("yellow");
            ellipse(x+w/2, y+h/2, w, h); //big blue circle
            
            fill("yellow");
                 ellipse(x + w/4, y + h - h/4, w/2, h/2); //bottom left 
                
				
			}
			
			// end drawing
		}
	}
}

function saveImage() {
	save("pattern.png");
}









