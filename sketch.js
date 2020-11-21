function setup() {
  createCanvas(800,400);
 movingrect = createSprite(400, 200, 80, 30);
 fixedrect = createSprite(200, 200, 50, 80);
console.log( fixedrect.width/2 + movingrect.width/2)
}

function draw() {
  background(255,255,255);  
movingrect.x = World.mouseX ; 
movingrect.y = World.mouseY ; 
 console.log( movingrect.x - fixedrect.x )
if (movingrect.x -fixedrect.x <= fixedrect.width/2 + movingrect.width/2 && fixedrect.x -  movingrect.x <=  fixedrect.width/2 + movingrect.width/2  &&movingrect.y -fixedrect.y <= fixedrect.width/2 + movingrect.width/2 && fixedrect.y -  movingrect.y <=  fixedrect.width/2 + movingrect.width/2  ) {
movingrect.shapeColor = "red";
fixedrect.shapeColor = "red";

} else {
  movingrect.shapeColor = "green";
fixedrect.shapeColor = "green";
}
  drawSprites();
}