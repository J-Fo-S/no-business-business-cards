var w = 640;
var h = 480;

function setup() {
  createCanvas(w, h);
  rectMode(CENTER);
}

function draw() {
  background(20, 15, 20, 5); // r, g, b, a (a is alpha transparency)
  fill(mouseX%150+10, mouseY%125+50, mouseX+mouseY%100, 255-mouseY%200);
  stroke(100-mouseY%50, 100-mouseX%50, 100-mouseX+mouseY%50);
  ellipse(mouseX, mouseY, 10, 10);
  ellipse(w-mouseX, h-mouseY, 10, 10);
  ellipse(mouseY*(w/h), mouseX*(h/w), 10, 10);
  ellipse(w-mouseY*(w/h), h-mouseX*(h/w), 10, 10);
  
}

