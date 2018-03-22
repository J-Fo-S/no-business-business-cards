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
var cardXmin = 0 + bleedPadW;
var cardXmax = cardW;
var cardYmin = 0 + bleedPadH;
var cardYmax = cardH;

// dims for centered padding area
var padXmin = cardXmin + bleedPadW;
var padXmax = cardXmax - bleedPadW;
var padYmin = cardYmin + bleedPadH;
var padYmax = cardYmax - bleedPadH;


function setup() {
	createCanvas(cardW+bleedPadW, cardH+bleedPadH); //width and height of my canvas
	stroke("black");
	rect(bleedXmin, bleedYmin, bleedXmax-1, bleedYmax-1); // minus one to make it visible inside canvas
	stroke("red");
	rect(cardXmin, cardYmin, cardXmax -  bleedPadW, cardYmax - bleedPadH); // centered
	stroke("green");
	rect(padXmin, padYmin, padXmax - bleedPadW*2, padYmax - bleedPadH*2); // centered

	// careful! see textSize is used by p5.js library, so don't name it as a var
	var fontSizeA = Math.round(cardH/14); // maintain aspect ratio with text too
	textSize(fontSizeA);
	text("A. Person", padXmin+bleedPadW*2, padYmax*0.6);
	fill(0, 102, 153);
	text("CEO", padXmin+bleedPadW*2, (padYmax*0.6)+fontSizeA);
	fill(0, 102, 153, 51);
	text("P: 0987654321", padXmin+bleedPadW*2, (padYmax*0.6)+(fontSizeA*2));
	fill(102, 0, 153, 51);
	text("E: a.person@a.person.me", padXmin+bleedPadW*2, (padYmax*0.6)+(fontSizeA*3));
	fill(102, 153, 0, 51);
	text("W: a.person.me", padXmin+bleedPadW*2, (padYmax*0.6)+(fontSizeA*4));
	
}

function draw() {

}