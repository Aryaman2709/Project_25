
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
	dustbinImage = loadImage("dustbingreen.png")
}


function setup() {
	createCanvas(1600, 400);
	background("black")
	engine = Engine.create();
    world = engine.world;
	
	paper1 = new Paper(100,100,30) 
	box1 =new Dustbin(1300,370,150,20);
	box2 = new Dustbin(1232,280,5,195);
	box3 = new Dustbin(1368,280,5,195);

	ground = Bodies.rectangle(800,390,1600,20,{isStatic:true})
	World.add(world, ground);


	//Create the Bodies Here.
   


  
}


function draw() {
  rectMode(CENTER);
  background("gray");
  Engine.update(engine);
  paper1.display();
  box1.display();
  box2.display();
  box3.display();
  imageMode(CENTER);
  image(dustbinImage, 1300, 280,150,200);
  rectMode(CENTER);
  fill("yellow");
  rect(ground.position.x, ground.position.y, 1600,20);
  keyPressed();
}

function keyPressed(){
	if(keyDown(UP_ARROW)){
		Matter.Body.applyForce(paper1.body, paper1.body.position,{x:15, y:-15});
	}
}