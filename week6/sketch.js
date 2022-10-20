let particles = []

function setup() {
  createCanvas(800, 600);
  colorMode(HSB,TWO_PI,1,1)
  
  particles.push (new particle(width/2, height/2))
}

function draw() {
  background(0);
  
  particles.forEach( (p)=>{  
    //event section
    p.reachOut(particles)
    p.move()
    p.display()
  })
}

function mouseReleased(){
  particles.push(new particle(mouseX,mouseY))
  
}
