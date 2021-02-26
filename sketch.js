
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var survivalTime = 0;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  //monkey
  monkey = createSprite(80,135,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale = 0.1;

  //ground
  ground = createSprite(400,350,900,10)
  ground.x = ground.width /2
  ground.velocityX = -4;
  
}


function draw() {
  background(255)

if(ground.x<0){
  ground.x = ground.width /2
}  
monkey.collide(ground);
  
 if(keyDown("space") ) {
 monkey.velocityY = -12       
 }
monkey.velocityY = monkey.velocityY + 0.8

//score  
stroke("red")  
 textSize(20)
 fill("black") 
  text("Score:"+ survivalTime,10,20)
  survivalTime = Math.ceil(frameCount/frameRate())

  //da bananas
  banana = createSprite(390,200,50,50)  
  
  
  drawSprites();
}






