var x = 50;
/* color dark = color ('99,172,229'); //dark red
color redish = color ('99,172,229'); //red orange
color orange = color ('75,134,180'); //orange
color sooth = color ('173,203,227'); //lightblue
color yeep = color ('42,77,105'); //pink
color cloud = color ('231,239,246, 100'); */

var dark = ('#293dce'); //dark red
var redish = ('#293dce'); //red orange
var orange = ('#447fe5'); //orange
var sooth = ('#4bbff9'); //lightblue
var yeep = ('#78e3e0'); //pink
var cloud = ('#93f4ed');


function setup() {
  var myCanvas = createCanvas(800, 250);
  fill(0);
  noStroke();
  myCanvas.parent(mySketch); //this is to stick into a div on the html page
 
}

function draw() {
  background (sooth);
  var scalar = map(mouseX, 10, width, 30,4);
  var radius = 5.0;
  for (var deg = 0; deg < 360*20; deg += scalar) {
    var angle = radians(deg);
    var x = 50 + (cos(angle)*radius);
    var y = 42 + (sin(angle) *radius);
    fill(orange);
    noStroke();
    ellipse(x+mouseX,y+mouseY,4,4);
     ellipse(x+mouseX,y+mouseY,10,10);
    radius = radius + 0.54;
  }
   ellipse(50+mouseX,42+mouseY, 100,100);
  fill(cloud);
   ellipse(200,300,300,70);
   ellipse(270,250,250,150);
   ellipse(350,300,200,100);
   
  for (var i = 0; i < 500; i += 10) {
    stroke(i*.02);
    stroke(dark);
    strokeWeight(10);
    fill(yeep);
    line (i, 0, i*mouseX, 500);
  }

}