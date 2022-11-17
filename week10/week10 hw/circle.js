class Circle {
    constructor(x, y, w, n) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.color = 'green';
    this.playing = false;
  }
  
  display() {
    fill(this.color);
    stroke(0);
    strokeWeight(3);
    ellipse(this.x, this.y, this. w);
  }
  
  update(posX1, posY1, posX2, posY2, note) {
      let distance1 = dist(posX1, posY1, this.x, this.y);
      let distance2 = dist(posX2, posY2, this.x, this.y);
        if (!this.playing && distance1 <= 30 || distance2 <= 30) {
           this.color = 'red';
           this.playing = true;
           playNote(note);
        }
        else if (this.playing && distance1 > 30 && distance2 > 30){
            this.color = 'green';
            this.note = 0;
            this.playing = false;
            osc.fade(0,0.5);
        }
   }
  
  }
  
  