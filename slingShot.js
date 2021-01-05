class SlingShot{
    constructor(bodyA,pointB){
        var options={
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.4,
            length: 40
          }
        this.sling= Constraint.create(options);
        this.pointB= pointB;
        World.add(world,this.sling);
    }
    
    display(){
       
    
            var Pa= this.sling.bodyA.position;
            var Pb= this.pointB;
            push();
            stroke("black");
            strokeWeight(5);
            line(Pa.x,Pa.y,Pb.x,Pb.y);
            pop();
        
    }
  
    }
    