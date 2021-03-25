const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;
var box1, box2, box3, box4, box5, box6, box7,
    box8, box9, box10, box11, box12, box13, box14, 
    box15, box16, box17, box18, box18, box19, box20, box21;

var shooter;
var sling;

function setup() {
  createCanvas(1200,600);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(850,500,500,30);

  box1 = new Box(650,445);
  box2 = new Box(710,445);
  box3 = new Box(770,445);
  box4 = new Box(830,445);
  box5 = new Box(890,445);
  box6 = new Box(950,445);
  box7 = new Box(1010,445);

  box8 = new Box(710,365);
  box9 = new Box(770,365);
  box10 = new Box(830,365);
  box11 = new Box(890,365);
  box12 = new Box(950,365);

  box13 = new Box(770,285);
  box14 = new Box(830,285);
  box15 = new Box(890,285);

  box16 = new Box(830,205);

  shooter = new Shooter(150,200,5,15);

	SlingShot= new SlingShot(shooter.body,{x:150, y:200});


}

function draw() {
  background(0);  
  Engine.update(engine);
  text(mouseX +","+ mouseY,50,50 );
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();

  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();

  box13.display();
  box14.display();
  box15.display();

  box16.display();

  shooter.display();
  SlingShot.display();
  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(shooter.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  SlingShot.fly();
}