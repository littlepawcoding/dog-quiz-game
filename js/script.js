//GLOBAL VARIABLES

var score = 0;

//BURGER MENU

function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

//CANVAS

var canvas = document.querySelector("#screen");
canvas.width = 500;
canvas.height = 500;

var ctx = canvas.getContext("2d");

// var maxheight = canvas.height * 0.3;

//STATE

var state = {
  doggieX: 100,
  doggieY: 100,
  bonePosition: {
  x: 0,
  y: 0,
}
};

//BACKGROUND

var background = document.querySelector("#background");

function drawBackground() {
  var width = canvas.width;
  var height = canvas.height;
  ctx.drawImage(background, 0, 0, width, height);
}

//DOGGIE

var doggie = document.querySelector("#doggie");

function drawDug() {
  var width = 84;
  var height = 84;
  var doggieX = state.doggieX;
  var doggieY = state.doggieY;
  ctx.drawImage(doggie, state.doggieX, state.doggieY, width, height);
}

//BONES

var bone = document.querySelector("#bone");

function drawBone(boneInfo) {
  var width = 96;
  var height = 47;
  var xPosition = state.bonePosition.x;
  var yPosition = state.bonePosition.y;
ctx.drawImage(bone, xPosition, yPosition, width, height);
}

function bonePositions() {
var numberX = Math.random() * (canvas.width - 25);
var numberY = Math.random() * (canvas.height - 25);
state.bonePosition.x = numberX;
state.bonePosition.y = numberY;
}

// MOVEMENT

function moveDugLeft() {
state.doggieX -= 5;
}

function moveDugRight() {
state.doggieX += 5;
}

function moveDugUp() {
state.doggieY -= 5;
}

function moveDugDown() {
state.doggieY += 5;
}

//EVENT HANDLING

function handleKey(e) {

if (e.key === "ArrowLeft"){
moveDugLeft();
}

if (e.key === "ArrowRight"){
moveDugRight();
}

if (e.key === "ArrowUp"){
moveDugUp();
}

if (e.key === "ArrowDown"){
moveDugDown();
}
}

body.addEventListener("keydown", handleKey);

//GAME

function runGame() {
  drawBackground();
  drawDug();
  drawBone();
}

setInterval(runGame, 50);

function animateBone() {
bonePositions();
}

setInterval(animateBone, 2000);

//SCORE TRACKING (doesn't work yet)

// var scoreText = document.querySelector(".score");
//
// function keepScore() {
//
// }
