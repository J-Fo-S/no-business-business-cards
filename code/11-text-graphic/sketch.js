// Print dimensions - good to keep ratios as variables throughout!
var cardH = 400;
var cardW = Math.round(cardH*1.636); // maintains aspect ratio throughout

// additional bleed and padding %
// use native JavaScript object Math to round - can't have decimals for pixels
var bleedPadW = Math.round(cardW*0.05);
var bleedPadH = Math.round(cardH*0.05);

// dimensions for bleed area
var bleedXmin = 0;
var bleedXmax = cardW + bleedPadW;
var bleedYmin = 0;
var bleedYmax = cardH + bleedPadH;

// dims for centered card area
var cardXmin = 0 + bleedPadW * 0.5;
var cardXmax = cardW;
var cardYmin = 0 + (bleedPadH * 0.5);
var cardYmax = cardH;

// dims for centered padding area
var padXmin = 0 + bleedPadW;
var padXmax = cardW - bleedPadW;
var padYmin = 0 + bleedPadH;
var padYmax = cardH - bleedPadH;


function setup() {
	createCanvas(cardW+bleedPadW, cardH+bleedPadH); // width and height of my canvas
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

	// create graphic for CEO figure
	fill(185);
	ellipse(padXmax - (bleedPadW*3), padYmin + (bleedPadH*2), bleedPadH, bleedPadW);
	fill(55);
	rectMode(CENTER); // center the rect at a location kind of like a circle instead of begining at a corner
	rect(padXmax - (bleedPadW*3), padYmin + (bleedPadH*4), bleedPadW, bleedPadH*2);
	rect(padXmax - (bleedPadW*4), padYmin + (bleedPadH*3), bleedPadW, bleedPadH);
	rect(padXmax - (bleedPadW*2), padYmin + (bleedPadH*3), bleedPadW, bleedPadH);
	fill(255, 0, 0, 15);
	quad(padXmax - (bleedPadW*3), padYmin + (bleedPadH*2.3), bleedPadW, bleedPadH, padXmin+bleedPadW, padYmax*0.6, padXmin+bleedPadW, padYmax+bleedPadH);

	// create graphic not CEO figures
	for (var i=0; i<6; i++) {
		push();
		translate(padXmax - (bleedPadW*5.5), padYmax - (bleedPadH*11));
		rotate(TWO_PI*i);
		fill(75);
		ellipse(0+bleedPadW*i, 0, bleedPadH, bleedPadW);
		fill(0, 102, 153); // note color values - try to improve with cymk-style colors
		rectMode(CENTER); // center the rect at a location kind of like a circle instead of begining at a corner
		rect(0+bleedPadW*i, 0 + (bleedPadH*2), bleedPadW, bleedPadH*2);
		rect(padXmax - (bleedPadW*4), padYmin + (bleedPadH*4), bleedPadW, bleedPadH);
		rect(padXmax - (bleedPadW*2), padYmin + (bleedPadH*4), bleedPadW, bleedPadH);
		pop();
	}

	// more not-CEO figures - Only need to change 3 parameters
	for (var i=0; i<5; i++) {
		push();
		translate(padXmax - (bleedPadW*4.5), padYmax - (bleedPadH*7));
		rotate(TWO_PI*i);
		fill(75);
		ellipse(0+bleedPadW*i, 0, bleedPadH, bleedPadW);
		fill(0, 102, 153, 51); // note 4th value is alpha (transparency)
		rectMode(CENTER); // center the rect at a location kind of like a circle instead of begining at a corner
		rect(0+bleedPadW*i, 0 + (bleedPadH*2), bleedPadW, bleedPadH*2);
		rect(padXmax - (bleedPadW*4), padYmin + (bleedPadH*4), bleedPadW, bleedPadH);
		rect(padXmax - (bleedPadW*2), padYmin + (bleedPadH*4), bleedPadW, bleedPadH);
		pop();
	}

	// more not-CEO figures - Only need to change 3 parameters
	for (var i=0; i<4; i++) {
		push();
		translate(padXmax - (bleedPadW*3.5), padYmax - (bleedPadH*3));
		rotate(TWO_PI*i);
		fill(75);
		ellipse(0+bleedPadW*i, 0, bleedPadH, bleedPadW);
		fill(102, 0, 153, 51);
		rectMode(CENTER); // center the rect at a location kind of like a circle instead of begining at a corner
		rect(0+bleedPadW*i, 0 + (bleedPadH*2), bleedPadW, bleedPadH*2);
		rect(padXmax - (bleedPadW*4), padYmin + (bleedPadH*4), bleedPadW, bleedPadH);
		rect(padXmax - (bleedPadW*2), padYmin + (bleedPadH*4), bleedPadW, bleedPadH);
		pop();
	}

	
}

function draw() {


}