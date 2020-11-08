const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var hexagon, slingshot;
var life = 2;
var gameState = "onSling";
var score = 0;
function preload() {
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
 

  platform = new Ground(800, 300, 250, 20);
    hexagon = new Bird(200,200);
  block1 = new Block(890,280,40,40);
  block2 = new Block(845,280,40,40);
  block3 = new Block(800,280,40,40);
  block4 = new Block(755,280,40,40);
  block5 = new Block(710,280,40,40);
 
  bblock1 = new Block(845,240,40,40);
  bblock2 = new Block(800,240,40,40);
  bblock3 = new Block(755,240,40,40);

  bbblock1 = new Block(800,200,40,40);








    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(hexagon.body,{x:200, y:200});
}

function draw(){
    background(0);
    Engine.update(engine);
    
   ground.display();
  platform.display();
    hexagon.display();
    slingshot.display();    

    block1.display()
    block2.display()
    block3.display()
    block4.display()
    block5.display()

    bblock1.display()
    bblock2.display()
    bblock3.display()

    bbblock1.display()


    block1.score()
    block2.score()
    block3.score()
    block4.score()
    block5.score()
   
    bblock1.score()
    bblock2.score()
    bblock3.score()
  
    bbblock1.score()


    if(score!=450){
    text("life:",20,40)
 text(life,40,40)
 text("score"+score,80,40)
    }
if(score==450){
    textSize(200);
    text("You Win",150,300)
}


}

function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(hexagon.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode === 32){
        if(life>0){
        slingshot.attach(hexagon.body);
        life=life-1
        }
    }
}