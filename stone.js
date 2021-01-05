class Stone{
    constructor(x,y,r){
        var options={
            isStatic: false,
            density: 1.2,
            friction:1,
            restitution: 0
        }
        this.stone= Bodies.circle(x,y,r,options);
        this.r= r;
        this.width= width;
        this.height= height;
        this.image= loadImage("stone.png");

        World.add(world,this.stone);
    }
    display(){
        var p= this.stone.position;
        var angle=this.stone.angle;
        push();
        imageMode(CENTER);
        translate(p.x,p.y);
        rotate(angle);
        image(this.image,0,0,this.r,this.r);
        pop();
        
    }
}