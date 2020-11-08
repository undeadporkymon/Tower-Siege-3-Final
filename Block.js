class Block {
    constructor(x,y,width,height) {
      var options = {
          isStatic: false
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.Visiblity = 255;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill(255);
      rect(pos.x, pos.y, this.width, this.height);
      
      if(this.body.speed >= 3){
        World.remove(world, this.body);
        push();
        this.Visiblity = this.Visiblity - 5;
        fill(this.Visiblity)
        rect( pos.x, pos.y, 40, 40);
        pop();
      
      } 
  

    }
    score(){
      if(this.Visiblity>=0&&this.Visiblity<=245){

        score++;

      }}
  };
