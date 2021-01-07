class Ball{
    constructor(x, y,r) {
        var options = {
            'restitution':0.8,
            'friction':0.5,
            'density':1.0,
            isStatic: false
        }
    
        this.body = Bodies.circle(x, y,r/2,options)
        this.x= x ; 
        this.y= y;
        this.r = r;
      
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("blue");
        ellipse(0, 0, this.r);
        pop();
      }
}