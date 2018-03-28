//NOTE: FIX PADDING DIMS ACCORDING TO CODE EX. 12

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
 
  //GOOD REASON TO NOT USE RECT - it's use of area, vs. coordinate points, for l and w can be very confusing when using other objects with different parameters.
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

	// static variables for scaling and shifting
	var centerX = 0.5*(globals.padXmax - globals.padXmin)+globals.padXmin;
	var centerRightX = 0.7*(globals.padXmax-globals.padXmin)+globals.padXmin;
	var centerRightY = 0.6*(globals.padYmax-globals.padYmin)+globals.padYmin;
	var sinScaleX = 0.2 * (globals.padXmax - globals.padXmin); 
	var sinScaleY = 0.5 * (globals.padYmax - globals.padYmin); 

	// add 3rd for loop (yikes!) so entire scene is drawn multiple times
	for(var h = globals.padYmin, g = globals.padXmin; h <= globals.padYmax || g <= globals.padXmax; h+=Math.round(globals.padYmin), g+=Math.round(globals.padXmin)){
  	
  	// tricky looking - but remember to take into consideration: a. the actual width of the pad area and b. the position the center pad area has been shifted
  	// numbers often do not divide completely in loop increments. A cheap correction is to add or subtract the padMinX and Y initial value or < limit - and let it go over or under as is aesthetically pleasing
	  	for(var i = globals.padXmin; i <= globals.padXmax; i+=Math.round(globals.padXmin)){
	  		for(var j = globals.padYmin; j <= globals.padYmax; j+=Math.round(globals.padYmin)){
		    	//dynamic variables for scaling and shifting
		    	var xEnd = 0.5*(globals.padXmax-globals.padXmin)+globals.padXmin+0.5*(i-globals.padXmin);
		    	var yEnd = j;

		    	// normalize i and j values to range of TWO_PI and shift to left to right rise
		    	var sinX = p.sin(g/globals.padXmax*p.PI-p.HALF_PI)*sinScaleX;
		    	var sinY = p.sin(h/globals.padYmax*-p.PI+0.075)*sinScaleY;
		    	console.log(sinX, sinY);
		    	
		    	// draw sun
		 		p.noStroke();
		  	 	p.fill(200, 150, 50, 5);
		  	 	p.ellipse(centerRightX+sinX, centerRightY+sinY, globals.padXmin, globals.padYmin);
		  	 	
		  	 	// draw rays shift to x center-right and y center
		  	 	p.strokeWeight(globals.padXmin*0.02);
		  	 	p.stroke(200, 150, 50, 40);
		  	 	p.line(centerRightX+sinX, centerRightY+sinY, i, j);
		        
		        // draw and rotate dollars towards sun 
		        p.push();
		      	// rotate around above line origin by subtracting j in i in arctan2 function (will makes each shape rotate around a center)
		      	p.tanRotate = p.atan2(sinY+centerRightY-j, sinX+centerRightX-i);
		      	// move basis to each instance (each shape is the center of its own plane)
		      	p.translate(i, j);
		      	// perform the rotation
		      	p.rotate(p.tanRotate);
		  	 	p.fill(50, 150, 200, 30);
		  	 	// start at 0 because of translate (the axis, or basis, has already been shifted)
		  	 	p.rect(0, 0, globals.padXmin*0.5, globals.padYmin*0.5);
		      	p.pop();
		      	p.ellipse(i, j, j%globals.padXmin*0.1, i%globals.padYmin*0.1);		      	
	  		}
	  	}
  	}

	

	
}
 
}, "sketch01");


