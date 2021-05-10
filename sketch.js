var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
//var particles = [];
var plinkos = [];
var divisions=[];

var particle;
var gameState="play";

var score=0;
var turn=0;

var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
 text("Score : "+score,20,30);
 text("turns-"+turn, 700,30)
  Engine.update(engine);

  if(gameState==="end"){
textSize(50);
  text("Game Over",260,325);
  }

if(score===2500){
text("Target achieved",240,440);

}




 
textSize(35)
  text(" 500 ", 5, 550);

  text("500",90,550)

  text("500",166,550)

  text("500",252,550)

  text ("100",332,550)

  text("100",412,550)

  text ("100",492,550)

  text("200",572,550)

  text ("200",652,550)

  text("200",732,550)

  textSize(15)
  text(mouseX+" , "+ mouseY,200,30);
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   for (var k = 0; k < divisions.length; k++) {
     
    divisions[k].display();
  }



   if (particle !=null){
particle.display();
if (particle.body.position.y>760){

  if(particle.body.position.x<=320){

    score=score+500;
    particle=null;
    if(turn>=5){

      gameState="end";
    }
  }
  else if (particle.body.position.x<=560 && particle.body.position.x>320){

score=score+100;
particle=null

if(turn>=5){
  gameState="end";
}

  }

else if (particle.body.position.x<=800 && particle.body.position.x>560){

score=score+200;
particle=null

if(turn>=5){
gameState="end";

}


}


}
}
/*
   if(frameCount%60===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     score++;
   }
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }*/
   
}

function mousePressed(){

  if(gameState!="end"){

    turn++;

  particle=new Particle(mouseX,5,10,10);
  
  }

}