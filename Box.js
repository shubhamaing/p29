class Box{
    constructor(x,y,width,height){
        var options = {
            restitution: 0.5
        }
        this.body = Bodies.rectangle(x,y,60,80,options);
        this.width = 60;
        this.height = 80;
        World.add(world, this.body);
    }
    display(){
        var pos =this.body.position;
        rectMode(CENTER);
        fill("blue");
        rect(pos.x, pos.y, this.width, this.height);
    }
}