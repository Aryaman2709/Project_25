class Paper{
    constructor(x,y,r){
        var paper_options={
            isStatic:false,
            'restitution':0.3,
            'friction':0.5,
            'density':1.2
        }
        this.body = Bodies.circle(x,y,r,paper_options)
        this.r = r;
        this.image = loadImage("paper.png");
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, this.r +54, this.r+55);
    }
}