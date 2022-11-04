var fond;
var fondo;
var barco;
var barc;

function preload(){

barc = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png");
fondo = loadImage("sea.png");
}

function setup(){
  createCanvas(500,400)

  barco = createSprite(150, 250, 20, 20);
  barco.addAnimation("bar", barc);
  barco.scale = 0.3;

  fond = createSprite(400,200,2,2);
  fond.addImage("fondo", fondo);
  fond.x = fond.width/4;
  fond.scale = 0.5;
  
  console.log(fond.depth);
  console.log(barco.depth);
  
 fond.depth = barco.depth;
 barco.depth = barco.depth + 1;
} 


function draw() {
  background("blue");
  drawSprites();
  fond.velocityX = -2;
  console.log(fond.x);
  if (fond.x < 0){
    fond.x = fond.width/4;
  }

}