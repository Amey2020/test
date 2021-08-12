var canvas,database;
var gameState=0;
var game;
var form,player,playerCount;
var allPlayers;
var kayo, kayoImg ,omen  , omenImg
var robot , robotImg;
var backgroundImg;

function preload(){
  kayoImg=loadImage("Images/kayo.png");
  omenImg=loadImage("Images/omen.png");
  robotImg=loadImage("Images/robot.png");
  backgroundImg=loadImage("Images/ground.png");

}
function setup() {
  createCanvas(windowWidth,windowHeight);
  database=firebase.database();
  game=new Game();
  game.start();
  
}

function draw() {
  background(255,255,255); 
  if(playerCount===4){
    game.update(1);
  }
  if(gameState===1){
    clear();
    game.play();
  }

}