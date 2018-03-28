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
	textSize(fontSizeA);
	text("A. Corporation", padXmin+bleedPadW, padYmax*0.3)
	var fontSizeNorm = Math.round(cardH/14); // maintain aspect ratio with text too
	fill(75);
	textSize(fontSizeNorm);
	text("A. Person", padXmin+bleedPadW, padYmax*0.55);
	fill(0, 102, 153); // note color values - try to improve with cymk-style colors
	text("CEO of A. People", padXmin+bleedPadW, (padYmax*0.55)+fontSizeA);
	fill(0, 102, 153, 51); // note 4th value is alpha (transparency)
	text("P: 0987654321", padXmin+bleedPadW, (padYmax*0.55)+(fontSizeA*2));
	fill(102, 0, 153, 51);
	text("E: a.person@a.people.me", padXmin+bleedPadW, (padYmax*0.55)+(fontSizeA*3));
	fill(102, 153, 0, 51);
	text("W: a.people.me", padXmin+bleedPadW, (padYmax*0.55)+(fontSizeA*4));

	noFill();
	stroke(20);
	strokeCap(SQUARE);
	strokeWeight(bleedPadW);
	translate(padXmax*0.95, padYmin);
	beginShape();
	vertex(0, 0+(padYmax*0.05));
	vertex(padXmax*0.1, padYmax*0.25);
	vertex(0, padYmax*0.45);
	endShape();
	beginShape();
	vertex(0, 0+(padYmax*0.55));
	vertex(-padXmax*0.1, padYmax*0.75);
	vertex(0, padYmax*0.95);
	endShape();
	
}

function draw() {


}