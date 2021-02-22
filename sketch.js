
var game, gameState;
var BG, level1BG, level1bac,level1bac2;
var BGMusic, JumpSound, DragonRoar, DragonFire,EndLV1;
var Ground1, Ground2, Ground3, Ground4;
var Ground, fakeGround, Hill;
var MonskeyIdle, Monskey, MonskeyWalkR,MonskeyWalkL,MonskeyJump,MonskeyDies,DeadMonskey;
var DemonFly;
var MonskeyGroup, edges;
var GoblinWalking, GoblinIdle, Enemy1, Enemy2, demonMonskey;
var DragonFlyingL, fireGroup;
var obstacleGroup;
var lives = 3;
var life1, life2, life3;
var level1bac2;
var monskeyRage = 0;




function preload() {
  BGMusic = loadSound("Sounds/MenuMusic.mp3");
  BG = loadImage("Images/MenuPG.jpg");
  level1BG = loadImage("Images/Level 1 Bg.jpg");

  Ground1 = loadImage("Images/Ground 1.png");
  Ground2 = loadImage("Images/Ground 2.png");
  Ground3 = loadImage("Images/Ground 3.png");
  Ground4 = loadImage("Images/Ground 4.png");
  
  MonskeyIdle = loadAnimation("Images/Idle 1.png","Images/Idle 2.png","Images/Idle 3.png");
  MonskeyWalkR = loadAnimation("Images/Walking 1.png","Images/Walking 2.png","Images/Walking 3.png","Images/Walking 4.png","Images/Walking 5.png","Images/Walking 6.png","Images/Walking 7.png","Images/Walking 8.png","Images/Walking 9.png","Images/Walking 10.png","Images/Walking 11.png")
  MonskeyWalkL = loadAnimation("Images/Walking 1 L.png","Images/Walking 2 L.png","Images/Walking 3 L.png","Images/Walking 4 L.png","Images/Walking 5 L.png","Images/Walking 6 L.png","Images/Walking 7 L.png","Images/Walking 8 L.png","Images/Walking 9 L.png","Images/Walking 10 L.png","Images/Walking 11 L.png")
  MonskeyJump = loadAnimation("Images/Jump 1.png","Images/Jump 2.png","Images/Jump 3.png","Images/Jump 4.png","Images/Jump 3.png","Images/Jump 2.png","Images/Jump 1.png");
  MonskeyJumpL = loadAnimation("Images/Jump 1 L.png","Images/Jump 2 L.png","Images/Jump 3 L.png","Images/Jump 4 L.png","Images/Jump 3 L.png","Images/Jump 2 L.png","Images/Jump 1 L.png");
  GoblinWalkingR = loadAnimation("Images 2/Goblin 1.png","Images 2/Goblin 2.png","Images 2/Goblin 3.png","Images 2/Goblin 4.png","Images 2/Goblin 5.png","Images 2/Goblin 6.png","Images 2/Goblin 7.png");
  GoblinWalkingL = loadAnimation("Images 2/Goblin 1L.png","Images 2/Goblin 2L.png","Images 2/Goblin 3L.png","Images 2/Goblin 4L.png","Images 2/Goblin 5L.png","Images 2/Goblin 6L.png","Images 2/Goblin 7L.png");
  DragonFlyingL = loadAnimation("Images 2/Dragon L1.png","Images 2/Dragon L2.png","Images 2/Dragon L3.png");
  Fireball = loadAnimation("Images/Small Fireball.png","Images/Medium Fireball.png","Images/Big Fireball.png");
  GoblinAttack = loadAnimation("Images 2/GobHit 1L.png","Images 2/GobHit 2L.png","Images 2/GobHit 3L.png","Images 2/Goblin 1L.png","Images 2/Goblin 2L.png","Images 2/Goblin 3L.png","Images 2/Goblin 4L.png","Images 2/Goblin 5L.png","Images 2/Goblin 6L.png","Images 2/Goblin 7L.png");
  DeadMonskey = loadImage("Images/Hit 9.png");                                                                                    //
 // noLoop();
  MonskeyDies = loadAnimation("Images/Hit 9.png");
  MonskeySmash = loadAnimation("Images/Smash 1.png","Images/Smash 2.png","Images/Samsh 3.png","Images/Smash 4.png","Images/Samsh 5.png","Images/Smash 6.png","Images/Smash 7.png","Images/Smash 8.png","Images/Smash 9.png");
  DemonFly = loadAnimation("Images 2/Demon 1.png","Images 2/Demon 2.png","Images 2/Demon 3.png");
  

  // Sound effects
  JumpSound = loadSound("Sounds/Gorilla Jump SE.mp3");
  DragonRoar = loadSound("Sounds/Dragon Sound.mp3");
  DragonFire = loadSound("Sounds/Dragon Fire (2).mp3");
  levelOneMusic = loadSound("Sounds/LevelOne Music.mp3");
  groundSmash = loadSound("Sounds/Ground Smash.mp3");
  EndLV1 = loadSound("Sounds/End LV1.mp3");
  
}

function setup() {
  createCanvas(1600,400);
 

  game = new Game();
  //game.start();
 // gameState = "start";
  game.start();
  gameState = "start";


  
  level1bac = createSprite(4800,195,4000,20);
  level1bac.addImage(level1BG);


 

  ///////////////////////////////////////
  Ground = createSprite(4800,370,5000,20);

  Ground.addImage("Ground3",Ground2);
  //Ground.debug = true;
  Ground.setCollider("rectangle",0,0,400,50);

  // all groups
  obstacleGroup = createGroup();
  enemyGroup = createGroup();
  dragonGroup = createGroup();
  fireGroup = createGroup();
  GoblinGroup = createGroup();


  
 
  Monskey = createSprite(150,360,40,40);
  Monskey.addAnimation("Idle",MonskeyIdle);
  Monskey.addAnimation("Death",MonskeyDies)
  Monskey.addAnimation("WalksLeft",MonskeyWalkL);
  Monskey.addAnimation("Walks",MonskeyWalkR);
  Monskey.addAnimation("Jump",MonskeyJump);
  Monskey.addAnimation("JumpL",MonskeyJumpL);
  Monskey.addAnimation("SmashR",MonskeySmash);


  // End Demon Sprite
  Demon = createSprite(17400, 100, 40, 80);
  Demon.scale = 1.5;
  Demon.addAnimation("Flying",DemonFly);
 

  
  
 // all other animations setup 

 // start barrier sprite
 startBarrier = createSprite(122,200,1,400);
 startBarrier.visible = false;

  

  
  //Monskey.debug = true;
  Monskey.setCollider("rectangle",0,0,40,40);

  fakeGround = createSprite(150,365,40,10);
  fakeGround.visible = false;
  
 

  //if(gameState === "level1" || gameState === "level2") {
    life1 = createSprite(100,20,20,20);
    life1.addAnimation("Life1",MonskeyIdle);
    life1.scale = 0.6;
    life2 = createSprite(1500,20,20,20);
    life2.addAnimation("Life2",MonskeyIdle);
    life2.scale = 0.6;
    life3 = createSprite(1550,20,20,20);
    life3.addAnimation("Life3",MonskeyIdle);
    life3.scale = 0.6;
  
  //  }


    
}

function draw() {



   Monskey.collide(startBarrier);


  // for transition
  if(keyDown("space")) {
   game.level1();
   gameState = "level1"
  
  }

 //

  if(gameState === "level1"){
    BGMusic.stop(); 
    fakeGround.x = Monskey.x;
   
 

    if(Monskey.isTouching(enemyGroup) && lives === 3) {
        lives = 2;
        life3.visible = false;
       
      } else if(Monskey.isTouching(enemyGroup)) {
        lives = 1 ;
        life2.visible = false;
       // console.log("Works1");
      } else if(Monskey.isTouching(enemyGroup) && lives === 0) {
        lives = 0;
        life1.visible = false;
        //console.log("Works2");
      }
     
      //console.log(lives);


 
  
  // For jumping
  if(keyDown(UP_ARROW) || keyIsDown(UP_ARROW) && keyIsDown(RIGHT_ARROW)) { 
    Monskey.velocityY = -15;
    Monskey.changeAnimation("Jump");    
    JumpSound.play();
    JumpSound.playMode("untilDone");
   } else if (!keyWentDown(UP_ARROW) && Monskey.y > 330 && Monskey.velocityX === 0)  { 
    Monskey.changeAnimation("Idle");    
    //Monskey.velocityY = 0;
   
   } 

   if(keyWentDown(UP_ARROW) && keyIsDown(LEFT_ARROW)) { 
    Monskey.velocityY = -15;
    Monskey.changeAnimation("JumpL");    
    JumpSound.play();
   } else if (!keyWentDown(UP_ARROW) && Monskey.y > 330 && Monskey.velocityX === 0)  { 
    Monskey.changeAnimation("Idle");    
    //Monskey.velocityY = 0;
   
   } 
   
// for moving right
   if(keyWentDown(RIGHT_ARROW)) {
    Monskey.velocityX = 8;
    Monskey.changeAnimation("Walks");
    //console.log("Right arrow key is pressed"); 
  } else if(keyWentUp(RIGHT_ARROW)) {
    Monskey.velocityX = 0;
    Monskey.changeAnimation("Idle");
  }
  camera.x = Monskey.x;
 
  
// For moving left
  if(keyWentDown(LEFT_ARROW)) {
    Monskey.velocityX = -10;
    
    Monskey.changeAnimation("WalksLeft"); ;
  } else if(keyWentUp(LEFT_ARROW)) {
    Monskey.velocityX = 0;
    Monskey.changeAnimation("Idle");
  }

  
  if(keyDown(DOWN_ARROW)) {
    Monskey.changeAnimation("SmashR");
    monskeyRage = 2;
    groundSmash.play();
    groundSmash.playMode('untilDone');
  } else { 
    monskeyRage = 0;
  }
  console.log(monskeyRage);

  if(monskeyRage === 2 && GoblinGroup.collide(Monskey)) {
    GoblinGroup.destroyEach();
  }




   
// The gravity of Monskey
   Monskey.velocityY = Monskey.velocityY + 1;

  if(Monskey.collide(fakeGround)) {
    Monskey.velocityY = 0;
  }
  
 //for resetting ground
if(Monskey.x > 9525) {
  level1bac.x = 12726;
  //startBarrier.x = 127;

}

if(Monskey.x > 9525) {
 Ground.x = 12726;
}



// for spawing fireballs from dragons  
  if(Monskey.collide(dragonGroup)) {
      fireball = createSprite(0,0,20,20);
      fireGroup.add(fireball);
      fireball.x = Monskey.x;
      fireball.y = Monskey.y -150;
      fireball.velocityX = Monskey.velocityX;
      fireball.velocityY = 10;
      fireball.addAnimation("shoot",Fireball);
      DragonFire.play();
      DragonFire.playMode('untilDone');
    }

// So Monskey collides with the obstacles
  Monskey.collide(obstacleGroup)

  spawnEnemy();
  spawnObstacles();

  if(Monskey.isTouching(GoblinGroup) && monskeyRage === 0) {
    Monskey.changeAnimation("Death");
    Monskey.velocityX = 0;
    Monskey.velocityY = 0;
    GoblinGroup.setVelocityXEach(0);
  }


  } /// end level 1 gamestate

  // Monskey dies when tocuhing fireballs. 
  
  if(Monskey.collide(fireGroup)) {
    fireGroup.destroyEach();
    gameState = "End";
   
  }
   
  /// END STATE
 if(gameState === "End") {
   Monskey.changeAnimation("Death"); // fix this looping problem.
   Monskey.velocityY = Monskey.velocityY + 1;
   Monskey.velocityX = 0;
   Ground.velocityX = 0;
   Monskey.collide(fakeGround);
 }


 if(Monskey.x > 17000) {
   gameState = "level1Over"
   console.log(gameState);
   Monskey.velocityX = 0;
   // Monskey.velocityY = 0;
    Monskey.changeAnimation("Idle");
    levelOneMusic.stop();
    obstacleGroup.destroyEach();
    EndLV1.play();
    EndLV1.playMode("untilDone");
    enemyGroup.destroyEach();
    Monskey.velocityY = Monskey.velocityY + 1;
    Monskey.collide(fakeGround);
    fakeGround.velocityX = 0;
  
 }


  drawSprites();

  if(gameState === "level1Over") {
    text("Who are you!",Monskey.x + 100,100);
   
  if(keyDown(RIGHT_ARROW)) { 
    text("Where is my wife and son!",Monskey.x + 100,150);
    
  }
  }
  // to display menu page
  if(gameState === "start") {
    background(BG);
 
}

}

// function to spawn obstacles
function spawnObstacles() {
  if(World.frameCount % 80 === 0 && Monskey.velocityX === 8) {
  
    Obstacle = Math.round(random(1,3));
    switch(Obstacle) {
  case 1:
  Obstacle1 = createSprite(Monskey.x + 1000,303,300,200);
  AngleHill = createSprite(Monskey.x + 1000,340,100,100);
  //AngleHill.debug = true;
  Obstacle1.lifetime = 800;
  AngleHill.lifetime = 800;
  AngleHill.visible = false;
  AngleHill.rotation = 45;
  Obstacle1.addImage("Obstacle1",Ground4);
  Obstacle1.setCollider("rectangle",-85,15,180,100);
  obstacleGroup.add(Obstacle1);
  obstacleGroup.add(AngleHill);
  //Hill.debug = true;
    break;
  case 2:
    var y = random(100,200);
    Obstacle2 = createSprite(Monskey.x + 1000,y,100,10);
    Obstacle2.addImage("Obstacle2",Ground1);
    Obstacle2.lifetime = 800;
    obstacleGroup.add(Obstacle2);
    //Obstacle2.debug = true;
    break;
  case 3: 
    var y2 = random(100,200);
    Obstacle3 = createSprite(Monskey.x + 1000,y2,200,10);
    Obstacle3.scale = 0.3;
    Obstacle3.lifetime = 800;
    Obstacle3.addImage("Obstacle3",Ground3);
    obstacleGroup.add(Obstacle3);
    //Obstacle3.debug = true;
    break;
  default: break;
    }
      

} if(Monskey.velocityX === 5) {
  obstacleGroup.setVelocityXEach(-5);
} else if(Monskey.velocityX === -5) {
  obstacleGroup.setVelocityXEach(-10);
} else {
  obstacleGroup.setVelocityXEach(0);
}
}


// function to spawn Enemy
function spawnEnemy() {
   
    var randomHeight = random(200,100);
    
    Enemy = Math.round(random(1,2));
    switch(Enemy) {
      case 1: 
              var rand = random(-3,-8);
              if(World.frameCount % 300 === 0 && Monskey.velocityX === 8) {
              Enemy1 = createSprite(Monskey.x + 1000,340,40,40);
              Enemy1.addAnimation("WalingL",GoblinWalkingL);  
              Enemy1.velocityX = rand; 
              Enemy1.lifetime = 600;
              Enemy1.depth = 3;
              Enemy1.debug = true;
              Enemy1.scale = 1.4;
              Enemy1.setCollider("rectangle",0,0,20,30);
              enemyGroup.add(Enemy1);
              GoblinGroup.add(Enemy1);
              } 
                
              
        break;
      case 2: 
              if(World.frameCount % 300 === 0 && Monskey.velocityX === 8) {
              Enemy2 = createSprite(Monskey.x + 1650,randomHeight,40,40);
              Enemy2.addAnimation("FlyingL",DragonFlyingL);
              Enemy2.lifetime = 600;
              DragonRoar.play();
              //Enemy2.debug = true;
              Enemy2.velocityX = -5;
              Enemy2.setCollider("Circle",0,0,100);
              dragonGroup.add(Enemy2);
              enemyGroup.add(Enemy2);
              //enemyGroup.setVelocityXEach(-5);
              }
        break;
      default: break;


    }

 // }
    
  

}
