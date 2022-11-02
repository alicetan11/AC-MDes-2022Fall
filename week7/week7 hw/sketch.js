let play = 1;
let end = 0;
let gameState = play;
let score = 0;
let spray, sprayImage;
let spider, spiderImage, spiderGroup;
let gameoverImage
let dogs = [];
let run;
let mouseDistance;
//var spraySound;


function preload(){
  sprayImage = loadImage("spray.png");
  spiderImage = loadImage("spider.png");
  dogImage = loadImage("dog.png");
}

function setup() {
  preload()
  createCanvas(600, 600);
}

function draw() {
  background(249, 128, 14 );
  image(sprayImage, mouseX, mouseY, 60, 60);

    if(frameCount%450===0){
      dog = new Dog(random(249), 0)
    }

    if(frameCount%250===0){
      spider = new Spider(random(249), 0)
    }
    
    if (typeof dog !== 'undefined') {
      gravity = createVector(0, 0.005)
      dog.applyForce(gravity);
      dog.move();
      dog.display();
      mouseDistance = int(dist(dog.pos.x, dog.pos.y, mouseX, mouseY)); // check the distance from your mouse to the spider
      if (mouseDistance <= 30) {
        score -= 2;
        dog.kill()
      }
    }
    
    if (typeof spider !== 'undefined') {
      gravity = createVector(0, 0.005)
      spider.applyForce(gravity);
      spider.move();
      spider.display();
      mouseDistance = int(dist(spider.pos.x, spider.pos.y, mouseX, mouseY)); // check the distance from your mouse to the spider
      if (mouseDistance <= 30) {
        score++;
        spider.kill()
      }
  
  text("score:" + score , 500, 30); 
}
}
