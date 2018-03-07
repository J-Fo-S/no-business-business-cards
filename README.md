# generative-business-cards

We're going to learn to code by coding our very own business cards. While I can't promise they will 'generate' business (yuk yuk) or even look good (that's up to you!), it should be a fun way to learn a little about creative coding basics and design.

### I. Get Started

If you are brand new to programming in practice and in concept as well, you might want to try making your way through [these graphic-based puzzles first](https://blockly-games.appspot.com/maze?lang=en&level=1&skin=0#h5xna9). Don't worry if it seems childish or not-so-cool. It's a good intro for any age to some basic processes you'll see and use again and again.

We will skip some fundamentals in order to jump right into creative coding, but ultimately you'll want to learn more about web programming in general if you continue in this field. There's so many things to learn, but I've taken these 7 elements from Lonce Wyce's very nice [MOOC](https://www.kadenze.com/courses/web-coding-fundamentals-for-artists/info) introducing web coding with a different JS library as a basis that you'll ultimately want to be familiar with.

![Lonce's MOOC](https://github.com/J-Fo-S/no-business-business-cards/blob/master/assets/7keyElements.png) 

We will code in JavaScript using the [p5.js library](https://p5js.org/) and [Sublime Text Editor](https://www.sublimetext.com/3), though you can of course use any other text editor. Otherwise, download Sublime Text Editor 3 and Let's start by setting up a blank template in p5.js, on which we'll code, or "sketch", our designs. Download, save and open this repo somewhere on your computer. In the code folder first example titled "empty example", you should have the following file organization in your directory:
- empty-example [folder]
- index.html
- sketch.js
- libraries [folder]
  - p5.dom.js
  - p5.js
  - p5.sound.js
For the rest of this tutorial, make sure that each new program you create has its own folder and file structure just like this one. This allows your p5.js program to communicate with the html document, p5.js JavaScript libraries and web browser so you can see your program in your web browser of choice.

P5.js can create as many objects and functions as you like (or your computer can handle), but most often any p5.js sketch will have at least the following:
```javascript
function setup() {
Some code..
}

function draw() {
Some code..
}
```
These functions are given to us by the p5.js library and do two fundamental things for us: 
- Function setup "sets up" our drawing environment (also called "context") one time, meaning it only runs once. For example, in order to draw shapes onto our screen we need to tell the computer where to draw. We do this by placing the following code into '<function setup()>':
`<createCanvas(640, 480);>`
This one line of code is translated by p5.js, JavaScript and html into machine code, telling our computer to give us a space of 640 pixels wide by 480 pixels high in our browser window so we can draw in it.

- Function draw "draws" in our 640 x 480 window which we just set up, just like the name suggests. Unlike `<function setup()>`, `<function draw()>` loops continuously, meaning whatever code we place inside the draw function will be repeated forever until we end the program. This is important to note. For instance, if we place the following line of code into the draw function and open the `<index.html>` file, we should see one stationary rectangle, nothing more:
`<rect(20, 20, 200, 200);>`
Yet, despite its stationary appearance, our program is continually drawing this rectangle at the framerate (normally around 60 times per second). Let's add some variation to our line of code to prove this:
      `<rect(20, 20, 200, random(200));>`
Run the program and now we can see the bottom of our rectangle is rapidly moving. This is because the `<random(200)>` function gives us a random value between 0 and 200, and our continuous draw function loop draws the rectangle to the new size each frame.

### Interactive Draw Positions

Believe it or not, with this one line of code we have the seed to generating and interactively controlling shapes across our entire screen, which I will call "canvas" from hereon. Since we've already generated a rectangle with variation, let's quickly look at making it interactive. Since our program is no longer empty, let's duplicate the entire folder and call it something different, like "interactive_rand_rect" or whatever.
Now let's take advantage of another p5.js function that makes drawing and interactivity easy – '<mouseX>' and `<mouseY>`. As their names suggest, mouseX and mouseY give us the position (x and y coordinates)  of our mouse cursor. In our draw function, let's add them in:
`<rect(mouseX, mouseY, random(200), random(200));>`
This tells our program to start the rectangle at the mouseX position and mouseY position, and end the rectangle at the x-axis position of random(200) and the y-axis position of random(200). Run the program, move your mouse cursor around and ta-da! You have your first interactive and generative program in p5.js.
Of course, there's slightly more to the world of shapes than rectangles, so let's try another shape function from the p5.js library, `<line()>`, and add this to our program:
`<line(0, 0, mouseX, mouseY);>`
For other shapes and specifications on use, go to the [p5.js reference page](https://p5js.org/reference/) and find the shapes section. Add and replace them with our current code to get a look and feel of their behavior.
Finally, before we move on, perhaps you made the observation that our drawings, while interesting, are a bit messy with the shapes constantly being drawn on top of each other. What if we want to have just one shape drawn each time, with each loop of the draw function simply updating its parameters, but not having previous drawings show? For this p5.js offers a simple solution: `<background()>`
If we add background("grey") or background(100) to our code before our shapes, each draw loop will draw the entire canvas this color and then draw our shapes over it, in effect 'painting over' each previous drawing like so:
```javascript
background(100);
line(0, 0, mouseX, mouseY);
rect(mouseX, mouseY, random(200), random(200));
```
Great, so now we have a single rectangle and line interactive to our cursor with some random variation. But what if we want to fill up our entire canvas with shapes like before, but without all of the messy redrawing and overwriting?

Iterating Over the Canvas Using Nested For Loops
To fill up our canvas with shapes geometrically spaced throughout its entirety, like a grid, we could either do it the long and not so good way of writing code for each shape's position like this:
```javascript
rect(0, 0, 50, 50);
rect(100, 0, 150, 50);
rect(200, 0, 250, 50);
```
And so on throughout the entire canvas.. Lots of typing and not dynamic!
Much better in this situation is to use nested for loops, one for the x-axis and one for the y-axis, which iterate through our entire canvas and draw shapes at each iteration where we specify (for a refresher on for loops, see [here](https://p5js.org/examples/control-iteration.html)
Run the following code and try and understand what is happening
```javascript
var w = 640;
var h = 480;
 
function setup() {
  createCanvas(w, h);
}
 
function draw() {
  background(100);
  for(var i = 0; i < w; i+=50){
    for(var j = 0; j< h; j+=50){
           line(w/2, h/2, i, j);
           fill(50, 150, 200);
           ellipse(i, j, 20, 20);
      }
  }
} 
```
Note we are setting variables w and h globally to be our canvas height and width. 'Global' means that we can access (and update) the values of these variables anywhere in our program. If you look at the line() function, you can see we use `<w/2>` and `<h/2>` to draw each line starting from the center of our canvas. 
Let's turn our attention to the nested for loops. For loops will loop inside of our draw loop as many times as we specify for each draw loop. If that's confusing, think like this. If a for loop is `<(var I = 0; I < 10; I++)>`, then each for each single draw loop, the for loop will run ten times, and then the draw loop again, and the for loop 10 times, and so on. In our code, each for loop starts at <var i>` or `<var j = 0>`, and increases 50 each loop until the value is greater than w and h. Look at our '<ellipse()>' function, which draws a circle each loop at (i, j, 20, 20). Since our i and j variables increase 50 pixels each iteration of the for loop, the result is a new circle every 50 pixels across the x-axis and every 50 pixels up and down the y-axis. On top of that, we draw a line from the center of the canvas to the center of each circle, giving a 3-d effect. Speaking for myself, I think this is quite nice!

### Controlling Interactivity and Variation in Line, Color, Shape and Position

So we already have the ability to cover our entire canvas in shapes at positions of our choosing for each loop – wonderful. And since we've already learned a bit about variation and interactivity with our single shape programs, you can already experiment with adding these to our shape matrices. Yet, there are a couple additional considerations we need to make, and we also haven't yet explored how to vary our line thickness and shape colors, so let's have a quick look.
Line Thickness, Shape and Color
With p5.js we have the ability to easily alter our line thickness and color and shape color independently. Add the following code before the line() function in our last program:
```        
    strokeWeight(5);
    stroke(200, 150, 50);
```
As you can see when running the program, strokeWeight() sets the thickness of our line, and stroke sets the color. Color in p5.js is set by default to RGBA, which stands for "red, green, blue, alpha" (alpha can be used for transparency, but we'll ignore it for now and leave it at its default value). Color values can be specified from 0-255, with 0 being lowest or no color intensity and 255 being highest color intensity. So our stroke() function gives our line a color of high red values, medium-high green values and lower blue values. 
Now we've given our line a thickness and color, but what if we'd like to fill in our shape a different color? This we do with p5.js' `<fill()>` function, which takes the same color arguments RGBA as the stroke() function. Place a fill() before your shape functions and see! 
Finally, note each time we change strokeWeight(), stroke() and fill() functions these changes will apply throughout all of our code in each draw loop. If we wish to have different settings for different lines and shapes, these functions must be set before each. As always, go to the p5js reference page and experiment with these and more options.

### II. Coding a Business Card Overview

Now that you can cover an entire canvas with shapes and colors, you could do anything you like. But we're here to make business cards, so let's take our new skills to task. I should be honest - I'm not an expert in business card design. However, we don't have to be - in many coding projects we start fresh. We need to quickly research essential information about the project and build a basic model, after which we can refine and develop our expertise.

Firstly, let's separate our programming tasks into 2 groups:

1. Dimensions and Layout - the size and positions for the card and its elements
2. Elements - text, graphics, patterns and color in the foreground, and optionally in the background as well

As we are beginning from scratch without any pre-defined assets, it seems most logical to begin constructing our dimensions and layout, and the populating these spaces with elements. Wikipedia informs us that the standard business card size in Taiwan is 90mm x 85mm. However, we don't care about the exact size at the moment, just its aspect ratio, which is 1.636. With this, we can size our canvas to the correct proportion and simply scale it to its final print size afterwards. So let's stick with our height at 400 pixels and multiply that by 1.636, giving us 654.4. Since we can't have 0.4 of a pixel, we'll round our width to 654.

Before we begin designing a 654 x 400 card, a little more investigation shows that we should have 3 separate dimensions for our card: one for bleed, one for the actual card size, and one for padding. This is to allow for background color to be consistent, the card to be cut, and the elements to be within the actual card (and not accidentally cut). The difference in size between each of these dimensions is roughly 5%, meaning the bleed should be 5% larger than the actual card and the padding 5% smaller. See [here](https://support.moo.com/hc/en-us/article_attachments/202472634/Standard_Size__US__Business_Cards_Landscape.jpg) for a visual example.

### III. Coding the Dimensions

Let's take a first shot at coding the dimensions. I will use a red rectangle for the bleed, a black for the card, and a green for the padding dimension. Open the example code 07 to see the result.

Hmmm.. so the dimensions are there, but they are all top-left aligned. Here's a good first challenge for budding creative coders - see if you can get these dimensions centered!

Now, there usually is no "one" solution in coding, so let's see how your solution or attempt compares with mine. See the example code 08. This may seem like a lot of setup - why not just use numbers instead of variables for plotting dimensions? The reason is because we can easily scale all of our dimensions by changing the height and width at the top. Give it a try. Otherwise, just using numbers we would have to change every single number if we wanted to shrink or expand our canvas - not good. 

### IV. Adding Layouts for Elements

With our dimensions in hand, let's make a simple layout plan for our elements. Start simple, and we can try for sophistication later if minimalism isn't your thing. But it is mine. We'll make space for the following:

1. Text -  5 lines (name, position, phone, email, website)
2. Graphic Logo + Company Name
3. Patterns and Colors (for remaining foreground and background if desired)

Now, we'll go step by step to create a model - but please experiment! The only requirements from here on are your own. Just make sure to keep the design within the padding. To get some additional pointers on the rest, try this useful [article](https://www.hongkiat.com/blog/business-card-design-tips/)

### V. Text

Though we have the options of writing text into html and css files, for sake of ease and functionality we will use the text objects in the p5.js library. Go to our trusty p5.js reference site and search for "typography". You will see we have a good two-hands-full of text objects. Read through them to get a feel for the options.

I will start off old-fashioned and by the book, with the text on the left, company and logo on the right. We can position and size our text proportionally just like we did with our shapes and layouts. Experiment placing and sizing the text to your best sensibilities while maintaining the ratio, for we will need to resize everything later.

### VI. Drawing Multiple Designs on One Screen ("Instance Mode")

Excellent - we've come a pretty good ways. Now we are must go off the deep end into more advanced JavaScript structures in order to run multiple drawings on the same page. We will need to do this in order to have, say, 10 versions of a card on one sheet of paper so we can print out cards. We are going to use what is called "instance mode" in p5.js. What this does is essentially allow us to have multiple canvasses with names, so that we can draw different things on each one.

This may be likely confusing at first, but don't fear - once the set up is done, you can code just like we have been doing. Only now, you can code for multiple card designs at once!

The basic set up for instance mode is the following:

```javascript
var globals = {};   
globals.someGlobalVariable = 0;
// do for all other global variables

new p5(function (p) {
  "use strict";
 
  var someSketchVariable = 255;
 
  p.setup = function () {
    p.createCanvas(600, 400);
  };
 
  p.draw = function () {
    p.background(globals.someGlobalVariable);
    p.fill(someSketchVariable);
    p.rect(100,100,400,200);
  };
 
}, "sketch01");
```

Except we aren't using the draw function for this project (unless you decide you want to), so we can even more simply have

```javascript
var globals = {};   
globals.someGlobalVariable = 0;
// do for all other global variables

new p5(function (p) {
  "use strict";
 
  var someSketchVariable = 255;
 
  p.setup = function () {
    p.createCanvas(600, 400);
    p.background(globals.someGlobalVariable);
    p.fill(someSketchVariable);
    p.rect(100,100,400,200);
  };
 
}, "sketch01");
```
What this does is create a single sketch with a name "sketch01" on our html browser. Simply duplicate this and give a new name "sketch02" or whatever, and then you will have two sketches in your window. Now you may design both however you want and run them simultaneously.

For us, we simply need to rename all the variables in the "instance mode" format. A little tedious, but it will be worth it. 

###VII. Generative Algorithms

So far we've accomplished a design that can resized and duplicated for as many instances as we desire. The only changes we need to make are to change one number for the height of our card, and everything else will be resized proportionally with it. This is pretty good. And if we want to simply duplicate one design a certain amount of times in a specific overall size, then we don't need anything more.

But, what could be more interesting is to have each design instance to be different - either significantly or subtly. However, we don't want to have to code each different instance - we have already coded enough! It is time to enter the world of generative (also called 'algorithmic') design. (Well, actually we already have entered it - the nested ```for loops``` we practiced before quality, at least in my book) 

There are countless resources dedicated to algorithmic and generative design - I have placed some favorites in the resources section. But this field deserves a simple introduction: algorithmic and generative design are basically mathematical formulas (a piece of code) that gives us different results when we put different numbers into them. 

Sine and cosine are perhaps one of the most core examples. Please see this great example [code](https://p5js.org/examples/math-sine-cosine.html) that demonstrates sine and cosine motion. This is algorithmic - the code stays the same. The only thing that changes are the numbers that are given to the functions. Honestly, it is not that different from what we have already done, which is generate proportions algorithmically.

There are endless algorithms, so let's begin with two basic approaches:

1. Periodic Functions
2. Fractals   

[TO DO] compression: http://www.businesscards.org/design-guide/printing/resolution-guide/
http://www.gimpusers.com/forums/gimp-user/17913-how-to-shrink-photo-retain-quality-business-card-design
