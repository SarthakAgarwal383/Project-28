
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;

var bgImg,boy,boyImg;

function preload()
{
bgImg=loadImage("bg.png");	
boyImg=loadImage("boy.png");
}

function setup() {
	createCanvas(1350, 650);


	engine = Engine.create();
	world = engine.world;

	boy= createSprite(170,400,10,10);
	boy.addImage(boyImg);
	boy.scale= 0.15;

	tree= new Tree(1000,300,700,700);
	mango1= new Mango(1000,200,50);
	mango2= new Mango(900,100,50);
	mango3= new Mango(1100,120,50);
	mango4= new Mango(800,180,50);
	mango5= new Mango(1200,120,50);
	mango6= new Mango(1050,80,50);
	mango7= new Mango(1150,230,50);
	mango8= new Mango(1300,200,50);
	mango9= new Mango(900,230,50);
	mango10= new Mango(980,40,50);

	stone= new Stone(200,310,60);

	slingShot= new SlingShot(stone.body,{x:100,y:310} );

	Engine.run(engine);
  
}


function draw() {

	Engine.update(engine);

  rectMode(CENTER);
  background(bgImg);

  
  drawSprites();
 
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

  stone.display();
  slingShot.display();
  
}



