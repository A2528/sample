const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, pig1;
var backgroundImg,platform;

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    //platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);
    box6 = new Box(400,320,70,70);
    box7 = new Box(180,320,70,70);
    box8 = new Box(400,240,70,70);
    box9 = new Box(180,240,70,70);
    log2 = new Log(280,260,300,PI/2);
    pig4 = new Pig(280,350);
    pig5 = new Pig(280,220);
    log6 = new Log(280,120,300,PI/2);
   pig6 = new Pig(280,90);
   log7 = new Log(280,90,300,PI/2);


    //bird = new Bird(100,100);

}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();
    box6.display();
    box7.display();
    pig4.display();
    pig5.display();
    log7.display();
log2.display();
box8.display();
box9.display();
log6.display();
pig6.display();
    //bird.display();
    
}
