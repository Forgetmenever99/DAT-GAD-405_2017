//https://p5js.org
//https://p5js.org/learn/

//DAT405 / GAD405
//04_Animation

var col;

//Initialization function
function setup() {
  //Set the size of rendering window - pixels
  createCanvas(700, 400);

  //col = 255,0, 0;
  //strokeWeight(random(10));
  //No stroke for shapes
  noStroke();
}

//Rendering function
function draw() {
  //Erase all canvas. Set the color to white
  background(100);

  //Line: Blue + Red
  //stroke(255, 0, 255);
  //line(40, 30, width-40, 30);

  fill(255, 0, 0);
  ellipse(mouseX, mouseY, 50, 50)
}
