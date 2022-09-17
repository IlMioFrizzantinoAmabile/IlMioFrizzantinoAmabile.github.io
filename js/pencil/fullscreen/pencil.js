var x;
var y;
var j = 0;

var spread = 5;
var darkness = 15;
var density = 2000;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255,255,255);
  noStroke();
  reset();
}

function draw() {

  fill(0,0,0,darkness);
  for(var i=0; i<density; i++){
    ellipse(x,y[i],2,2);
    y[i] = y[i] + map(Math.random(),0,1,-spread,spread);
  }

  x = x + 1;
  
  if (x>width){
    //saveCanvas('output'+j+'.jpg', 'jpg');
    background(255,255,255);
    x=0;
    j = j + 1;
  }
  
}

function reset(){
  
  x = 0;
  y = [];
  for(var i=0; i<density; i++){
    y.push(height/2);
  }
  
}