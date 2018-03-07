
function setup() {
  createCanvas(680, 480);
}

function draw() {
  stroke(mouseX%255, mouseY%255, (mouseX+mouseY)%255); // line color (r, g, b)
  line(5, 5, mouseX, mouseY);
  line(mouseX, mouseY, 675, 475);
  
}