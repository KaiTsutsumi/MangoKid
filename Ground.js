class Ground{
    constructor(x,y) {
    var options = {
        'isStatic': true
    }
    this.body = Bodies.rectangle(x,y, 800, 20, options);
    this.width = 1300;
    this.height = 40;

    World.add(world, this.body);
}
display() {
    rectMode(CENTER);
    fill("brown");
    rect(this.body.position.x, this.body.position.y, this.width, this.height);
}
}