class Drop{
    constructor(x,y){
        var options={
            restitution:0.1,
            isStatic:false
        }
        
        this.rain=Bodies.circle(x,y,5,options)
        this.radius=5;
        World.add(world,this.rain)
    }
    newDrop(){
        if(this.rain.position.y>height){
            Matter.Body.setPosition(this.rain,{x:random(0,500),y:random(0,100)})
        }
    }
    display(){
    fill("lightblue")
    ellipseMode(RADIUS);
    ellipse(this.rain.position.x,this.rain.position.y,this.radius,this.radius)
    }
}