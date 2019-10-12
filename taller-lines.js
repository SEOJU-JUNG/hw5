function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(900);
  for (var i = 0;  i <= 200; i = i + 5) {
line (i,0, i, i*2);
  }
  for (var i = 200;  i <= 400; i = i + 5) {
line (i,0, i, i*2);
  }
}


