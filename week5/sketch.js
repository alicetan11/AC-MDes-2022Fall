let PosX, PosY
let VelX, VelY
let radius
let cColor


function setup() {
  createCanvas(800, 600);
  
  PosX = width/2
  PosY = height/2
  
  VelX = -3.1
  VelY = 1.7
  radius = 40
  cColor = changeColor()
}

function draw() {
  background(0);
  fill(cColor)
  noStroke()
  circle (PosX, PosY, radius * 2)
  
  if(PosX - radius <= 0 || PosX + radius >= width) {
    VelX *= -1  
     cColor = changeColor()
}
  
  if(PosY - radius <= 0 || PosY + radius >= height) {
    VelY *= -1
    cColor = changeColor()
}
    
  PosX = PosX + VelX 
  PosY = PosY + VelY
}

function changeColor(){
  return color(random(255),random(255),random(255))
}