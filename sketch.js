var bg, bgimg;
var bg1;
var bgmusic, bgmus;
var play, playb,player1;
var vent, sabo, report, kill, use;
var ventb, sabob, reportb, killb, useb;
var logo;
var logoimg;
var gameState = 0;

function preload(){
   playerimg = loadAnimation("2.png", "3.png", "5.png")
   playerimg1 = loadImage("walk.gif")
   logo = loadImage("logo.png");
   bg = loadImage("bg.jpg");
   play = loadImage("play.png");
   bgmus = loadSound("bgmusic.mp3");
}

function setup(){
   createCanvas(1920, 937) 
   bg1 = createSprite(width / 2, height / 2, width, height);
   bg1.shapeColor = "black";
   bg1.depth = -1;
   bg1.visible = false;
   logoimg = createSprite(900, 420, 500, 500);
   logoimg.addImage(logo); 
   //playb = createSprite(900, 580, 500, 500);
   //playb.addImage(play);
   //playb.scale = 0.4;
   bgmus.play();
   
   player1 = createSprite(500, 500, 10, 10)
   //player1.addAnimation("moving", playerimg);
   player1.addImage(playerimg1);
   player1.visible = false;
   push();
   fill("red");
   textSize(24);
   text("Press Space to continue", 900, 580);
   pop();
}

function draw(){
    background(bg);
    drawSprites();

    if (mousePressedOver(playb)){
       gameState = 1;
    }
    if(gameState === 1){
       //background(255);
       bg1.visible = true;
     player1.visible = true;
    }
}