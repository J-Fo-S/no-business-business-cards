

var count = 0;

function setup() {
	createCanvas(640, 480); //width and height of my canvas
	
}

function draw() {
	var sinMotionX =  (sin(count)+1)*0.5*mouseX;
	var cosMotionY = (cos(count)+1)*0.5*mouseY;
	var sinMotionY = (sin(count)+1)*0.5*mouseY;
	var cosMotionX = (cos(count)+1)*0.5*mouseX;
	background(100,random(255));
	rect(sinMotionX, cosMotionY, 50, 50); 
	rect(cosMotionX, sinMotionY, 50, 50);

count += 0.01;
console.log(count);

}