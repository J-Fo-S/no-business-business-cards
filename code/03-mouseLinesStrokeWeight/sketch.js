var w = 640;
var h = 480;

function setup() {
  createCanvas(w, h);
  background(20, 15, 20);
}

function draw() {
  background(20, 15, 20, 2);
  strokeWeight((mouseX*mouseY)/(2*(w+h)));
  stroke(mouseX%255, mouseY%255, (mouseX+mouseY)%255, (mouseX+mouseY)%155+100);
  line(0, 0, mouseX, mouseY);
    
}