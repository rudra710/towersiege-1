const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function setup() {
  var canvas = createCanvas(1000,400);
  
  engine = Engine.create();
  world = engine.world;

  block1= new Block(390, 270, 50, 30);
  block2= new Block(380, 270, 50, 30);
  block3= new Block(370, 270, 50, 30);
  block4= new Block(360, 270, 50, 30);
  block5= new Block(395, 280, 50, 30);
  block6= new Block(385, 280, 50, 30);
  block7= new Block(375, 280, 50, 30);
  block8= new Block(387, 280, 50, 30);
  block9= new Block(397, 280, 50, 30);
  block10= new Block(400, 280, 50, 30);

  block11= new Block(690, 170, 50, 30);
  block12= new Block(680, 170, 50, 30);
  block13= new Block(670, 170, 50, 30);
  block14= new Block(660, 170, 50, 30);
  block15= new Block(695, 180, 50, 30);
  block16= new Block(685, 180, 50, 30);
  block17= new Block(675, 180, 50, 30);
  block18= new Block(687, 180, 50, 30);
  block19= new Block(697, 180, 50, 30);
  block20= new Block(700, 180, 50, 30);

  bomb= new Block(200, 180, 50, 50);
  

  base1 = new Ground(400,290,240,10);
  base2 = new Ground(700,190,240,10);

  sling = new Slingshot(bomb.body,{x:200, y:180});




}

function draw() {
  background("pink");  
  Engine.update(engine);

 block1.display();
 block2.display();
 block3.display();
 block4.display();
 block5.display();
 block6.display();
 block7.display();
 block8.display();
 block9.display();
 block10.display();
 
 block11.display();
 block12.display();
 block13.display();
 block14.display();
 block15.display();
 block16.display();
 block17.display();
 block18.display();
 block19.display();
 block20.display();

 bomb.display();
 sling.display();
 

 base1.display();
 base2.display();

  
  drawSprites();

}

function mouseDragged(){
    Matter.Body.setPosition(bomb.body, {x: mouseX , y: mouseY});
   
}


function mouseReleased(){
    Slingshot.fly();
   
}

