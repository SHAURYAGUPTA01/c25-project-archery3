class PlayerArrow {
    constructor(x, y, width, height) {
      var options = {
        restitution: 0.8,
        friction: 1.0,
        density: 1.0,
        isStatic: true
      };
      this.trajectory = []
      this.r = 40;
      this.width = width;
      this.height = height;
      this.body = Bodies.rectangle(x, y, this.width, this.height, options);
      this.image = loadImage("./assets/arrow.png");
      
      World.add(world, this.body);
    }
    shoot(archerAngle) {
      var velocity = p5.Vector.fromAngle(archerAngle);
      velocity.mult(20);
      Matter.Body.setStatic(this.body, false);
      Matter.Body.setVelocity(this.body, { x: velocity.x, y: velocity.y });
    }
    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
        
        image(this.image,pos.x ,pos.y , this.width, this.height);

        if(this.body.velocity.x > 0 && this.body.position.x > 300){
          var pos = [this.body.position.x,this.body.position.y]
          this.trajectory.push(pos)
        }
        for(var i = 0 ; i < this.trajectory.length; i++){
          image(this.image,this.trajectory[i][0],this.trajectory[i][1],5,5)
        }
    
    }
}