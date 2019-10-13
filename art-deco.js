function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(255)
  for (var x1=0; x1<=600; x1+=124){
noFill();
square(x1, 250, 100);
  for (var x2=10; x2<=600; x2+=124){
square(x2, 260, 80);
noFill();
    for (var x3= 20; x3<=600; x3+=124){
square(x3, 270, 60);
noFill();
     for (var x4= 30; x4<=600; x4+=124){
square(x4, 280, 40);
noFill();
}   
}
}  
}
}
