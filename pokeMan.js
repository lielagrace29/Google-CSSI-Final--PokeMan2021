/*
global createCanvas, windowWidth, windowHeight, color, colorMode, HSB, background, random, width, height, fill, noStroke, ellipse
frameRate, text, stroke, noFill, rect, noStroke, round, keyCode, key, UP_ARROW, DOWN_ARROW, LEFT_ARROW, RIGHT_ARROW,
collideRectRect,println, image, birdSprite, world,  cell, time, gameisOver

*/
//change all pacman to PokeMon


// functionality and appears of the poke-Man bal
function PokeMon () {
    this.img = pokemonImg;
    this.location = {
        x: 13,
        y: 22

    };

    this.show = function () {
        image(this.img, this.location.x * cell + 2, this.location.y * cell + 2, 16, 16);
    }
    
    this.move = function () {
        switch(keyCode) {
            case UP_ARROW:
                if(world[this.location.y-1][this.location.x] !== '0') {
          //          this.img = pacmanUp;
                    if(world[this.location.y-1][this.location.x] !== '1') {
                        score++;
                    }
                    world[this.location.y][this.location.x] = '1';
                    this.location.y = this.location.y -1;
                }
                break;
            case DOWN_ARROW:
                if(world[this.location.y+1][this.location.x] !== '0') {
             //       this.img = pacmanDown;
                    if(world[this.location.y+1][this.location.x] !== '1') {
                        score++;
                    }
                    world[this.location.y][this.location.x] = '1';
                    this.location.y = this.location.y +1;
                }
                break;
            case LEFT_ARROW:
                if(world[this.location.y][this.location.x -1] !== '0') {
             //       this.img = pacmanLeft;
                    if(world[this.location.y][this.location.x -1] !== '1') {
                        score++;
                    }
                    world[this.location.y][this.location.x] = '1';
                    this.location.x = this.location.x -1;
                }
                if (pokeMon.location.x < 0){
                    pokeMon.location.x = 26;
                }
                break;
            case RIGHT_ARROW:
                if(world[this.location.y][this.location.x +1] !== '0') {
            //        this.img = pacmanImg;
                    if(world[this.location.y][this.location.x+1] !== '1') {
                        score++;
                    }
                    world[this.location.y][this.location.x] = '1';
                    this.location.x = this.location.x +1;
                }
                if (pokeMon.location.x >26){
                    pokeMon.location.x = 0;
                }
                break;
            default:
          }
      
      }
    }


