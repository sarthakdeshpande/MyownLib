var fixedRect, movingRect;

var rect1,rect2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  rect1=createSprite(200,200,50,100);
  rect1.shapeColor = "blue";
  rect2=createSprite(300,200,50,100);
  rect2.shapeColor = "red";

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0); 
  rect2.x = mouseX;
  rect2.y = mouseY;

  if(isTouching(rect1,rect2)){
     rect1.velocityY = -2;

  }

  bounceOff(movingRect,fixedRect);
  drawSprites();
}


