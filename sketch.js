const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world,log3,log4,bird;
var box1,ground,box2,box3,box4,pig,log,log2,pig2,box5;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,320,70,70);

    ground = new Ground(600,390,1200,20);

    box2 = new Box(900,320,70,70);

    box3 = new Box(700,280,70,70);

    box4 = new Box(900,280,70,70)

    box5 = new Box(800,230,70,70);

    pig  = new Pig(800,340,50,50);

    pig2 = new Pig(800,270,50,50);

    log = new Log(800,300,300,PI/2);

    log2 = new Log(800,250,300,PI/2);

    log3 = new Log(760,120,150,PI/6);

    log4 = new Log(830,120,150,-PI/6);

    bird = new Bird(180,120);
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    ground.display();
    box2.display();
    box3.display();
    box4.display();
    pig.display();
    log.display();
    log2.display();
    pig2.display();
    box5.display();
    log3.display();
    log4.display();
    bird.display();
   
}