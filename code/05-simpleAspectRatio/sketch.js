var w = 640;
var h = 480;

function setup() {
  createCanvas(w, h);
}

function draw() {
  background(20, 15, 20, 5); // r, g, b, a (a is alpha transparency)
  fill(150, 125, 100);
  //BAD EXAMPLE - NO ASPECT RATIO
  //rect(320-50, 240-50, 100, 100);
  
  // BETTER MAYBE LAZY EXAMPLE
  rect(w/2-w/8, h/2-h/8, w/4, h/4);

  //BETTER WAY
  var recX = w/2; // Center width
  var recY = h/2; // Center height
  var recW = w/8; // rect width
  var recH = h/8; // rect height

  fill(100, 125, 150);
  //NOTE: -recW*0.5 will shift to center
  rect(recX-recW*0.5, recY-recH*0.5, recW, recH);
}