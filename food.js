// referring to the gameboard going to use a for loop to draw a ellipse
// the for loop is to going to draw it for the length of the text map array within each
//
function food() {

    for ( var y = 0; y < world.length; y++) { //as long as y and then x is less then the size of the world//text map array keep adding ellipeses
        for (   var x = 0; x < world[y].length; x++) {
            if (world[y][x] !== '0' && world[y][x] !== '1') { //if 0 is true and 1 is true on each x y coordinate of the text map then draw
                noStroke();
                fill(0);
                rect(x * cell, y * cell, cell, cell);
                fill(255);
                ellipseMode(CENTER); //centers
                ellipse(x * cell + 10, y * cell + 10, 6, 6); //draws it within each cell
            }
        }
    }
}