let gridStep = 50;
let radius = 20;
let mySound = new Audio(
  "http://commondatastorage.googleapis.com/codeskulptor-demos/pyman_assets/ateapill.ogg"
);
mySound.play();


function setup() {
  createCanvas(500, 500);
  colorMode(HSB, width, height, 100);
}

function draw() {
  background(0);
   noStroke();
   for(let x = 0; x < width/gridStep; x++) {
    for (let y = 0; y < height/gridStep; y++){

      
      let posX = x * gridStep + (gridStep * 0.5);  /*centeralize the circle*/
      let posY = y * gridStep + (gridStep * 0.5); 
      posX += random(-5,5);  /*show random movement, motion */
      posY += random(-5,5);

      
      fill(posX, posY ,120);
     triangle(posX, posY, 320, 100, radius*2.5, 100);
    
    }}
}
