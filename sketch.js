var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var obj1,obj2,obj3,obj4,
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
 createSprite(100,100);
 createSprite(225,100);
 createSprite(350,100);
 createSprite(475,100);

	engine = Engine.create();
	world = engine.world;

	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	

	//Create a Ground
	//ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	//World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  obj1BounceOff(obj2);
  obj2BounceOff(obj3);
  obj3BounceOff(obj4
  if(keydown("right Arrow")){
 obj4.velocityX= -3
  }
  
  drawSprites();
 
}



