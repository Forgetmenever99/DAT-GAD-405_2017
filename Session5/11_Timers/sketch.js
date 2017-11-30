//https://github.com/stavrosdidakis/DAT-GAD-405_2017
//https://p5js.org

//DAT405 / GAD405
//11_Timers

//Setup of variables
let timer1 = 2000;
let timer2 = 4000;
let timer3 = 6000;

let x = 0;
let col;

function setup(){
  createCanvas(400, 400);
  col = color(255, 255, 255);
}

function draw(){
  background(160);
  //Set millis to the new variable
  let currentTime = millis();

  //If the currentTime passes the timer limits,
  //it will trigger different events (change position and color)
  if (currentTime > timer1){
    x = 100;
    col = color(200, 200, 200);
  }
  if (currentTime > timer2){
    x = 200;
    col = color(120, 120, 120);
  }
  if (currentTime > timer3){
    x = 300;
    col = color(60, 60, 60);
    noLoop();
  }
  fill(col);
  rect(x, height/2, 100, 100);
}
