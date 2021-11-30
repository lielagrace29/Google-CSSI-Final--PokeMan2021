/* REMIX : THURSDAY
global createCanvas, windowWidth, windowHeight, color, colorMode, HSB, background, random, width, height, fill, noStroke, ellipse
frameRate, text, stroke, noFill, rect, noStroke, round, keyCode, key, UP_ARROW, DOWN_ARROW, LEFT_ARROW, RIGHT_ARROW,
collideRectRect,println, image, birdSprite, world,  cell,int

*/

//- add p5 scene manager
// functionality and appears of the poke-Man ball
function Enemy (x,y,img) {
    this.img = img;
    this.location = { //starting location coordinates
        x:x,
        y:y,
        initx:x,
        inity:y,
    };

    this.show = function () { //starting position
        image(this.img, this.location.x * cell + 2, this.location.y * cell + 2, 16, 16);
    }
     
    this.move = function(){
      let dx = [1,0,-1,0]; //first four coordinates 
      let dy = [0,1,0,-1];
      let valid_dx = []; //initializing valid direction arrays
      let valid_dy=[];
      //moving upward  
      for(let i=0; i<4; i++) {
        if(world[this.location.y+dy[i]][this.location.x+dx[i]] !== '0') {
          valid_dx.push(dx[i]);
          valid_dy.push(dy[i]); 
        }  //do similar condition but check if pokemon is there ---for future improvement
      }
      //update  x location so that this.loation equals a random coordinate within the valid direction array 
      let i = int(random(0,valid_dx.length));
      this.location.x += valid_dx[i];
      //update y location
      this.location.y += valid_dy[i];
    }
    //used to reset pokemon to starting coordiantes once collided
    this.reset= function(){
      this.location.x = this.location.initx;
      this.location.y=this.location.inity;
    }
  }  

// tohave a conditional so if it find a valid direction continue in that direction so it doesn't go back and forth all the time

// array list of valid directions (4)
// array to filter through the valid directions
//loop through the x++ and y++
/*let dx = [1,0,-1,0];
let dy = [0,1,0,-1];
let valid_dx = [];
let valid_dy=[];


for(let i=0; i<4; i++) {
  if(dx, dy is valid direction) {
    valid_dx.push(dx[i]);
    valid_dy.push(dy[i]);
  }
}



once array is developed randomly select from valid direction array*/