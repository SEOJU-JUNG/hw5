function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(900);
  for (var x = 0;  x <= 200; x = x + 10) {
    line(200-x,x,200,x);
    line(200+x,x,200,x);
    line(x,x+200,200,x+200);
    line(x,x+200,400-x,x+200);
  }
}
