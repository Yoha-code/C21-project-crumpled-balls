
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var ball;
var ground;
var left;
var right;
var top_wall;
var keyCode;


function preload()
{
	
}

function setup() {
	createCanvas(1000, 400);

	var ball_options = {
		isStatic : false,
		restitution: 0.3,
		friction:0,
		density:1.2
	}

	engine = Engine.create();
	world = engine.world;

	
	//Create the Bodies Here.

	ground = new Ground(500, 390, 2000, 10);
	left = new Ground(600, 345, 10, 80);
	right = new Ground(800, 345, 10, 80);
	

	fill("white");
	ball = Bodies.circle(200, 200, 20, ball_options);
	World.add(world, ball);

	Engine.run(engine);

	rectMode(CENTER);

}

function keyPressed(){

	if(keyCode === UP_ARROW){
		
		Matter.Body.applyForce(ball, {x:0, y:0}, {x :70, y :-45});

	}
	
}


function draw() {
  background(0);

  ellipse(ball.position.x, ball.position.y, 20);
  
  

  Engine.update(engine);

  ground.show();
  left.show();
  right.show();
 
  drawSprites();
 
}



