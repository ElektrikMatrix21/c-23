var castleMiddle, castleLeft, castleRight;
var triMiddle;

function setup() {
  createCanvas(800,400);
  castleMiddle = createSprite(400, 200, 50, 200);
  castleMiddle.shapeColor = "white"
  castleLeft = createSprite(300, 150, 40, 150);
  castleLeft.shapeColor = "white"
  castleRight = createSprite(500, 150, 40, 150);
  castleRight.shapeColor = "white"
  triMiddle = triangle(400, 250, 375, 200, 425, 200);
  triMiddle.shapeColor = "white"
}

function draw() {
  background(255,255,255);  
  drawSprites();
}