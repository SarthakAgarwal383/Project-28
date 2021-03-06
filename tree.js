class Tree{
    constructor(x,y,width,height){
        var options={
            isStatic: true,
        }
        this.tree= Bodies.rectangle(x,y,width,height,options);
        this.height= height;
        this.width= width;
        this.image= loadImage("tree.png");

        World.add(world,this.tree);
    }
    display(){
        var p= this.tree.position;

        push();
        imageMode(CENTER);
        image(this.image,p.x,p.y,this.width,this.height);
        pop();
    }

    
}