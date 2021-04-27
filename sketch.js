const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;

var rubber1;
var rubber2;
var rubber3;
var rubber4;

var iron1;
var iron2;
var iron3;

var stone1;
var stone2;
var stone3;
var stone4;
var stone5;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,100)
    hammer = new Hammer(10,100);

    rubber1 = new Rubber(500, 300, 30);
    rubber2 = new Rubber(600, 250, 30);
    rubber3 = new Rubber(700, 200, 30);
    rubber4 = new Rubber(750, 180, 30);

    iron1 = new Iron(810,260, 80, 80, PI/2);
    iron2 = new Iron(790,260, 80, 80, PI/2);
    iron3 = new Iron(850,260, 80, 80, PI/2)

    stone1 = new Stone(787,100, 50, 50, PI/2);
    stone2 = new Stone(795,200, 50, 50, PI/2);
    stone3 = new Stone(810,300, 50, 50, PI/2);
    stone4 = new Stone(817,400, 50, 50, PI/2);
    stone5 = new Stone(824,500, 50, 50, PI/2);


}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();

    rubber1.display();
    rubber2.display();
    rubber3.display();
    rubber4.display();

    iron1.display();
    iron2.display();
    iron3.display();   

    stone1.display();
    stone2.display();
    stone3.display();
    stone4.display();
    stone5.display();
 
}