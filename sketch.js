var movingRect , fixedRect;

function setup() {
  createCanvas(800,400);

  movingRect = createSprite(400, 0, 50, 50);
  movingRect.shapeColor = "blue";
  movingRect.velocityY = 5;

  fixedRect = createSprite(400, 200, 100, 50);
  fixedRect.shapeColor = "blue";
  fixedRect.velocityY = -5;
}

function draw() {
  background(255,255,255);  

  //movingRect.x = World.mouseX;
  //movingRect.y = World.mouseY;
  //&& 
  if(movingRect.y - fixedRect.y < movingRect.height+fixedRect.height/2
    && fixedRect.y - movingRect.y< movingRect.height+fixedRect.height/2){
    
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red"
    movingRect.velocityY = movingRect.velocityY*(-1)
    fixedRect.velocityY= fixedRect.velocityY*(-1);
  }
  else{
    movingRect.shapeColor = "blue";
    fixedRect.shapeColor = "blue";
  }


  
  drawSprites();
}