//https://p5js.org
//https://p5js.org/learn/

//Set up variables for the color
var r, g, b;

//Initialization function
function setup() {
  //Set size of the canvas
  createCanvas(720, 400);
  // Pick colors randomly on setup and assign to variables
  r = random(255);
  g = random(255);
  b = random(255);
}

//Rendering function
function draw() {
  //Color of the background
  background(127);
  // Draw a circle - set parameters such as color and stroke
  strokeWeight(2);
  stroke(r, g, b);
  fill(r, g, b, 127);
  ellipse(360, 200, 200, 200);
  
  //Print on the console the X position of the mouse
  console.log("mouseX position: " + mouseX);
}

// When the user clicks the mouse
function mousePressed() {
  // Check if mouse is inside the circle
  var d = dist(mouseX, mouseY, 360, 200);
  //If the mouse position is within the circle
  if (d < 100) {
    // Pick new random color values
    r = random(255);
    g = random(255);
    b = random(255);
  }
}
