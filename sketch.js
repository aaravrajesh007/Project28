
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var boy,stone,base;
var slingShot;
function preload()
{
boyimg = loadImage("Plucking mangoes/boy.png");	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	boy=createSprite(150,630);
	boy.addImage(boyimg);
	boy.scale=0.1;
base = new Base(600,690,1200,10)
	
mango1=new Mango(1020,330);
mango2=new Mango(960,380);
mango3=new Mango(880,400);
mango4=new Mango(1050,400);
mango5=new Mango(930,300);
mango6=new Mango(820,440);
mango7=new Mango(770,370);
mango8=new Mango(840,330);
mango9=new Mango(1100,340);
mango10=new Mango(1130,420);
mango11=new Mango(990,270);


tree = new Tree(1000,630);

stone = new Stone(150,600);
stone.scale=0.1;
slingShot = new SlingShot(stone.body,{x:150,y:300})

}


function draw() {
	Engine.run(engine);

  rectMode(CENTER);
  background("lightblue");
  
  drawSprites();
 //boy.display();
 
 
tree.display();
mango1.display();
mango2.display();
mango3.display();
mango4.display();
mango5.display();
mango6.display();
mango7.display();
mango8.display();
mango9.display();
mango10.display();
mango11.display();

stone.display();
base.display();
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}
 function mouseReleased (){
     slingShot.fly();
 }  


