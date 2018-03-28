
//This a comment - the double // tell the computer to ignore this line
/*This is for multi-line comments
We
Can
Write
Until
*/

/* We can put 'global variables' here
	Global variables have 'global scope'
	They can enter and be updated anywhere
	*/
var bag_A = "chalk"
var bag_B = "empty water bottle"

// "sets up" our canvas - it only happens ONCE
function setup() {
	/*console.log("I am the setup " + bag_A);
	bag_A = bag_B
	console.log("Bag_A has been filled with a " + bag_B);
	var bag_C = "pizza"; // This a 'local variable' - it only exists in this function
	*/

	// This p5 function will give us a 'canvas' with (width, height) in pixels
	createCanvas(640, 480);
	// This is background in grayscale (# from 0-255) 0 is black, 255 white
	background(50);
	
}

// This "draws" our code - it happens REPEATEDLY
function draw() {
	//console.log("I am drawing");
	

}