var tom,tom_img,tom_run,tom_sit;
var jerry,jerry_img,jerry_teas,jerry_see;
var background_img;
function preload() {
    //load the images here
    background_img = loadImage("images/garden.png");
    tom_img = loadImage("images/cat1.png");
    tom_run = loadImage("images/cat2.png");
    jerry_img = loadImage("images/mouse2.png");
    jerry_teas = loadImage("images/mouse3.png");
    tom_sit = loadImage("images/cat4.png");
    jerry_see = loadImage("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    
    //create tom and jerry sprites here
    tom = createSprite(800,605,20,20);
    tom.addImage("cat1",tom_img);
    tom.scale = 0.1; 

    jerry = createSprite(300,605,20,20);
    jerry.addImage("mouse2",jerry_img);
    jerry.scale = 0.1; 
}

function draw() {
   
    background(background_img);
    //Write condition here to evalute if tom and jerry collide
        if(tom.x - jerry.x < (tom.width - jerry.width)/2){
            tom.velocityX = 0;
            tom.addAnimation("cat4",tom_sit);
            tom.changeAnimation("cat4");
            jerry.addAnimation("mouse4",jerry_see);
            jerry.changeAnimation("mouse4");
        }
   
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW){
      tom.velocityX = -5;
      tom.addAnimation("cat3",tom_run);
      tom.changeAnimation("cat3");
      jerry.addAnimation("mouse3",jerry_teas);
      jerry.changeAnimation("mouse3");
  }

}
