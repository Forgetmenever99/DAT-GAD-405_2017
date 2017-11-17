//https://p5js.org
//https://p5js.org/learn/

//DAT405 / GAD405
//02_Coordinates

//Initialization function
function setup() {
  //Set the size of rendering window - pixels
  createCanvas(700, 400);

  strokeWeight(5);

  //No stroke for shapes
  noStroke();
}

//Rendering function
function draw() {
  //Erase all canvas. Set the color to white
  background(100);

  //Line: Blue + Red
  stroke(255, 0, 255);
  line(40, 30, width-40, 30);

  //Line: Blue + Green
  stroke(0, 255, 255);
  line(40, 30, 40, height-30);

  //Line: Blue + Yellow
  stroke(0, 255, 0);
  line(40, 30, width-40, height-30);

  //Line: Green + Yellow
  stroke(150, 200, 100);
  line(40, height-30, width-40, height-30);

  //Line: Green + Red
  stroke(100, 50, 10);
  line(40, height-30, width-40, 30);

  //Line: Yellow + Red
  stroke(235, 110, 50);
  line(width-40, height-30, width-40, 30);

  noStroke();
  //Top left corner shape position and color
  fill(0, 0, 255);
  ellipse(0, 0, 100, 100);

  //Top right corner shape position and color
  fill(255, 0, 0);
  ellipse(width, 0, 100, 100);

  //Bottom right corner shape position and color
  fill(0, 255, 0);
  ellipse(0, height, 100, 100);

  //Top right corner shape position and color
  fill(255, 255, 0);
  ellipse(width, height, 100, 100);
}
