class Ball {
  constructor(x, y, w,h) {
    let options = {
     isStatic:false
    };

    this.body = Bodies.rectangle(x, y,w,h,options);
    this.w = w;
    this.h = h;

    World.add(world, this.body);
  }

  show() {
    var pos = this.body.position;
    push();
    translate();
    rectMode(CENTER);
    rect(pos.x,pos.y,this.r);
    pop();
  }
}