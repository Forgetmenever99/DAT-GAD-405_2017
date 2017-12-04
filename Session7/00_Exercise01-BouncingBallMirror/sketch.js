//https://github.com/stavrosdidakis/DAT-GAD-405_2017
//https://p5js.org

//DAT405 / GAD405
//08_Bouncing Ball Exercise (Solved)
//For this exercise make sure that the ellipse does not
//appear from the other side, but rather bounds back from the edges
//When it bounces back, it also changes a random color

//Setup of variables
let x = 200;
let y = 150;
let ellipseSize = 10;
let speedX;
let speedY;
let col;;

function setup() {
  createCanvas(400, 400);
  noStroke();
  //Create a new variable to store a color object
  col = color (255, 255, 255)
  speedX = random(-5., 5.);
  speedY = random(-5., 5.);
}

function draw() {
  //background(160);

  //Adjust the position based on a speedX and speedY
  x = x + speedX;
  y = y + speedY;

  //Check the boundaries. If we hit the boundaries on the X axis, reverse,
  //and for every collision change the color
  if ((x > width-25) || (x < 0+25)) {
    speedX = (speedX * -1);
    col = color (random(255), random(255), random(255));
  }

  //Check the boundaries. If we hit the boundaries on the Y axis, reverse,
  //and for every collision change the color
  if ((y > height-25) || (y < 0+25)) {
    speedY = speedY * -1;
    col = color (random(255), random(255), random(255));
  }
  fill(col);
  ellipse(x, y, ellipseSize, ellipseSize);

  let x2 = map (x, 0, width, width, 0);
  let y2 = map (y, 0, width, width, 0);

  ellipse(x2, y, ellipseSize, ellipseSize);
  ellipse(x, y2, ellipseSize, ellipseSize);
  ellipse(x2, y2, ellipseSize, ellipseSize);

}
