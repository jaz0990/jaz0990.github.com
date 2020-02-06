var kool = ('#6AABC1'); //shutters
var kale = ('#BF3F3F'); //red orange
var lily = ('#BF7373'); //sun
var ali = ('#043A40'); //background
var night = ('#F2E9E4'); //pink
//var cloud = ('#F2E9E4'); 
var dragX, dragY;

function setup () {
  var myCanvas = createCanvas (800,250);
  background(night);
  strokeWeight(20);
  stroke(kool);
  fill (lily);
  ellipse(0,250,600,600);
  myCanvas.parent(mySketch);
}
function draw () {
  stroke(ali);
  strokeWeight(10);
  fill (night);
  ellipse(dragX,dragY,80,80);
}
function mouseReleased() {
  fill (kool);
  rect (mouseX,mouseY,50,50);
}



  