var x;
var y;
var incremento;

var spread = 5;
var darkness = 15;
var density = 2000;

var dice = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255,255,255);
  noStroke();
  reset();
}

function draw() {

  fill(0,0,0,darkness);
  for(var i=0; i<density; i++){
    ellipse(x[i],y[i],2,2);
    y[i] = y[i] + map(Math.random(),0,1,-spread,spread);
	
    dice = map(Math.random(),0,1,0,6);
    console.log(dice)
	if (dice>1){
      x[i] = x[i] + incremento[i];
	}
    if (x[i]>width){
      incremento[i] = -1;
    }
    if (x[i]<0){
      incremento[i] = 1;
    }
  }
}

function reset(){
  
  x = [];
  y = [];
  incremento = [];
  for(var i=0; i<density; i++){
  	x.push(0);
    y.push(height/2);
    incremento.push(1);
  }
  
}