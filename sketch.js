var trex,trex_running,edges,ground,ground_image,invisible_ground

function preload() {
 trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
ground_image = loadImage ("ground2.png"); 
}
function setup() {
  createCanvas(400, 400);
  trex = createSprite(80,350,10,10);
  trex.scale = 0.5;
  trex.addAnimation("running",trex_running);
  edges = createEdgeSprites();
  ground = createSprite(0,350,800,2);
  ground.addImage(ground_image);
  ground.velocityX = -4;
  invisible_ground = createSprite(0,360,800,2);
  invisible_ground.visible = false;
}

function draw() {
  background(220);
  if (keyDown("space") && trex.y > 300) {
   trex.velocityY = -10; 
    
  }
  trex.velocityY = trex.velocityY + 0.5;
  trex.collide(invisible_ground);
  if (ground.x < 0) {
   ground.x = ground.width /2; 
  }
  drawSprites();
}