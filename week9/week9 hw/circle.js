class Circle {
    constructor(x, y, w, n) {
      this.x = x;
      this.y = y;
      this.w = w;
      this.n = n;
      this.color = "green";
      this.playing = false;
    }
  
    display() {
      fill(this.color);
      stroke(0);
      ellipse(this.x,this.y,this.w,this.w);
    }
    
    detectClick(Hand){
      
   let distance1 =  dist(this.x,this.y,Hand.x,Hand.y);
    
    if(distance1 < this.w * 0.5){
      console.log("click")
      this.color = 'red';
    }
    else{
      this.color = 'green';
    }
    }
  }
  