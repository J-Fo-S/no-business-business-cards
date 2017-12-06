var w = 640;
var h = 480;

function setup() {
  createCanvas(w, h);
}

function draw() {
  background(100);
  for(var i = 0; i < w; i+=50){
    for(var j = 0; j< h; j+=50){
      strokeWeight((i+j)%20);
  	  stroke(200, 150, 50);
  	 	line(w/2, h/2, i, j);
  	 	fill(50, 150, 200);
  	 	ellipse(i, j, 20, 20);
  	}
  }
}