
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint
var plank,ball1,ball2,ball3,ball4,ball5,chain1,chain2,chain3,chain4,chain5;
function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
	plank = new Ground(width/2,height/4,250,15)
	ball1 = new Ball(width/2-90,height/2,35)
	ball2 = new Ball(width/2-55,height/2,35,35)
	ball3 = new Ball(width/2-20,height/2,35,35)
	ball4 = new Ball(width/2+15,height/2,35,35)
	ball5 = new Ball(width/2+50,height/2,35,35)
	chain1 = new Chain(ball1.body,plank.body,-90,0)
	chain2 = new Chain(ball2.body,plank.body,-55,0)
	chain3 = new Chain(ball3.body,plank.body,-20,0)
	chain4 = new Chain(ball4.body,plank.body,+15,0)
	chain5 = new Chain(ball5.body,plank.body,+50,0)
	Engine.run(engine)
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  drawSprites();
 plank.display();
ball1.display();
ball2.display();
ball3.display();
ball4.display();
ball5.display();
chain1.display();
chain2.display();
chain3.display();
chain4.display();
chain5.display();
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball1.body,ball1.bodyposition,{x:-50,y:-50})
	}
}



