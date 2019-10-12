function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  


for (var x= 20; x <=390; x+=20){
	for (var y=20; y <=390; y+=20){
fill(255,255,255);
ellipse(x,y,15,15);
}
}
}
