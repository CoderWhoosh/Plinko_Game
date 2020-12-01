const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var divisionHeight = 300;
var ground1,p1;
var particle1;
var score = 0;
var turn = 0;
var gameState = "play";
var divisionArray = [];
var particleArray = [];
var plinkoArray = [];

function setup() {
  createCanvas(800,700);
  engine = Engine.create();
  world = engine.world;
  ground1 = new Ground(width/2,690,width,20);

  for (let i = 0; i <= 800; i = i + 80) {
    divisionArray.push(new Division(i,height-divisionHeight/2,10,divisionHeight));
  }

  for (let p = 0; p <= 800; p = p + 60) {
    plinkoArray.push(new Plinko(p,70,10));
  }
  for (let q = 30; q <= 800; q = q + 60) {
    plinkoArray.push(new Plinko(q,140,10));
  }
  for (let r = 0; r <= 800; r = r + 60) {
    plinkoArray.push(new Plinko(r,210,10));
  }
  for (let s = 30; s <= 800; s = s + 60) {
    plinkoArray.push(new Plinko(s,280,10));
  }
  for (let r = 0; r <= 800; r = r + 60) {
    plinkoArray.push(new Plinko(r,350,10));
  }
}

function draw() {
  /*
  if(frameCount % 60 == 0){
    particleArray.push(new Particle(random(width/2-20,width/2+20),10,10));
    }
  */
  background(0);  
  textSize(20);
  text("Score: " + score,20,40);
  text("500",20,420);
  text("500",100,420);
  text("250",180,420);
  text("250",260,420);
  text("100",340,420);
  text("100",420,420);
  text("250",500,420);
  text("250",580,420);
  text("500",660,420);
  text("500",740,420);
  Engine.update(engine);
  if(particle1 != null){
    particle1.display();
     
    if(particle1.body.position.y >= 600){
  
      if(particle1.body.position.x < 140){
        score = score + 500;
        particle1 = null;
        if(turn>=5) gameState = "end";
      }
       
      else if (particle1.body.position.x < 300 && particle1.body.position.x > 140){
        score = score + 250;
        particle1 = null;
        if(turn>=5) gameState = "end";
      }
       
      else if(particle1.body.position.x < 460 && particle1.body.position.x > 300){
        score = score + 100;
        particle1 = null;
        if(turn>=5) gameState = "end";
      }
      
      else if(particle1.body.position.x < 620 && particle1.body.position.x > 460){
        score = score + 250;
        particle1 = null;
        if(turn>=5) gameState = "end";
      }
      
      else if(particle1.body.position.x < 780 && particle1.body.position.x > 620){
        score = score + 500;
        particle1 = null;
        if(turn>=5) gameState = "end";
      }
    }
  }
  ground1.display();
  if ( gameState =="end") {
    textSize(100);
    text("GameOver", 150, 250);
  }
  for (let a = 0; a < divisionArray.length; a++) {
    divisionArray[a].display();
  }
  
  for (let k = 0; k < plinkoArray.length; k++) {
    plinkoArray[k].display();
  }
  /*
  for (let l = 0; l < plinkoArray.length; l++) {
    plinkoArray[l].display();
  }
  for (let m = 0; m < plinkoArray.length; m++) {
    plinkoArray[m].display();
  }
  for (let n = 0; n < plinkoArray.length; n++) {
    plinkoArray[n].display();
  }
  for (let o = 0; o < plinkoArray.length; o++) {
    plinkoArray[o].display();
  }
  */
  /*
  for (let d = 0; d < particleArray.length; d++) {
    particleArray[d].display();
  }
  */
}
function mousePressed(){
  if(gameState !== "end"){
    turn++;
    particle1 = new Particle(mouseX,10);
  }
}