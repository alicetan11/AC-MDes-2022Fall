class Dog {
    constructor(x,y) {
      this.pos = createVector(x, y);
      this.velocity = createVector(0, 0)
      this.accel = createVector(0, 0)
    }
    
    move(){
      this.velocity.add(this.accel)
      this.pos.add(this.velocity)
    }
    
    applyForce(_force){
      this.accel.add(_force)
    
    }
    
    kill(){
      this.pos.x = -1000
    }
    
    display(){
      image(dogImage, this.pos.x, this.pos.y, 60, 60);
    }
  }