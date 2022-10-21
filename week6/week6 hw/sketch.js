const rain =[]
const ground = []

const minSpeed = 1
const maxSpeed = 5

let mouseThreshold = 50; 
let moveDistance = 150;
let shapes = []; // an array that will hold our shapes
let numberOfShapes = 5000; // how many shapes to draw

class RainDrop {
constructor() {
  this.x = random(width); 
  this.y = random(height); 
  this.speed = random(minSpeed, maxSpeed); 
  
  }
  
  updateRainDrop() {
    let mouseDistance = int(dist(this.x, this.y, mouseX, mouseY)); // check the distance from your mouse to the shape
    if (mouseDistance <= mouseThreshold) { // if your mouse gets closer than the threshold...
      this.x += random(-moveDistance, moveDistance); // give the rainDrop a new x position
      this.y += random(-moveDistance, moveDistance); // and a new y position

    }
  }
}

function setup() {
  createCanvas(500, 500);
  noSmooth()
  stroke(238, 199, 153 )
  fill(248, 230, 116  )
  
  for(let i =0; i <500; i++){
    rain.push(new RainDrop())
  }
  
    for(let x = 0; x < width; x++) {
    ground[x] = height;
      

}
}
  

function draw() {
  background(50, 58, 92   );

  
  for(const rainDrop of rain){
    rainDrop.y += rainDrop.speed
    rainDrop.updateRainDrop();
    rect(rainDrop.x, rainDrop.y, 2, 15);
    
     if(rainDrop.y >= ground[floor(rainDrop.x)]) {
      ground[floor(rainDrop.x)]--;

      rainDrop.x = random(width);
      rainDrop.y = 0;
    }
  }
    
    for(let x = 0; x < width; x++) {
    rect(x, ground[x], 500, height - ground[x]);
  }
  
 
  ellipse(mouseX, mouseY, 30, 30);

}


