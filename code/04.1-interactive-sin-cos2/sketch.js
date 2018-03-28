var counting = 0;

function setup() {

createCanvas(windowWidth, windowHeight);


}

function draw() {
	background(236, 59, 224); 
	//noStroke();
	

	var scaling = 50;
	var twoPiX = mouseX * TWO_PI/windowWidth;
	var twoPiY = mouseY * TWO_PI/windowHeight;
	// when working with grids - we need SCALING (multiply) and RANGE (shifting)
	for (var i = 0; i < windowWidth; i+= 100) {
		//console.log("i =" + i);
		
		for (var j = 0; j < windowHeight; j+= 100){
			if (counting%2 == 1) {
				fill(224, 236, 59);
				rect(i+cos(twoPiX)*scaling, j+cos(twoPiY)*scaling, 30, 30);
			} else {
				fill(59, 236, 224);
				rect(i+sin(twoPiX)*scaling, j+sin(twoPiY)*scaling, 30, 30);
			}
			counting = counting + 1;
		}
	}

}