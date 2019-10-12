function setup() {
  createCanvas(600, 600);
}
function preload(){
  eatSound = loadSound("cp1_smashing.wav")
}
  
var Blue = 0;
var BlueSpeed = 1;
var Redsmall = 0;
var RedsmallSpeed = 1;
var Green = 0;
var GreenSpeed = 4;
var Brown = 500;
var BrownSpeed = 4;
var BrownR = 300;
var BrownRSpeed = 4;
var Sky = 400;
var SkySpeed = 4;

function draw() {
  background(240);
  strokeCap(SQUARE);
  noStroke();
  

  
    // !!!Blue square
 
  colorMode(HSB);
  fill(Blue,48,85);
  rect(300, Blue, 250, 350);
  
   if (Blue >= 200) {
     eatSound.play();
    BlueSpeed = -1;
  }
  //bouncing back-Blue
  if (Blue <= 50) {
    BlueSpeed = 3;
  }
Blue = Blue + BlueSpeed;
  
// Red square small
  
  

  
  

   colorMode(HSB);
  fill(Redsmall,98,95);
  rect(Redsmall,0, 100, 50);
  
   if (Redsmall >= 500) {
    RedsmallSpeed = -4;
  }
  //bouncing back-Brown
  if (Redsmall <= 0) {
    RedsmallSpeed = 5;
  }
Redsmall = Redsmall + RedsmallSpeed;
  
  
  
// Red square
  fill('rgba(242,5,159, .9)');
  rect(100, 0, 200, 50);
  
// !!!skyblue square
  fill( 'rgba(65,242,225,.9)');  
  rect(100, Sky, 200, 300);
  
  if (Sky >= 400) {
    SkySpeed = -3;
  }
  //bouncing back-Brown
  if (Sky <= 300) {
    SkySpeed = 3;
  }
Sky = Sky + SkySpeed;
  
//green square
  fill('rgba(185,242,99,.9)');
  rect(Green, 300, 100, 100);
  
  if (Green >= 200) {
    GreenSpeed = -7;
  }
  //bouncing back-Green
  if (Green <= 0) {
    GreenSpeed = 3;
  }
Green = Green + GreenSpeed;
  
  // !!! Brown square left

  
  fill('#F2A25C');
  rect(0, Brown, 100, 200);
  
   if (Brown >= 600) {
    BrownSpeed = -3;
  }
  //bouncing back-Brown
  if (Brown <= 400) {
    BrownSpeed = 3;
  }
Brown = Brown + BrownSpeed;
  
   // !!! Brown square right
  fill('#F2A25C');
  rect(BrownR, 550, 450, 200);
  
   if (BrownR >= 550) {
    BrownRSpeed = -7;
  }
  //bouncing back-Brown
  if (BrownR <= 300) {
    BrownRSpeed = 3;
  }
BrownR = BrownR + BrownRSpeed;


stroke(0);
  strokeWeight(13);
  line(0, 50, 600, 50); // horizontal#1
  line(0, 300, 300, 300); // horizontal#2
  line(0, 400, 600, 400);// horizontal#3
   line(0, 550, 100, 550);// horizontal#4
   line(300, 550, 600, 550);// horizontal#5
  line(300,0, 300, 600);// vertical#2
 
  
 
stroke(0);
  strokeWeight(13); 
  line(100,0, 100, 50);// vertical#1
  line(100,300, 100, 600);// vertical#1-2
   line(550,50, 550, 600);// vertical#3
  line(0, 300, 300, 300); // horizontal#2
}
