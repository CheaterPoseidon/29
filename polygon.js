class Polygon{
    constructor(x,y,radius){
        this.body=Bodies.circle(100,300,50)
        this.radius=radius
        World.add(world,this.body)
    }
    display(){
        var pos= this.body.position
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        pop();
        ellipseMode(CENTER)
        ellipse(pos.x,pos.y,this.radius)
      }
}