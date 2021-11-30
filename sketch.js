// CSSI project week: PokeMan Remix final personal

//text map reference: https://github.com/Middi/pacman/blob/master/map.js
// Group members: Liela Pressley, Gabby Arauz, Rahma Seid

/*
global createCanvas, windowWidth, windowHeight, color, colorMode, HSB, background, random, width, height, fill, noStroke, ellipse
frameRate, text, stroke, noFill, rect, noStroke, round, keyCode, key, UP_ARROW, DOWN_ARROW, LEFT_ARROW, RIGHT_ARROW,
collideRectRect,println, image, loadImage, pokemonImg, birdSprite, drawWorld,time, lives
PokeMon, gameisOver,createButton,strokeWeight,textSize,Enemy
*/

/* TO Dos for Wednesday: x create our presentation slides
                         x starting & ending page,sound , 
                         x set up a timer and have the player get a specific 
                        x number of points and 1 pokemon before the timer runs out
TO DO(Gabby): 
- condtional logic for starting and reseting page
-timer logic
- https://www.educative.io/edpresso/how-to-create-a-countdown-timer-using-javascript
-
-
TO DO(Liela): 
x draw a grid 
x have pokeball sprite and pokemon sprites
x create a pokeMon ball object
x create 4 pokemon to be caught object 
  x have randomizing movement
x design starting page
x food → score
x pokemon collision detection
  - fun things for pokemon
  -add pokemon caught variable or figure out a way to score once touched not just rack up
-ending page: display score, display pokemon caught and refresh to play again
TO DO(Rahma): 
- find a p5 library for sound
- 


 */
var audio = new Audio('https://cdn.glitch.com/2aa88804-5ea3-4608-8776-36577c05a895%2FRelaxing%20Pokmon%20Music%20Compilation%20Vol%201.mp3?v=1628086952475')

var pokeMon; // initializing pokeball
var pokemonImg; //initializing pokeball image

var enemies; //moving pokemon that need to be caught
var enemyImg, enemyImg2, enemyImg3, enemyImg4;

var pokemonCaught = 0; // hold the amount of pokemon caught within the time given

var startingBG;
var startimg;
var transpic;
var endImg;
//var collision = false; //boolean for collision that will lead to bonus score

var gameisOver = false; //condtional using score or lives

var start = false; //condtional using score or lives
//var restart;
var food;
var score = 0;
//timer
var timer = 60; //p5 framerate   62
//var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
//var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
//
var cell = 20;
let button;

var frame = 0;

function preload() {
  startingBG = loadImage(
    "https://cdn.glitch.com/a47bc287-c75d-428b-b95a-c9e92e706e52%2Fpok%C3%A9-man.png?v=1628005819198"
  );
  transpic = loadImage(
    "https://cdn.glitch.com/996ad4d6-89ba-46d9-bace-c4c35a0c9d72%2F2560px-A_sample_of_the_transparent_rectangle.svg.png?v=1628198012957"
  );
  endImg = loadImage("https://cdn.glitch.com/996ad4d6-89ba-46d9-bace-c4c35a0c9d72%2Fpok%C3%A9-man%20(2).png?v=1628214428822");
  
  pokemonImg = loadImage(
    "https://cdn.glitch.com/a47bc287-c75d-428b-b95a-c9e92e706e52%2Fimageedit_6_9099839199.png?v=1627996282829"
  );

  enemyImg = loadImage(
    "https://cdn.glitch.com/a47bc287-c75d-428b-b95a-c9e92e706e52%2Fpokemon1.png?v=1627997585970"
  );
  //add images
  enemyImg2 = loadImage(
    "https://cdn.glitch.com/a47bc287-c75d-428b-b95a-c9e92e706e52%2Fpoke2.png?v=1628002529091"
  );

  enemyImg3 = loadImage(
    "https://cdn.glitch.com/a47bc287-c75d-428b-b95a-c9e92e706e52%2Fpoke3.png?v=1628002697469"
  );

  enemyImg4 = loadImage(
    "https://cdn.glitch.com/a47bc287-c75d-428b-b95a-c9e92e706e52%2Fpok4.png?v=1628002936141"
  );
}

function setup() {
  var cnv = createCanvas(540, 630);
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;

  cnv.position(x, y);

  //start button
  button = createButton("Start");
  button.size(130, 60);
  button.style("font-size", "48px");
  button.position(width / 0.9, 345);
  button.mousePressed(startGame);

  //creating PokeMan ball object
  pokeMon = new PokeMon();
  //creating pokemon to catch object as a class
  enemies = [
    new Enemy(12, 14, enemyImg),
    new Enemy(13, 14, enemyImg2),
    new Enemy(14, 13, enemyImg3),
    new Enemy(13, 12, enemyImg4)
  ];
}

function draw() {
  background(0);
  audio.play();//pokemon music
  
  //start page
  if (start == false) {
    image(startingBG, 0, 0, 540, 600);
    button.show();
  }
  //start button into main game
  else if (start == true) {
    image(transpic, 0, 0, 540, 600);
    button.hide();
    //  startimg.hide();
    background("black");
    drawWorld();
    // timer
    if (frameCount % 50 == 0 && timer > 0) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
      timer --;
    }
    if (timer == 0) {
      gameisOver = true;
    }
    food();
    showScore();
    showTimer();

    //pokemAn and ball show and movment//
    frame++; //add frame +1
    pokeMon.show();

    for (let enemy of enemies) {
      //iterate through each item of the array and show
      enemy.show();
      //pokemon and ball collision detection function
      pokeballCollision(enemy);
    }

    for (let enemy of enemies) {
      if (frame % 25 == 0) {
        //frame rate
        enemy.move();
      }
    }
  }
//    text('CLICK REFRESH BUTTON TO PLAY AGAIN')
  
  if (gameisOver==true){
    image(endImg, 0, 0, 540, 600);
    showScore();
    pokeCaught(); // add display pokmon caught
    textSize(10);
    text(`Creators: Liéla Pressley | Rahma Seid | Gabby Arauz
          Special thank you to Elise, Benson, & Angela!
          `, 290, 570);

    //    text('CLICK REFRESH BUTTON TO PLAY AGAIN')
  }
}

function startGame() {
  //when button is pressed start boolean is true which hides the starting page and shows the main game page
  start = true;
}


function showScore() {
  textSize(30);
  fill(0);
  strokeWeight(8);
  stroke("white");
  text(`Score: ${score}`, 10, 620);
}
function showTimer() {
  textSize(30);
  fill(0);
  strokeWeight(8);
  stroke("white");
  text(`Timer: ${timer}`, 300, 620);
}
 function pokeCaught(){ //display pokemon caught when gameisOver
    textSize(30);
    fill(0);
    strokeWeight(8);
    stroke('white'); 
    text(`Pokemon Caught: ${pokemonCaught}`,260, 620);
}

function keyPressed() {
  pokeMon.move();
}

function pokeballCollision(enemy) {
  //pokemon and ball collision detection:
  //try location.y ==location x try to be more simpler
  //don't use size
  if (
    pokeMon.location.x == enemy.location.x &&
    pokeMon.location.y == enemy.location.y
  ) {
    score += 5;
    pokemonCaught += 1; //add one pokemon to variable to be displayed at the end of the game
    enemy.reset(); //reset pokemon to original location
    //add potential music for collision here??
    
    //  pokeCaught(enemy);

    //  pokemonCaught= true;
    //add a pokemon caught variable
    //hide pokemon caught? or have some time of big thing
  }
}

/*function pokeCaught(enemy){
    enemy.hide();

}*/
//when you catch 1/4 pokemon you get 10 points and background changes color and you win page with a restart button
/*function  catchCelebration(){
  
}*/
