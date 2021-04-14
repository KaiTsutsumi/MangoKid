class Stone{
    constructor(x,y,r){
        var options= {
            isStatic:false,
            resistitution: 0,
            friction:1.0,
            density:1.2
        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.image = loadImage("stone.png");
        this.body = Bodies.circle(this.x, this.y, this.r, options)
        World.add(world, this.body);
    
    }
    display(){
        var stonePos = this.body.position;
        push();
        translate(stonePos.x, stonePos.y);
        imageMode(CENTER);
        ellipseMode(RADIUS);
        image(this.image, 0,0,this.r*2, this.r*2);
        pop();
    }
}