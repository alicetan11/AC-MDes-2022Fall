

var PoseZero = new function(){
    this.video = null
    this.poseNet = null
    this.pose0 = null
    this.posenet_objs = []
    this.track_smooth = 0.3
  
    this.init = function() {
      
      this.video = createCapture(VIDEO);  // init webcam
      this.video.size(width,height);
  
      function modelReady() {
        select('#status').html('Model Loaded'); // change that html bit to say model loaded
      }
      // Create a new poseNet method with a single detection
      this.poseNet = ml5.poseNet(this.video, modelReady);
      
      // This sets up an event that fills the global variable "poses"
      // with an array every time new poses are detected
      var self = this;
      
      this.poseNet.on('pose', function(results) {
        self._update(results);
        
      });
      // Hide the video element, and just show the canvas
      this.video.hide();
    }
  
    this._convert = function(posenet_obj){
      var result = {}
      var kpts = posenet_obj.pose.keypoints
      for (var i = 0; i < kpts.length; i++){
        result[kpts[i].part] = {
          x:width-kpts[i].position.x,
          y:kpts[i].position.y
        }      
      }
      return result;
    }
    
    // smoothens the movement
    this.lerp_pose = function(poseA, poseB, t){
      for (var k in poseB){
        if (isNaN(poseA[k].x)){
          poseA[k].x = poseB[k].x
        }else{
          poseA[k].x = lerp(poseA[k].x, poseB[k].x, t);
        }
        if (isNaN(poseA[k].y)){
          poseA[k].y = new_pose[k].y
        }else{
          poseA[k].y = lerp(poseA[k].y, poseB[k].y, t);
        }
      }
      
    }
    
    
    this._update = function(results){
      
      this.posenet_objs = results;
      if (results.length > 0){
        var new_pose = this._convert(this._get_largest_posenet_obj(results));
        if (this.pose0 == null){
          this.pose0 = new_pose
        }else{
          this.lerp_pose(this.pose0, new_pose, this.track_smooth);
          
        }
      }
    }
    
    this._get_largest_posenet_obj = function(objs){
      var max_i = 0;
      var max_d = 0;
      for (var i = 0; i < objs.length; i++){
        var kpts = objs[i].pose.keypoints;
        var nose = kpts[0]
        var leftEye = kpts[1]
        var d = dist(nose.x,nose.y,leftEye.x,leftEye.y);
        if (d > max_d){
          max_d = d;
          max_i = i;
        }
      }
      return objs[max_i];
    }
    
    this.get = function(){
      return this.pose0;
    }
    
    this.draw = function(){
      if (this.pose0 != null){
        this.draw_pose(this.get());
      }
    }
    
    this.estimate_scale = function(pose){
      return dist(pose.nose.x, pose.nose.y , pose.leftEye.x, pose.leftEye.y);
      
    }
    
    this._draw_bones = function(){
      beginShape()
      for (var i = 0; i < arguments.length; i++){
        vertex(arguments[i].x, arguments[i].y);
      }
      endShape()
    }
    
    this._draw_head = function(pose){ //round arc from ear to ear then a straight line down
      var ang = atan2(pose.leftEar.y-pose.rightEar.y,pose.leftEar.x-pose.rightEar.x);
      var r = dist(pose.leftEar.x,pose.leftEar.y,pose.rightEar.x,pose.rightEar.y);
      arc((pose.leftEar.x+pose.rightEar.x)/2, (pose.leftEar.y+pose.rightEar.y)/2, r,r, ang, ang+PI);
      var neck = {x:(pose.leftShoulder.x + pose.rightShoulder.x)/2, y:(pose.leftShoulder.y + pose.rightShoulder.y)/2,}
      ellipse ((pose.leftEar.x+pose.rightEar.x)/2, (pose.leftEar.y+pose.rightEar.y)/2,r,r)
  
      //line(pose.leftEar.x,pose.leftEar.y,neck.x,neck.y);
      //line(pose.rightEar.x,pose.rightEar.y,neck.x,neck.y);
    }
    
    
    this.draw_pose = function(pose, args) {
      if (args == undefined){args = {}}
      if (args.color == undefined){args.color = [0]}//255,255,255
      
      push();
      
      colorMode(0);//(HSB,255)
      stroke.apply(this, args.color);
      strokeWeight(6);
      
      strokeJoin(ROUND);
      
      noFill();
  
      this._draw_bones(pose.leftShoulder, pose.rightShoulder, pose.rightHip, pose.leftHip, pose.leftShoulder);
      
      this._draw_bones(pose.leftShoulder, pose.leftElbow, pose.leftWrist);
      
      this._draw_bones(pose.rightShoulder, pose.rightElbow, pose.rightWrist);
  
      this._draw_bones(pose.leftHip, pose.leftKnee, pose.leftAnkle);
      this._draw_bones(pose.rightHip, pose.rightKnee, pose.rightAnkle);
      
      this._draw_head(pose);
    
      var s = this.estimate_scale(pose);
      
      fill(255);
      ellipse(pose.leftEye.x, pose.leftEye.y, s*0.8, s*0.8);
      ellipse(pose.rightEye.x, pose.rightEye.y, s*0.8, s*0.8);
      ellipse(pose.nose.x, pose.nose.y, s*0.5, s*0.5);
      pop();
    }
  }