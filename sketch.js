var database;
var back_img;
var gameState =0;
var playerCount = 0;
var allPlayers;

var player, form,game;
var player1,player2;
var players;
var fruits;
var fruitGroup;
var fruit1_img, fruit2_img, fruit3_img, fruit4_img, fruit5_img;
var player_img;


function preload(){
  back_img = loadImage("images/bakery.jpg");
  player_img = loadImage("images/basket2.png");
  fruit1_img = loadImage("images/croissant.png");
  fruit2_img = loadImage("images/cupcake.png");
  fruit3_img = loadImage("images/bread.png");
  fruit4_img = loadImage("images/donut.png");
  fruit5_img = loadImage("images/muffin.png");
  fruitGroup = new Group();
}
function setup() {
  createCanvas(1000, 600);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();

  fruit1_img.scale = 0.5;
  fruit2_img.scale = 0.5
  fruit3_img.scale = 0.5
  fruit4_img.scale = 0.5
  fruit5_img.scale = 0.5
  
}

function draw() {
  background(back_img);

  
   if (playerCount === 2) {
     game.update(1);
   }
   if (gameState === 1) {
     clear(); 
     game.play();
   }
   if (gameState === 2) {
    
     game.end();
   }
}
