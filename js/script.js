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
canvas.width = 1000;
canvas.height = 1000;

var ctx = canvas.getContext("2d");

// var maxheight = canvas.height * 0.3;

//STATE

var state = {};

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
  var width = 20;
  var height = 20;
  ctx.drawImage(doggie, 100, 100, width, height);
}

//game

function runGame() {
  drawBackground();
  drawDug();
}
