// Print dimensions - good to keep ratios as variables throughout!
var cardH = 400;
var cardW = Math.round(cardH*1.636); // maintains aspect ratio throughout

// additional bleed and padding %
// use native JavaScript object Math to round - can't have decimals for pixels
var bleedPadW = Math.round(cardW*0.05);
var bleedPadH = Math.round(cardH*0.05);


function setup() {
	createCanvas(cardW+bleedPadW, cardH+bleedPadH); //width and height of my canvas
	stroke("red");
	rect(0, 0, cardW+bleedPadW-1, cardH+bleedPadH-1); // minus one to make it visible inside canvas
	stroke("black");
	rect(0, 0, cardW, cardH); // not centered
	stroke("green");
	rect(0, 0, cardW-bleedPadW, cardH-bleedPadH); // not centered
	
}

function draw() {

}