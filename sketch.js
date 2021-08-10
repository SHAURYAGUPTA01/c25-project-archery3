const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var player, playerBase;
var computer, computerBase;
var playerArrow
//Declare an array for arrows playerArrows = [ ]
var arrows = []


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;

  playerBase = new PlayerBase(300, random(450, height - 300), 180, 150);
  player = new Player(285, playerBase.body.position.y - 153, 50, 180);
  playerArcher = new PlayerArcher(340, playerBase.body.position.y - 180, 120, 120);
  computerBase = new ComputerBase(  width - 300,  random(450, height - 300), 180, 150 );
  computer = new Computer( width - 280, computerBase.body.position.y - 153, 50, 180);
  computerArcher = new ComputerArcher(width - 340,computerBase.body.position.y - 180,120,120);

}

function draw() {
  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

  for (var i = 0; i < arrows.length; i++) {
    showArrows(arrows[i], i);
  }
 
  playerBase.display();
  player.display();
  

  computerBase.display();
  computer.display();
  
  playerArcher.display();
  computerArcher.display()
 ;

 // Use for loop to display arrow using showArrow() function


}

function keyPressed() {

  if(keyCode === 32){
    // create an arrow object and add into an array ; set its angle same as angle of playerArcher
    playerArrow = new PlayerArrow(playerArcher.x, playerArcher.y,100,5);
    arrows.push(playerArrow);
  }
}

//Display arrow and Tranjectory
function showArrows(arrows,index) {
    playerArrow.display()
    if (arrows.body.position.x >= width || arrows.body.position.y >= height - 50) {
      Matter.World.remove(world, arrows.body);
      arrows.splice(index, 1);
    }

}

function keyReleased () {

  if(keyCode === 32){
    //call shoot() function for each arrow in an array playerArrows
    playerArrow.shoot();
  }
}
