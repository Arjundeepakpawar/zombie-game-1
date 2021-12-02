var bg, bgImg
var player, shooterImg, shooterShooting

function preload(){
bgImg = loadImage("./assets/bg.jpeg")
shooterImg = loadImage("./assets/shooter_2.png")
shooterShooting = loadImage("./assets/shooter_3.png")
}






function setup() {
  createCanvas(windowWidth, windowHeight);
 bg = createSprite(displayWidth/2 - 20,displayHeight/2 - 40,20 , 20 )
bg.addImage(bgImg)
bg.scale = 1.1
player = createSprite(displayWidth - 1150, displayHeight - 300,50,50  )
player.addImage(shooterImg)
player.scale = 0.3
player.setCollider("rectangle",0, 0, 300, 300)
}

function draw() {
  background(255,255,255);  
  if(keyDown("UP_ARROW")&&player.y>70  ){
  player.y = player.y - 30
  }
  if(keyDown("DOWN_ARROW")&&player.y<displayHeight - 195  ){
    player.y = player.y + 30
    }
  if(keyWentDown("space")){
  player.addImage(shooterShooting)
  }
  else if(keyWentUp("space")){
player.addImage(shooterImg)
  }

  drawSprites()  
}