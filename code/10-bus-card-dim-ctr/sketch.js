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
	createCanvas(cardW+bleedPadW, cardH+bleedPadH); //width and height of my canvas
	stroke("black");
	rect(bleedXmin, bleedYmin, bleedXmax-1, bleedYmax-1); // minus one to make it visible inside canvas
	stroke("red");
	rect(cardXmin, cardYmin, cardXmax, cardYmax); // centered
	stroke("green");
	rect(padXmin, padYmin, padXmax, padYmax); // centered
	
}

function draw() {

}