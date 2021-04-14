
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Render = Matter.Render;

var engine, m1, m2, m3, m4, m5, treeObj, ground, kid, stoneObj, launcher
var launchingForce=100;

function preload()
{
kid = loadImage("boy.png");
}

function setup() {
	createCanvas(1300, 600);

//stone
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(650, 580);
	treeObj = new Tree(1050, 580);
	m1 = new Mango(1100, 100, 30);
	m2 = new Mango(1010, 140, 25);
	m3 = new Mango(1100, 70, 30);
	m4 = new Mango(900, 230, 25);
	m5 = new Mango(900, 160, 30);
	stoneObj = new Stone(235,420,30);
	launcher = new Launcher(stoneObj.body,{x:235,y:420});
    
	Engine.run(engine);
}

function draw() {
  background("lightBlue");
  Engine.update(engine);

  image(kid,200,340,200,300)

  ground.display();
  treeObj.display();
  m1.display();
  m2.display();
  m3.display();
  m4.display();
  stoneObj.display();
  launcher.display();

  detectollision(stoneObj,m1);
  detectollision(stoneObj,m2);
  detectollision(stoneObj,m3);
  detectollision(stoneObj,m4);
  detectollision(stoneObj,m5);
  
  drawSprites();
 
}

function mouseDragged() {
	Matter.Body.setPosition(stoneObj.body, {x:mouseX, y:mouseY})
}

function mouseReleased() {
	launcher.fly();
}

function keyPressed() {
	if (keyCode === 32){
		Matter.Body.setPosition(stoneObj.body, {x:235, y:420});
		launcher.attach(stoneObj.body);
	}
}

function detectollision(lstone,lmango) {
	mangoBodyPosition = lmango.body.position
	stoneBodyPosition = lstone.body.position

	var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);

	if(distance<=lmango.r+lstone.r) {
		Matter.Body.setStatic(lmango.body,false);
	}

}