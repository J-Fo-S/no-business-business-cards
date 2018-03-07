

function setup() {
	createCanvas(640, 480); //width and height of my canvas
	
}

function draw() {
	background(random(255)); 
	line(random(mouseY), random(mouseX), mouseX, mouseY); 
	rect(mouseX, mouseY, random(mouseY), random(mouseX));

}