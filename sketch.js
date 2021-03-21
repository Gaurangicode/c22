const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;

var engine,world;
var ground;
var ball;
function setup() {
  createCanvas(800,400);
  
  engine = Engine.create();
  world = engine.world;

  var ground_options={
    isStatic: true,
  }

  ground = Bodies.rectangle(400,360,800,20,ground_options);
  World.add(world,ground);
  console.log(ground);

  var ball_options={
    restitution:1.5
  }
  ball = Bodies.circle(400,200,30,ball_options);
  World.add(world,ball);

}

function draw() {
  background(0);
  Engine.update(engine) ;
  
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,20);
ellipseMode(CENTER)
ellipse(ball.position.x,ball.position.y,60,60)

}