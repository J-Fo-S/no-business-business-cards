// Now we are going to use "instance mode" to create multiple separate drawings in one program
// First, we attach all global variables to one object - this will simplify our code visually
var globals = {};
// Print dimensions - good to keep ratios as variables throughout!
globals.cardH = 400;
globals.cardW = Math.round(globals.cardH*1.636); // maintains aspect ratio throughout

// additional bleed and padding %
// use native JavaScript object Math to round - can't have decimals for pixels
globals.bleedPadW = Math.round(globals.cardW*0.05);
globals.bleedPadH = Math.round(globals.cardH*0.05);

// dimensions for bleed area
globals.bleedXmin = 0;
globals.bleedXmax = globals.cardW + globals.bleedPadW;
globals.bleedYmin = 0;
globals.bleedYmax = globals.cardH + globals.bleedPadH;

// dims for centered card area
globals.cardXmin = 0 + globals.bleedPadW;
globals.cardXmax = globals.cardW;
globals.cardYmin = 0 + globals.bleedPadH;
globals.cardYmax = globals.cardH;

// dims for centered padding area
globals.padXmin = globals.cardXmin + globals.bleedPadW;
globals.padXmax = globals.cardXmax - globals.bleedPadW;
globals.padYmin = globals.cardYmin + globals.bleedPadH;
globals.padYmax = globals.cardYmax - globals.bleedPadH;

// here is the 
new p5(function(p) {
  "use strict";
 
  p.setup = function() {
	p.createCanvas(globals.cardW+globals.bleedPadW, globals.cardH+globals.bleedPadH); // width and height of my canvas
	p.stroke("black");
	p.rect(globals.bleedXmin, globals.bleedYmin, globals.bleedXmax-1, globals.bleedYmax-1); // minus one to make it visible inside canvas
	p.stroke("red");
	p.rect(globals.cardXmin, globals.cardYmin, globals.cardXmax - globals.bleedPadW, globals.cardYmax - globals.bleedPadH); // centered
	p.stroke("green");
	p.rect(globals.padXmin, globals.padYmin, globals.padXmax - globals.bleedPadW*2, globals.padYmax - globals.bleedPadH*2); // centered
	p.background(15, 25, 255, 10);
	p.noStroke();
	p.rectMode(p.CENTER);

	// careful! see textSize is used by p5.js library, so don't name it as a var
	var fontSizeA = Math.round(globals.cardH/10);
	p.fill(55);
	p.textSize(fontSizeA);
	p.text("A. Corporation", globals.padXmin+globals.bleedPadW, globals.padYmax*0.3)
	var fontSizeNorm = Math.round(globals.cardH/14); // maintain aspect ratio with text too
	p.fill(75);
	p.textSize(fontSizeNorm);
	p.text("A. Person", globals.padXmin+globals.bleedPadW, globals.padYmax*0.55);
	p.fill(0, 102, 153); // note color values - try to improve with cymk-style colors
	p.text("CEO of A. People", globals.padXmin+globals.bleedPadW, (globals.padYmax*0.55)+fontSizeA);
	p.fill(0, 102, 153, 51); // note 4th value is alpha (transparency)
	p.text("P: 0987654321", globals.padXmin+globals.bleedPadW, (globals.padYmax*0.55)+(fontSizeA*2));
	p.fill(102, 0, 153, 51);
	p.text("E: a.person@a.people.me", globals.padXmin+globals.bleedPadW, (globals.padYmax*0.55)+(fontSizeA*3));
	p.fill(102, 153, 0, 51);
	p.text("W: a.people.me", globals.padXmin+globals.bleedPadW, (globals.padYmax*0.55)+(fontSizeA*4));

	// create graphic for CEO figure
	p.fill(185);
	p.ellipse(globals.padXmax - (globals.bleedPadW*3), globals.padYmin + (globals.bleedPadH*2), globals.bleedPadH, globals.bleedPadW);
	p.fill(55);
	p.rectMode(p.CENTER); // center the rect at a location kind of like a circle instead of begining at a corner
	p.rect(globals.padXmax - (globals.bleedPadW*3), globals.padYmin + (globals.bleedPadH*4), globals.bleedPadW, globals.bleedPadH*2);
	p.rect(globals.padXmax - (globals.bleedPadW*4), globals.padYmin + (globals.bleedPadH*3), globals.bleedPadW, globals.bleedPadH);
	p.rect(globals.padXmax - (globals.bleedPadW*2), globals.padYmin + (globals.bleedPadH*3), globals.bleedPadW, globals.bleedPadH);
	p.fill(255, 0, 0, 15);
	p.quad(globals.padXmax - (globals.bleedPadW*3), globals.padYmin + (globals.bleedPadH*2.3), globals.padXmin, globals.padYmin, globals.padXmin+globals.bleedPadW, globals.padYmax*0.6, globals.padXmin+globals.bleedPadW, globals.padYmax);

	// create graphic not CEO figures
	for (var i=0; i<6; i++) {
		p.push();
		p.translate(globals.padXmax - (globals.bleedPadW*5.5), globals.padYmax - (globals.bleedPadH*11));
		p.rotate(p.TWO_PI*i);
		p.fill(75);
		p.ellipse(0+globals.bleedPadW*i, 0, globals.bleedPadH, globals.bleedPadW);
		p.fill(0, 102, 153); // note color values - try to improve with cymk-style colors
		p.rectMode(p.CENTER); // center the rect at a location kind of like a circle instead of begining at a corner
		p.rect(0+globals.bleedPadW*i, 0 + (globals.bleedPadH*2), globals.bleedPadW, globals.bleedPadH*2);
		p.rect(globals.padXmax - (globals.bleedPadW*4), globals.padYmin + (globals.bleedPadH*4), globals.bleedPadW, globals.bleedPadH);
		p.rect(globals.padXmax - (globals.bleedPadW*2), globals.padYmin + (globals.bleedPadH*4), globals.bleedPadW, globals.bleedPadH);
		p.pop();
	}

	// more not-CEO figures - Only need to change 3 parameters
	for (var i=0; i<5; i++) {
		p.push();
		p.translate(globals.padXmax - (globals.bleedPadW*4.5), globals.padYmax - (globals.bleedPadH*7));
		p.rotate(p.TWO_PI*i);
		p.fill(75);
		p.ellipse(0+globals.bleedPadW*i, 0, globals.bleedPadH, globals.bleedPadW);
		p.fill(0, 102, 153, 51); // note 4th value is alpha (transparency)
		p.rectMode(p.CENTER); // center the rect at a location kind of like a circle instead of begining at a corner
		p.rect(0+globals.bleedPadW*i, 0 + (globals.bleedPadH*2), globals.bleedPadW, globals.bleedPadH*2);
		p.rect(globals.padXmax - (globals.bleedPadW*4), globals.padYmin + (globals.bleedPadH*4), globals.bleedPadW, globals.bleedPadH);
		p.rect(globals.padXmax - (globals.bleedPadW*2), globals.padYmin + (globals.bleedPadH*4), globals.bleedPadW, globals.bleedPadH);
		p.pop();
	}

	// more not-CEO figures - Only need to change 3 parameters
	for (var i=0; i<4; i++) {
		p.push();
		p.translate(globals.padXmax - (globals.bleedPadW*3.5), globals.padYmax - (globals.bleedPadH*3));
		p.rotate(p.TWO_PI*i);
		p.fill(75);
		p.ellipse(0+globals.bleedPadW*i, 0, globals.bleedPadH, globals.bleedPadW);
		p.fill(102, 0, 153, 51);
		p.rectMode(p.CENTER); // center the rect at a location kind of like a circle instead of begining at a corner
		p.rect(0+globals.bleedPadW*i, 0 + (globals.bleedPadH*2), globals.bleedPadW, globals.bleedPadH*2);
		p.rect(globals.padXmax - (globals.bleedPadW*4), globals.padYmin + (globals.bleedPadH*4), globals.bleedPadW, globals.bleedPadH);
		p.rect(globals.padXmax - (globals.bleedPadW*2), globals.padYmin + (globals.bleedPadH*4), globals.bleedPadW, globals.bleedPadH);
		p.pop();
	}

	
}
 
}, "sketch01");