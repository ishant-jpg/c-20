var a,b

function setup() {
  createCanvas(1200,800);
  a=createSprite(600, 400, 50, 80)
  b=createSprite(400, 200,80, 30 )
  a.shapeColor="green"
  b.shapeColor="green"
}

function draw() {
  background(255,255,255);
  a.x=World.mouseX
  a.y=World.mouseY
  if(a.x-b.x<b.width/2+a.width/2&&a.x-a.x<b.width/2+a.width/2
    &&a.y-b.y<a.height/2+b.height/2&&b.y-a.y<b.height/2+a.height/2){
    a.shapeColor="red"
    b.shapeColor="red"
  }
  else{
    a.shapeColor="green"
    b.shapeColor="green"
  }
  drawSprites();
}