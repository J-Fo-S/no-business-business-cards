// this "sets up" our program - happens only ONCE
function setup() {
	//xy dimension in pixels of our "canvas"
	createCanvas(640, 480); 

	//background color in greyscale (0-255)
	//background(30);

	//for error and testing
	//console.log("Yo, I'm the set up and I only work once");
	
}

// This "draws" our code - it happens REPEATEDLY
function draw() {
	
	//background color in greyscale (0-255)
	background(30);

	//console.log("hey, I draw and I loop continuously");

	// draws a circle x,y,w,[h]
	//ellipse(200, 200, 200);

	//"fill" shape with color, can be greyscale, greyscale w/alpha, rgb, etc.
	// has many options for params - see reference page!
	// rgb example takes r, g, b param args values from 0-255
	fill(255, 0, 0);

	// draws a rectangle x,y,w,h
	// mouseX, mouseY recognize mouse positions as xy coords
	rect(mouseX, mouseY, 200, 200);
}