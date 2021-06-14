var bird, bird_flying;
var bgSprite;

function preload(){
 bird_flying=loadAnimation("images/tile000.png","images/tile001.png","images/tile002.png","images/tile003.png","images/tile004.png", "images/tile006.png", "images/tile007.png", "images/tile008.png", "images/tile009.png", "images/tile010.png","images/tile012.png", "images/tile013.png", "images/tile014.png","images/tile015.png" )
 
  bgImg=loadImage("images/bgimg2.jpg")
}

function setup() {
  
  //create a canvas
  createCanvas(windowWidth, windowHeight)

  bgSprite = createSprite(width/2, height/2)
  bgSprite.addImage("background", bgImg)
  bgSprite.scale=0.6
  bgSprite.velocityX=-3
  
  bgSprite.x=width/2

  bird = createSprite(100, 200, 50, 50)
  bird.addAnimation("fly", bird_flying)
  bird.scale=0.7
}

function draw() {
  //set background color
  background("blue");
  drawSprites();

  //reset condition
  if(bgSprite.x<0){
    bgSprite.x = width/2
  }
  
  spawnCars();
}
function keyPressed(){
  if(keyCode===32){
    bird.velocityY=-2
  }
}

function spawnCars(){
  carSprite = createSprite(width -100, height - 30, 30, 30)
  carSprite.velocityX = -2
}


  
  

    
  
