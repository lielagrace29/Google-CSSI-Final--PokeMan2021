/*
global createCanvas, windowWidth, windowHeight, color, colorMode, HSB, background, random, width, height, fill, noStroke, ellipse
frameRate, text, stroke, noFill, rect, noStroke, round, keyCode, key, UP_ARROW, DOWN_ARROW, LEFT_ARROW, RIGHT_ARROW,
collideRectRect,println,bird,cell, strokeWeight

*/
//text map that forms the grid
var textMap = [
  ["0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0"],
  ["0 + - - - - + - - - - - + 0 + - - - - - + - - - - + 0"],
  ["0 | 0 0 0 0 | 0 0 0 0 0 | 0 | 0 0 0 0 0 | 0 0 0 0 | 0"],
  ["0 | 0 0 0 0 | 0 0 0 0 0 | 0 | 0 0 0 0 0 | 0 0 0 0 | 0"],
  ["0 | 0 0 0 0 | 0 0 0 0 0 | 0 | 0 0 0 0 0 | 0 0 0 0 | 0"],
  ["0 + - - - - + - - + - - + - + - - + - - + - - - - + 0"],
  ["0 | 0 0 0 0 | 0 0 | 0 0 0 0 0 0 0 | 0 0 | 0 0 0 0 | 0"],
  ["0 | 0 0 0 0 | 0 0 | 0 0 0 0 0 0 0 | 0 0 | 0 0 0 0 | 0"],
  ["0 + - - - - + 0 0 + - - + 0 + - - + 0 0 + - - - - + 0"],
  ["0 0 0 0 0 0 | 0 0 0 0 0 | 0 | 0 0 0 0 0 | 0 0 0 0 0 0"],
  ["0 0 0 0 0 0 | 0 0 0 0 0 | 0 | 0 0 0 0 0 | 0 0 0 0 0 0"],
  ["0 0 0 0 0 0 | 0 0 + - - + - + - - + 0 0 | 0 0 0 0 0 0"],
  ["0 0 0 0 0 0 | 0 0 | 0 0 0 1 0 0 0 | 0 0 | 0 0 0 0 0 0"],
  ["0 0 0 0 0 0 | 0 0 | 0 0 1 1 1 0 0 | 0 0 | 0 0 0 0 0 0"],
  ["+ - - - - - + - - + 0 0 1 1 1 0 0 + - - + - - - - - +"],
  ["0 0 0 0 0 0 | 0 0 | 0 0 0 0 0 0 0 | 0 0 | 0 0 0 0 0 0"],
  ["0 0 0 0 0 0 | 0 0 + - - - - - - - + 0 0 | 0 0 0 0 0 0"],
  ["0 0 0 0 0 0 | 0 0 | 0 0 0 0 0 0 0 | 0 0 | 0 0 0 0 0 0"],
  ["0 0 0 0 0 0 | 0 0 | 0 0 0 0 0 0 0 | 0 0 | 0 0 0 0 0 0"],
  ["0 + - - - - + - - + - - + 0 + - - + - - + - - - - + 0"],
  ["0 | 0 0 0 0 | 0 0 0 0 0 | 0 | 0 0 0 0 0 | 0 0 0 0 | 0"],
  ["0 | 0 0 0 0 | 0 0 0 0 0 | 0 | 0 0 0 0 0 | 0 0 0 0 | 0"],
  ["0 + - + 0 0 + - - + - - + - + - - + - - + 0 0 + - + 0"],
  ["0 0 0 | 0 0 | 0 0 | 0 0 0 0 0 0 0 | 0 0 | 0 0 | 0 0 0"],
  ["0 0 0 | 0 0 | 0 0 | 0 0 0 0 0 0 0 | 0 0 | 0 0 | 0 0 0"],
  ["0 + - + - - + 0 0 + - - + 0 + - - + 0 0 + - - + - + 0"],
  ["0 | 0 0 0 0 0 0 0 0 0 0 | 0 | 0 0 0 0 0 0 0 0 0 0 | 0"],
  ["0 | 0 0 0 0 0 0 0 0 0 0 | 0 | 0 0 0 0 0 0 0 0 0 0 | 0"],
  ["0 + - - - - - - - - - - + - + - - - - - - - - - - + 0"],
  ["0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0"]
];

// in the array world a for loop that adds a new space
var world = [];

for (var i = 0; i < textMap.length; i++) {
  for (var j = 0; j < textMap[j].length; j++) {
    world.push(textMap[i][j].split(" "));
  }
}
//using that space block from ^ to actually form a visual rect cell for the maze and a usable path
function drawWorld() {
  for (var y = 0; y < world.length; y++) {
    for (var x = 0; x < world[y].length; x++) {
      switch (world[y][x]) {
        case "0":
          fill("red");
          strokeWeight(2);
          stroke(0);
          rect(x * cell, y * cell, cell, cell);
          break;
        case "1":
          fill(0);
          rect(x * cell, y * cell, cell, cell);
          break;
        default:
      }
    }
  }
}
//function draw () {
//rect
//text'start'
//color
//function keyPressed() {
//if (keyCode === UP_ARROW) {
//frogY -= 20;
// } else if (keyCode === DOWN_ARROW) {
//  Pac += 20;
// } else if (keyCode === LEFT_ARROW) {
// frogX -= 20;
//} else if (keyCode === RIGHT_ARROW) {
// frogX += 20;
//}
//}

//© 2021 GitHub, Inc.
