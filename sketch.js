var bg, bgimg, play, playimg

var gamstate = "serve"

function preload(){
    bgimg = loadImage("images/bakery.jpg");
playimg = loadImage("images/play.png");

}

function setup(){
  createCanvas(1200, 800);
  bg = createSprite(600, 400);
  bg.addImage(bgimg)
  bg.scale = 2
  play = createSprite(600, 400)
  play.addImage( playimg)
  play.scale = 0.5
  

}

function draw(){
background(0)

 drawSprites();

}