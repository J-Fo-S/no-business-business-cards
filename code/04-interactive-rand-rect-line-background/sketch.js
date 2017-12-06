

function setup() {
	createCanvas(640, 480); //width and height of my canvas
	
}

function draw() {
	background(100); 
	line(0, 0, mouseX, mouseY); 
	rect(mouseX, mouseY, random(200), random(200));

}