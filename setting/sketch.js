/*
MMP310 week 1
Interactive Story
Setting Sketch
By Darriel
*/


// global variables


var g1;
var g2;
var g3;
var g4;
var g5;
var g6;
var g7;

//var venusX = 200;
//var venusY = 200;
//var venusSize2 = 200;
//var venusSize = 200 * 4;
//var venusEyeSize = venusSize2 / 10;
//
//var marsX = 930;
//var marsY = 450;
//var marsSize = 350;
//var marsEyeSize = marsSize / 10;
//
//
//var moonX = 600;
//var moonY = 100;
//var moonSize = 100;
//
//var story = "Battle for the universe";
//var story2 = "Click A, B and C to change setting";
//var storyX;
//var storyY;
//
//
//// settings: day, evening, night - lightblue, mediumslateblue, darkblue
//var currentSetting = "day";
//
//var venusWasClicked = false;
//var marsWasClicked = false;
//
//var sunX = 740;
//var sunY = 100;
//var sunSize = 150;




function preload() {
    g1 = loadImage("galax1.jpg");
    g2 = loadImage("galax2.jpg");
    g3 = loadImage("galax3.jpg");
    g4 = loadImage("galax4.jpg");
    g5 = loadImage("galax5.jpg");
    g6 = loadImage("galax6.jpg");
    g7 = loadImage("galax7.jpg");
}


function setup() {
    createCanvas(windowWidth, windowHeight);
    textSize(40);
    textAlign(CENTER, CENTER);
    storyX = width / 2;
    storyY = height - 50;
    rectMode(CENTER);

}

function draw() {
    noStroke();
    background(175);

    // sun setting
    if (key == 'a') {
        image(g1, 0, 0, width, height);
        venus(); // first character venus



        stroke(255);
        text(story, storyX, storyY);



        //     third character mars

        //body


        noFill();

        fill('black');
        noStroke();
        ellipse(marsX, marsY, marsSize);
        stroke(0);


        // eye

        fill('yellow');
        ellipse(marsX + marsEyeSize * 3, marsY - marsEyeSize, marsEyeSize); // left eye
        ellipse(marsX, marsY - marsEyeSize, marsEyeSize); // right eye 

        // pupils

        fill('orange');

        ellipse(marsX + marsEyeSize * 3, marsY - marsEyeSize + 10, marsEyeSize / 3); // left pipil
        ellipse(marsX, marsY - marsEyeSize + 10, marsEyeSize / 3); // right pupil


        // mouth


        fill('yellow');

        rect(marsX + 40, marsY + 30, marsSize - 220, 17);




        // mars spots


        noFill();

        fill('grey');
        noStroke();
        ellipse(marsX - 120, marsY - 60, marsSize / 5); //spot 1
        stroke(0);

        noFill();

        fill('grey');
        noStroke();
        ellipse(marsX + 80, marsY - 110, marsSize / 6); //spot 2
        stroke(0);


        fill('grey');
        noStroke();
        ellipse(marsX - 80, marsY + 90, marsSize / 8); //spot 3
        stroke(0);


        fill('grey');
        noStroke();
        ellipse(marsX + 70, marsY + 100, marsSize / 5); //spot 4
        stroke(0);
        //    
        //    
        //    
        fill('yellow');
        noStroke();
        ellipse(marsX + 78, marsY, marsSize / 70); //spot 5
        stroke(0);

        //    
        //    
        //   fill('red');
        //	noStroke();
        //	ellipse(marsX - 20, marsY - 100, marsSize / 10); //spot 6
        //	stroke(0); 



    } else if (key == 'b') {


        // first character venus
        //body
        noFill();
        fill('LIGHTSKYBLUE');
        noStroke();
        ellipse(venusX, venusY, venusSize2);
        stroke(0);

        //belt
        stroke('yellow');
        noFill(0);

        //    ellipse (venusX + 10, venusY +10, venusSize * 2, venusSize / 2);  // large belt full circle

        arc(venusX + 10, venusY + 10, venusSize2 * 2, venusSize2 / 2, -1, PI + 0.3); // large belts arc

        noFill(0);

        ellipse(venusX + 10, venusY + 10, venusSize2 * 1.8, venusSize2 / 2.6); // small belt circle

        //    arc (venusX + 10, venusY +10, venusSize * 2, venusSize / 2, -1, PI + 0.3);  // large belts arc

        // eye hider ellipse

        fill('lightskyblue');
        noStroke();
        ellipse(venusX, venusY - 20, venusSize2 - 4, 50);

        // eye

        fill('black');
        ellipse(venusX + venusEyeSize * 3, venusY - venusEyeSize, venusEyeSize); // left eye
        ellipse(venusX, venusY - venusEyeSize, venusEyeSize); // right eye 

        // pupil
        fill('yellow');
        ellipse(venusX + venusEyeSize * 3, venusY - venusEyeSize, venusEyeSize / 3); // left pipil
        ellipse(venusX, venusY - venusEyeSize, venusEyeSize / 3); // right pupil

        // mouth


        fill('black');
        rect(venusX + 40, venusY + 30, venusSize2 - 190, 17);



        // second character half moon



        fill('yellow');
        noStroke();
        arc(moonX, moonY, moonSize, moonSize, -HALF_PI, HALF_PI); // moon background
        fill(175);
        arc(moonX, moonY, moonSize / 2, moonSize, -HALF_PI, HALF_PI); // moon foreground
        noFill();
        stroke(0);
        arc(moonX, moonY, moonSize * 3 / 4, moonSize, -HALF_PI, HALF_PI); // moon contour



        stroke(255);
        text(story, storyX, storyY);




        //     third character mars

        //body


        noFill();

        fill('black');
        noStroke();
        ellipse(marsX, marsY, marsSize);
        stroke(0);


        // eye

        fill('yellow');
        ellipse(marsX + marsEyeSize * 3, marsY - marsEyeSize, marsEyeSize); // left eye
        ellipse(marsX, marsY - marsEyeSize, marsEyeSize); // right eye 

        // pupils

        fill('orange');

        ellipse(marsX + marsEyeSize * 3, marsY - marsEyeSize + 10, marsEyeSize / 3); // left pipil
        ellipse(marsX, marsY - marsEyeSize + 10, marsEyeSize / 3); // right pupil


        // mouth


        fill('yellow');

        rect(marsX + 40, marsY + 30, marsSize - 220, 17);




        // mars spots


        noFill();

        fill('grey');
        noStroke();
        ellipse(marsX - 120, marsY - 60, marsSize / 5); //spot 1
        stroke(0);

        noFill();

        fill('grey');
        noStroke();
        ellipse(marsX + 80, marsY - 110, marsSize / 6); //spot 2
        stroke(0);


        fill('grey');
        noStroke();
        ellipse(marsX - 80, marsY + 90, marsSize / 8); //spot 3
        stroke(0);


        fill('grey');
        noStroke();
        ellipse(marsX + 70, marsY + 100, marsSize / 5); //spot 4
        stroke(0);
        //    
        //    
        //    
        fill('yellow');
        noStroke();
        ellipse(marsX + 78, marsY, marsSize / 70); //spot 5
        stroke(0);

        //    
        //    
        //   fill('red');
        //	noStroke();
        //	ellipse(marsX - 20, marsY - 100, marsSize / 10); //spot 6
        //	stroke(0); 



    } else if (key == 'c' || key == "C") {




        // first character venus
        //body
        noFill();
        fill('LIGHTSKYBLUE');
        noStroke();
        ellipse(venusX, venusY, venusSize);
        stroke(0);

        //belt
        stroke('yellow');
        noFill(0);

        //    ellipse (venusX + 10, venusY +10, venusSize * 2, venusSize / 2);  // large belt full circle

        arc(venusX + 10, venusY + 10, venusSize * 2, venusSize / 2, -1, PI + 0.3); // large belts arc

        noFill(0);

        ellipse(venusX + 10, venusY + 10, venusSize * 1.8, venusSize / 2.6); // small belt circle

        //    arc (venusX + 10, venusY +10, venusSize * 2, venusSize / 2, -1, PI + 0.3);  // large belts arc

        // eye hider ellipse

        fill('red');
        noStroke();
        ellipse(venusX - 10, venusY - venusSize / 5.7, venusSize - 30, venusSize2 - 70);





        // eye

        fill('black');
        ellipse(venusX + venusEyeSize * 3, venusY - venusEyeSize, venusEyeSize); // left eye
        ellipse(venusX, venusY - venusEyeSize, venusEyeSize); // right eye 

        // pupil
        fill('yellow');
        ellipse(venusX + venusEyeSize * 3, venusY - venusEyeSize, venusEyeSize / 3); // left pipil
        ellipse(venusX, venusY - venusEyeSize, venusEyeSize / 3); // right pupil

        // mouth


        fill('black');
        rect(venusX + 40, venusY + 30, venusSize - 190, 17);


        stroke(255);
        text(story, storyX, storyY);




        // saturn one

        fill('red');
        noStroke();
        ellipse(venusX + 600, venusY - 90, venusSize2 - 25);
        stroke(0);

        // saturn two

        fill('red');
        noStroke();
        ellipse(venusX + 490, venusY + 220, venusSize2 - 25);
        stroke(0);

        // saturn three

        fill('red');
        noStroke();
        ellipse(venusX + 860, venusY + 320, venusSize2 - 25);
        stroke(0);







    } else {
        // no key is pressed (beginning)

        image(g1, 0, 0, width, height)

        fill('yellow');

        stroke(255);
        text(story, storyX, storyY - 310);
        text(story2, storyX, storyY - 610);
    }
}



