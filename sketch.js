var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score =0;
var rand;
var balls =  []
var ball
var gameState ="start";
var count = 0
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  // //create division objects
  // for (var k = 0; k <=80; k = k + 80) {
  //   divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  // }

  // for (var k = 0; k<=100; k=k +80){
  //   divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  // }

  for (var k = 0; k <=width; k = k + 80)
   { divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight)); }

 

  //create 1st row of plinko objects
  for (var j = 75; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,75));
  }

  //create 2nd row of plinko objects
  for (var j = 50; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,175));
  }

  for (var j = 75; j <=width-10 ; j=j+50) {

    plinkos.push(new Plinko(j,275));
  }

  
  for (var j = 50; j <=width-10 ; j=j+50) {

    plinkos.push(new Plinko(j,375));
  }

  //create 3rd row of plinko objects

  
  //create 4th row of plinko objects


  //create particle objects
  
    
}
 


function draw() {
  background("black");
  textSize(20)
 
  Engine.update(engine);
  ground.display();
  
  //display the plinkos 
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();   
  }
   
  //display the divisions
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

  //display the paricles `  

} 

if(ball!=null)
{
   ball.display();
    
    if (ball.body.position.y>760)
    {
          if (ball.body.position.x < 300) 
          {
              score=score+500;      
              ball=null;
              if ( count>= 5) gameState ="end";                          
          }


          else if (ball.body.position.x < 600 && ball.body.position.x > 301 ) 
          {
                score = score + 100;
                ball=null;
                if ( count>= 5) gameState ="end";

          }
          else if (ball.body.position.x < 900 && ball.body.position.x > 601 )
          {
                score = score + 200;
                ball=null;
                if ( count>= 5)  gameState ="end";

          }      
          
    }

  }

for (var k = 0; k < divisions.length; k++) 
{
 divisions[k].display();
}




function mousePressed()
{
if(gameState!=="end")
{
  count++;
 ball=new Ball(mouseX, 10, 10, 10); 
}   
}