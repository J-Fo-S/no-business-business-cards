// Print dimensions - good to keep ratios as variables throughout!
var cardH = 400;
var cardW = Math.round(cardH*1.636); // maintains aspect ratio throughout

// additional bleed and padding %
// use native JavaScript object Math to round - can't have decimals for pixels
var bleedPadW = Math.round(cardW*0.05);
var bleedPadH = Math.round(cardH*0.05);

// dimensions for bleed area
var bleedXmin = 0;
var bleedXmax = cardW + (bleedPadW*2);
var bleedYmin = 0;
var bleedYmax = cardH + (bleedPadH*2);

// dims for centered card area
var cardXmin = 0 + bleedPadW;
var cardXmax = cardW;
var cardYmin = 0 + bleedPadH;
var cardYmax = cardH;

// dims for centered padding area
var padXmin = cardXmin + bleedPadW;
var padXmax = cardXmax - bleedPadW*2;
var padYmin = cardYmin + bleedPadH;
var padYmax = cardYmax - bleedPadH*2;


function setup() {
	createCanvas(bleedXmax, bleedYmax); //width and height of my canvas
	stroke("black");
	rect(bleedXmin, bleedYmin, bleedXmax-1, bleedYmax-1); // minus one to make it visible inside canvas
	stroke("red");
	rect(cardXmin, cardYmin, cardXmax, cardYmax); // centered
	stroke("green");
	rect(padXmin, padYmin, padXmax, padYmax); // centered
	background(15, 25, 255, 10);
	noStroke();

	// careful! see textSize is used by p5.js library, so don't name it as a var
	var fontSizeA = Math.round(cardH/10);
	fill(55);
	textStyle(ITALIC);
	textSize(fontSizeA);
	text("A. Corporation", padXmin+bleedPadW*1.34, padYmax*0.3)
	var fontSizeNorm = Math.round(cardH/14); // maintain aspect ratio with text too
	fill(75);
	textStyle(NORMAL)
	textSize(fontSizeNorm);
	text("A. Person", padXmin+bleedPadW*0.75, padYmax*0.55);
	fill(0, 102, 153); // note color values - try to improve with cymk-style colors
	text("CEO of A. People", padXmin+bleedPadW*0.75, (padYmax*0.55)+fontSizeA);
	fill(0, 102, 153, 51); // note 4th value is alpha (transparency)
	text("P: 0987654321", padXmin+bleedPadW*0.75, (padYmax*0.55)+(fontSizeA*2));
	fill(102, 0, 153, 51);
	text("E: a.person@a.people.me", padXmin+bleedPadW*0.75, (padYmax*0.55)+(fontSizeA*3));
	fill(102, 153, 0, 51);
	text("W: a.people.me", padXmin+bleedPadW*0.75, (padYmax*0.55)+(fontSizeA*4));

	for (var i = 0; i <= HALF_PI/2; i+=0.1){
		noFill();
		stroke(200-i*100, i*200, 200, 100-i*100);
		strokeCap(ROUND);
		strokeWeight(bleedPadW);
		push();
		translate(padXmax*0.95, padYmax*0.35);
		rotate(i);
		beginShape();
		var x1 = 0; 
		var y1 = 0;
		var x2 = padXmax*0.1; 
		var y2 = padYmax*0.15;
		var x3 = padXmax*0.2; 
		var y3 = padYmax*0.425;
		var x4 = 0; 
		var y4 = padYmax*0.43;
		bezier(x1, y1, x2, y2, x3, y3, x4, y4);
		endShape();
		pop();

		stroke(230-i*100, i*200, 100-i*100, 100-i*100);
		push();
		translate(padXmax*0.88, padYmax*1.05);
		rotate(i);
		beginShape();
		y1 = -y1;
		x2 = -x2; 
		y2 = -y2;
		x3 = -x3; 
		y3 = -y3;
		y4 = -y4;
		bezier(x1, y1, x2, y2, x3, y3, x4, y4);
		endShape();
		pop();

		noFill();
		stroke(0, 150-i*100, 200-i*100, 100-i*100);
		strokeCap(SQUARE);
		strokeWeight(bleedPadW);
		push();
		translate(padXmax*0.95, padYmax*0.25);
		rotate(i);
		beginShape();
		var xc = 0-padXmax*0.035;
		var yc = 0+padYmax*0.005;
		var wc = bleedPadW;
		var hc = bleedPadH;
		ellipse(xc, yc, wc, hc);
		endShape();
		pop();
	}
	
}

function draw() {


}