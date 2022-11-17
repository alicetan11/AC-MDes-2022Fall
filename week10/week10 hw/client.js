let local;
let world = [];
let socket;
let circles = [];

let osc;
let playNotes = [];
let notes = [ 60, 62, 64, 65, 67, 69, 71];



function setup() {
  socket = io();
  createCanvas(640, 480);
  background(255);

// A triangle oscillator
  osc = new p5.TriOsc();
  // Start silent
  osc.start();
  osc.amp(0);
  //this is where posenet initlizes and webcam stuff happens
  PoseZero.init();
  
  //this is you, check out agent.js for adding properties and functions
  local = new Agent();
  
  //Create sound circles
  for (let i = 0; i < 7; i++) {
    circles.push(new Circle(40 + 90*i, 300, 55, notes[i]));
   }
}

// A function to play a note
function playNote(note, duration) {
  osc.freq(midiToFreq(note));
  // Fade it in
  osc.fade(0.5,0.2);

  // If we sest a duration, fade it out
  if (duration) {
    setTimeout(function() {
      osc.fade(0,0.2);
    }, duration-50);
  }
}

function draw() {
  background(255);
  
	local.update(PoseZero.get());// update your skeleton

  //draw the skeleton
  if (local.data.pose != null){ 
    PoseZero.draw_pose(local.data.pose,{color:local.data.color})
    for (let i = 0; i < 7; i++) {
      circles[i].update(local.data.pose.leftWrist.x, local.data.pose.leftWrist.y, local.data.pose.rightWrist.x, local.data.pose.rightWrist.y, notes[i]);
      circles[i].display();
    }
  }

  
}