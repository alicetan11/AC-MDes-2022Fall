const ghostSize=100;
const tail = [];
const wiggliness = 3;
const floatiness = 5;
const tailLength = 40;

let ghostX;
let ghostY;

let ghostA;
let ghostB;

let ghostC;
let ghostD;

let cColor;


function setup() {

  createCanvas(400,400);
  
  ghostX = width / 2;
  ghostY = height / 2;
  
  ghostA = width / 2;
  ghostB = height / 2;
  
  ghostC = width / 2;
  ghostD = height / 2;
  VelX = -3.1;
  VelY = 1.7;
  
  cColor = changeColor()
 
}

function draw() {

  
  //The cos() function gives us a value that bounces between -1 and 1.

  ghostY = (sin(frameCount *0.1)*50) + height/2;
  ghostX = (cos(frameCount *0.1)*50) +height/2;
  

  
  if (ghostX < -ghostSize) {
    ghostY = height + ghostSize;
  }
  
  if(ghostA + 1  <= 0 || ghostA + 5 >= width) {
    VelX *= -1; 
     cColor = changeColor();
}
    if(ghostB - 1 <= 0 || ghostB + 5 >= height) {
    VelY *= -1;
     cColor = changeColor();
}
    ghostA = ghostA - VelX; 
    ghostB = ghostB - VelY;
  
   if(ghostC + 10 <= 0 || ghostC + 5 >= width) {
    VelX *= 1; 
     cColor = changeColor();
}
    if(ghostD +10 <= 0 || ghostD + 5 >= height) {
    VelY *= 1;
     cColor = changeColor();
}
    ghostC = ghostC + VelX; 
    ghostD = ghostD + VelY;


  
   tail.unshift({x: ghostX, y: ghostY});
  // If the array is too big, remove the last point.
  if (tail.length > tailLength * 3) {
    tail.pop();
  }
  
     tail.unshift({x: ghostA, y: ghostB});
  // If the array is too big, remove the last point.
  if (tail.length > tailLength * 3) {
    tail.pop();
  }
  
       tail.unshift({x: ghostC, y: ghostD});
  // If the array is too big, remove the last point.
  if (tail.length > tailLength * 3) {
    tail.pop();
  }

  background(cColor);
  noStroke();

  for (var index = 0; index < tail.length; index++) {
    const tailPoint = tail[index];

    // Tail gets smaller and more transparent.
    const pointSize = ghostSize * (tail.length - index) / tail.length;
    const pointAlpha = 255 * (tail.length - index) / tail.length;

    fill(255, pointAlpha);
    ellipse(tailPoint.x, tailPoint.y, pointSize);
  }
  

  
  fill(0);
  ellipse(ghostX - ghostSize * .2, ghostY - ghostSize * .1, ghostSize * .2);
  ellipse(ghostX + ghostSize * .2, ghostY - ghostSize * .1, ghostSize * .2);
  ellipse(ghostX, ghostY + ghostSize * .2, ghostSize * .3);

  fill(0);
  ellipse(ghostA - ghostSize * .2, ghostB - ghostSize * .1, ghostSize * .2);
  ellipse(ghostA + ghostSize * .2, ghostB - ghostSize * .1, ghostSize * .2);
  ellipse(ghostA, ghostB + ghostSize * .2, ghostSize * .3);
  
   fill(0);
  ellipse(ghostC - ghostSize * .2, ghostD - ghostSize * .1, ghostSize * .2);
  ellipse(ghostC + ghostSize * .2, ghostD - ghostSize * .1, ghostSize * .2);
  ellipse(ghostC, ghostD + ghostSize * .2, ghostSize * .3);

}

function changeColor(){
  return color(random(255),random(255),random(255))
}
