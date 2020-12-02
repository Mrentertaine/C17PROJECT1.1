
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage,ground
var foodGroup, obstacleGroup,Spawn
var score
var survivalTime=0

function preload(){
   
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
  
 
}



function setup() {
  monkey= createSprite(80,300,20,20)
  monkey.addAnimation("monkey_running",monkey_running)
  monkey.scale=0.1

  ground= createSprite(400,350,900,10)
  ground.velocityX= -4
  foodGroup= createGroup()
  
  
}


function draw() {
background("white")
  
  if(ground.x<0)
    {
      ground.x=ground.width/2
    }
  
  if(keyDown("space")){
    monkey.velocityY= -12
  }
  monkey.velocityY= monkey.velocityY + 0.4
  monkey.collide(ground)
  
  Spawn() 
   obstacles1()
  
  stroke ("white")
  textSize(20)
  fill("white")
  text("score" +score,500,50)
  
  stroke ("black")
  textSize(20)
  fill("black")
  survivalTime= Math.ceil(frameCount/frameRate())
  text("survivalTime"+survivalTime,100,50)
  
  drawSprites()
  
}

function Spawn(){
  if(World.frameCount%50===0){
  banana= createSprite(100,100,20,20)
  banana.y= Math.round(random(120,200))
  banana.x= Math.round(random(100,400))
    banana.velocityX= -2
   banana.setLifeTime= -1
    banana.addImage("bananapicture",bananaImage)
    banana.scale=0.1
    foodGroup.add(banana)
    
  }
 
}

function obstacles1(){
  if(World.frameCount%300===0){
    obstacle= createSprite(200,340,20,20)
    obstacle.addImage("obstacle.png",obstaceImage)
    obstacle.scale=0.1
    obstacle.velocityX= -2
  }
}




