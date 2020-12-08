var wall;
var car;
var speed,widtt;


function setup() {
  createCanvas(1300,500);
  wall=createSprite(1250, 100, 20, 80);
  car=createSprite(100,100,20,20);
  
  speed=random(55,90);
  widht=random(400,1500);
}

function draw() {
 
  background("black");

car.velocityX=speed;

if((wall.x-car.x) < (car.width+wall.width)/2)
{
  car.velocityX=0;
  car.x=1230;
  var deformation=0.5*widht*speed*speed/22509;
  if(deformation>180)
{
  car.shapeColor=color(255,0,0);
}
if(deformation<180&&deformation>100)
{
  car.shapeColor=color(230,230,0);
}
if(deformation<100)
{
  car.shapeColor=color(0,255,0);
}
}
  drawSprites();
}

