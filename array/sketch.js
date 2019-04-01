/*
	array example
	week 7 mmp 310
*/

//var mars = [];

var mars = [60, 20, 100, 40, 60, 20, 100, 40]

function mousePressed() {

    var r = random(255);
    var t = random(255);
    var b = random(255);
    var c = color(r, g, b)


    mars.push([mouseX, mouseY, c]);
}






function setup() {
    createCanvas(windowWidth, windowHeight);

}

function draw() {

    background('pink');
    noStroke();


    for (let i = 0; i < mars.length; i++) {


        piano(mars[i][0], mars[i][1], 100, mars[i][2]);
        mars[i][1] += 2;
    }
}



function piano(x, y, s) {

    // sketch

    //    fill("yellow");


    stroke(5);
    fill("red");
    quad(38, 31, 86, 20, 69, 63, 30, 76);


    //    quad(x, y, x2, y2, x3, y3, x4, y4);

    text("I told you", x, y);


}








//// first character venus
//    
//    //body
//    
//    noFill();
//    
//	fill('LIGHTSKYBLUE');
//	noStroke();
//	ellipse(venusX, venusY, venusSize);
//	stroke(0);
//
//	
//    //belt
//    
//    
//    stroke('yellow');
//    noFill(0);
//    
//    //    ellipse (venusX + 10, venusY +10, venusSize * 2, venusSize / 2);  // large belt full circle
//    
//    arc (venusX + 10, venusY +10, venusSize * 2, venusSize / 2, -1, PI + 0.3);  // large belts arc
//      
//      
//    noFill(0);
//    
//    ellipse (venusX + 10, venusY +10, venusSize * 1.8, venusSize / 2.6); // small belt circle
//    
//    //    arc (venusX + 10, venusY +10, venusSize * 2, venusSize / 2, -1, PI + 0.3);  // large belts arc
//    
//    
//    
//    // eye hider ellipse
//    
//    fill('lightskyblue')
//    noStroke();
//    ellipse(venusX, venusY - 20, venusSize - 4, 50);
//
//
//    
//    // eye
//    
//    fill('black');
//   	ellipse(venusX + venusEyeSize * 3, venusY - venusEyeSize, venusEyeSize);  // left eye
//	ellipse(venusX, venusY - venusEyeSize, venusEyeSize); 		// right eye 
//    
//    // pupil
//    fill('yellow')
//    	ellipse(venusX + venusEyeSize * 3, venusY - venusEyeSize, venusEyeSize / 3);  // left pipil
//	ellipse(venusX, venusY - venusEyeSize, venusEyeSize / 3); 		// right pupil
//    
//    
//    
//    // mouth
//    
//    
//    fill('black')
//    
//    rect(venusX + 40 , venusY + 30, venusSize - 190, 17);
//    
//    
//
//    
//	// second character half moon
//    
//    
//    
//	fill('yellow');
//	noStroke();
//	arc(moonX, moonY, moonSize, moonSize, -HALF_PI, HALF_PI); // moon background
//	fill(175);
//	arc(moonX, moonY, moonSize / 2, moonSize, -HALF_PI, HALF_PI); // moon foreground
//	noFill();
//	stroke(0);
//	arc(moonX, moonY, moonSize * 3/4, moonSize, -HALF_PI, HALF_PI); // moon contour
//    
//	stroke(255);
//	text(story, storyX, storyY);
