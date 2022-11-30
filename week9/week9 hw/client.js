let local;
let world = [];
let socket;

let circle1;



function setup() {
  socket = io();
  createCanvas(640, 480);
  background(255);
  circle1 = new Circle(width/2,height/2,55,5);
  
  
// A triangle oscillator
  osc = new p5.TriOsc();
  // Start silent
  osc.start();
  osc.amp(0);
  //this is where posenet initlizes and webcam stuff happens
  PoseZero.init();
  
  //this is you, check out agent.js for adding properties and functions
  local = new Agent();
}
  
  //Create sound circles


// A function to play a note


function draw() {
  background(255);
  
	local.update(PoseZero.get());// update your skeleton

  //draw the skeleton
  if (local.data.pose != null){ 
   // console.log(local.data.pose) 
    circle1.detectClick(local.data.pose.rightWrist)
        circle1.detectClick(local.data.pose.leftWrist)
    
    PoseZero.draw_pose(local.data.pose,{color:local.data.color})
  }
  circle1.display();
  
}