
var w, h, ratio;
var count = 0;
var sinMotionX, cosMotionY, sinMotionY, cosMotionX;
var i;

function setup() {
	w = windowWidth;
	h = windowHeight;
	ratio = w/h;
	createCanvas(w, h); //width and height of my canvas
	//noStroke();
	
}

function draw() {
	background(100, 100, 100, 10);
	for (i = 3; i < 21; i++){
		sinMotionX = w*0.5-mouseX*0.5+((sin(count*i)+1)*0.5*mouseX);
		cosMotionY = h*0.5-mouseY*0.5+(cos(count*i)+1)*0.5*mouseY;
		sinMotionY = h*0.5-mouseY*0.5+(sin(count*i)+1)*0.5*mouseY;
		cosMotionX = w*0.5-mouseX*0.5+(cos(count*i)+1)*0.5*mouseX;
		fill(10*i+count%100, 0, 0, 50-count%50);
		stroke(0, 0, 10*i+count%100, count%50);
		strokeWeight(i*mouseX/21-21);
		ellipse(sinMotionX, h-cosMotionY/i*4, i*mouseX/21, i+mouseY*0.25/i); 
		fill(0, 0, 10*i+count%100, 50-count%50);
		stroke(10*i+count%100, 0, 0, count%50);
		ellipse(cosMotionX, sinMotionY/i*4, i*mouseX/21, i+mouseX*0.25/i);
	}

count += 0.001;
//console.log(count);

}