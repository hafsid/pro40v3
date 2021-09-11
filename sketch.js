var canvas;
var backgroundImage, car1_img, car2_img, track;
var fuelImage, powerCoinImage;
var obstacle1Image, obstacle2Image;
var database, gameState;
var form, player, playerCount;
var allPlayers, car1, car2, fuels, powerCoins, obstacles,f1,s1,coins;
var cars = [];

function preload() {
  backgroundImage = loadImage("./assets/background.png");
  car1_img = loadImage("../assets/car1.png");
  car2_img = loadImage("../assets/car2.png");
  track = loadImage("../assets/track.jpg");
  fuelImage = loadImage("./assets/fuel.png");
  powerCoinImage = loadImage("./assets/goldCoin.png");
  obstacle1Image = loadImage("./assets/obstacle1.png");
  obstacle2Image = loadImage("./assets/obstacle2.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  obstacles = new Group();
  coins = new Group();
  for(i=0;i<10;i++)
  {
    w = random(width / 2 + 150, width / 2 - 150);
    h = random(-height * 4.5, height - 400);
   
    f1 = createSprite(w,h);
    f1.debug="true";
    f1.setCollider("rectangle",0,0,20,20)
    f1.addImage("f1",fuelImage);
    f1.scale = 0.02
    obstacles.add(f1);
 }
 for(i=0;i<10;i++)
  {
    w = random(width / 2 + 150, width / 2 - 150);
    h = random(-height * 4.5, height - 400);
   
    s1 = createSprite(w,h);
    s1.debug="true";
    s1.setCollider("circle",0,0,20)
    s1.addImage("s1",powerCoinImage);
    s1.scale = 0.09
    coins.add(s1);
 }
}

function draw() {
  background(backgroundImage);
  if (playerCount === 2) {
    game.update(1);
  }

  if (gameState === 1) {
    game.play();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
