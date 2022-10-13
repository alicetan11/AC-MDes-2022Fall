let gridStep = 50;
let radius = 20;



function setup() {
  createCanvas(800, 1200);
  colorMode(HSB, width, height, 100);
 
}


function draw() {  /*show repetition*/
   background(30, 80, 80);
  
   showGrid();  
   noStroke();
   for(let x = 0; x < width/gridStep; x++) {
    for (let y = 0; y < height/gridStep; y++){
      console.log(x,y)
      
      let posX = x * gridStep + (gridStep * 0.5);  /*centeralize the circle*/
      let posY = y * gridStep + (gridStep * 0.5); 
      posX += random(-5,5);  /*show random movement, motion */
      posY += random(-5,5);

      
      fill(posX, posY ,60);
      console.log(posX)
    circle (posX, posY, radius*2) /*draw circles*/
    }
  }
  
}


function showGrid() {
  
    stroke(0) /* always come before*/
    for (let x = 0; x < width; x = x +gridStep) {
    /*draw a vertical line*/ 
    line (x, 0, x, height);
  } 
  
  
    stroke(250,100,225)
    for (let y = 0; y < height; y += gridStep) {
    /*get horizontal line */
    line (0, y, width, y);
  }
  
}