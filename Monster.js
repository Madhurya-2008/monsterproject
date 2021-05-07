class Monster {
    constructor(x, y){
      var options = {
        restitution:0.8,
        friction:1.0,
        density:1.0,
        isStatic:true
      }
      this.body = Bodies.circle(x,y,100,options);
      this.radius = 100
      this.image = loadImage("monster.png");
      this.visibility = 255
      World.add(world,this.body)
    }
  flu() {
    Matter.Body.setStatic(this.body,false)
  }
   display(){
    console.log (this.body.speed);

    if(this.body.speed < 5){
    var angle = this.body.angle;
    push();

    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0,this.radius,this.radius);
    pop();}

    else{
      World.remove(world, this.body);
      push();
      tint(255,this.visibility);
      image(this.image, this.body.position.x, this.body.position.y, 100, 100);
      this.visibility = this.visibility - 50;
      console.log(this.visibility)
      pop();
    
    if((this.visibility<0) && (this.visibility>-100)) {
      console.log("hi");
      score++
      
    }}



     
   }
  
  }

