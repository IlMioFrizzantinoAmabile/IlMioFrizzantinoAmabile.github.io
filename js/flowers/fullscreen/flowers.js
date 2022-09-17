let isDrawing = false;
let x = 0;
let y = 0;

const canv = document.getElementById('canvas');
const context = canv.getContext('2d');


canv.width  = window.innerWidth;
canv.height = window.innerHeight;
function windowResize() {
  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;
};
window.addEventListener('resize', windowResize);


var points = []

// event.offsetX, event.offsetY gives the (x,y) offset from the edge of the canvas.
// clean with context.clearRect(0, 0, canvas.width, canvas.height);
// Add the event listeners for mousedown, mousemove, and mouseup
canv.addEventListener('mousedown', e => {
  x = e.offsetX;
  y = e.offsetY;
  isDrawing = true;
  
  point = new Point(x,y);
  points[points.length] = point
  
});

canv.addEventListener('mousemove', e => {
  if (isDrawing === true) {
    drawLine(context, x, y, e.offsetX, e.offsetY);
    x = e.offsetX;
    y = e.offsetY;
    
    point = new Point(x,y);
    points[points.length] = point
    
    for (p=0; p<points.length; p++) {
        points[p].grow();
        points[p].noise();
    	points[p].show(context);
       	}
  }
});

canv.addEventListener('mouseup', e => {
  if (isDrawing === true) {
    drawLine(context, x, y, e.offsetX, e.offsetY);
    x = 0;
    y = 0;
    isDrawing = false;
  }
});

function drawLine(context, x1, y1, x2, y2) {
  context.beginPath();
  context.strokeStyle = 'black';
  context.lineWidth = 1;
  context.moveTo(x1, y1);
  context.lineTo(x2, y2);
  context.stroke();
  context.closePath();
}

class Point {
  constructor(height, width) {
    this.height = height;
    this.width = width;
    this.radius = 0;
    this.grow_rate = 1;
    this.direction = 2 * Math.PI * Math.random();
  };
  
  grow() {
  	this.radius = this.radius + 0.1 * this.grow_rate;
    this.grow_rate = this.grow_rate * 0.999
  }
  
  noise() {
    var r = Math.random()
    this.height = this.height + r * Math.sin(this.direction);
    this.width = this.width + r * Math.cos(this.direction);
    this.direction = this.direction + 0.1*(Math.random()*2-1)
  }
 
  show = function(context) {
    context.beginPath();
 	context.arc(this.height, this.width, this.radius, 0, 2 * Math.PI);
    context.lineWidth = 1;
    context.stroke();
  }
}