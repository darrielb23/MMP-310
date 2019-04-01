/* 
	nba championship rings data visuals 
	mmp 310 week 8
*/

var champs;
function preload() {
	champs = loadTable('champs.csv', 'csv', 'header');
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	textSize(50);
	textAlign(LEFT, CENTER);
	noStroke();
}

function draw() {
	background(51);
	
	for (let i = 0; i < champs.getRowCount(); i++) {
		let ast = champs.get(i, 'Count');
		let h = map(ast, 0, 11, 0, height);
		let w = 20;
		let x = i * (w + 3); // 10  + 1
		
		fill('green');
		if (mouseX > x && mouseX < x + w) {
			let player = champs.getString(i, 'Player').split('\\')[0];
			text(player, 100, 200);
			text(ast, 100, 250);
			fill('red');	
		}
		rect(x, height - h, w, h);
	}
}











