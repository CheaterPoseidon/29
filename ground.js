class Ground extends BaseClass {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      super(x,y,width,height,options)
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      
      rect(pos.x, pos.y, this.width, this.height);
    }
  };
