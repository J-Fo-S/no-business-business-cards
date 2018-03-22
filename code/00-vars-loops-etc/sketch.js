
// Demonstrates variables, declarations, functions, loops, conditions, and scope

// this is a global variable with program-wode scope
var globalVar;
var w = 600;
var h = 480;

function setup() {

	// we can initialize variables when delaring or later
	globalVar = 0;
	createCanvas(w, h);
	
}

// This "draws" our code - it happens REPEATEDLY
function draw() {
	background(30);
	// this is a local variable with scope limited to setup()
	// I will use it for the ratio of width to height
	var localVar = w/h;

	// for loops will "iterate" until a condition is met
	// useful for drawing x and y axes
	for (var i = 0; i < w; i+=Math.round(50*localVar)) {
		for (var j = 0; j < h; j+= 50) {
			fill(i%255, j%200, globalVar%255);
			strokeWeight(globalVar%20);
			if (i >= w/2) {
				rect(i, j, 25, 25);
			} else if (j >= h/2) {
				fill(i%255, globalVar%255, j%255);
				ellipse(i, j, 25, 25);
			} else {
				fill(globalVar%255, i%255, j%255);
				triangle(i, j, i+25, j, i, j+25);
			}
			// counts endlessly
			globalVar = globalVar + 0.01;
		}
	}

}