let bullets = []
let enemies = []
let score = 0
function setup() {
  createCanvas(400, 400);
  //spawn enemies
  for (let i = 0; i < 10; i++){
    let enemy = {
      x : random(0,width),
      y : random(-800, 0) //spawning the enemies from above the screen
    }
    enemies.push(enemy)
  } // i<10 - looping it 10 times; making an enemy x 10
}

function draw() {
  background(100,200,250);
  rectMode(CENTER)
  //circle - player, draw the player
  circle(mouseX, height - 50,25) 
  
  //update and draw the bullets
  for( let bullet of bullets){
    bullet.y -= 10 //the higher the no. more the speed of the bullets
    circle(bullet.x, bullet.y, 10)
  }
  //update and draw the enemies
  for( let enemy of enemies){
    enemy.y += 2 //speed of enemy randomly popping from up
    rect(enemy.x, enemy.y, 10)
    if (enemy.y > height){
      text("You lose!",width/2, height/2) //placing text on the screen
    noLoop()
    }
  }
  
  //collision of bullets with enemies
  for (let enemy of enemies){
    for (let bullet of bullets){
      //if the distance between bullets and enemies is less than 10, then both will vanish
      if (dist(enemy.x, enemy.y, bullet.x, bullet.y) < 10) {
        enemies.splice(enemies.indexOf(enemy), 1)
        bullets.splice(bullets.indexOf(bullets),1)
  let newEnemy = {
      x : random(0,width),
      y : random(-800, 0) //spawning the enemies from above the screen
    }
    enemies.push(newEnemy);
        score += 1
      }
    }
  }
  
  text(score, 15, 25) //positions the score to the top left
}

function mousePressed() {
  //spawn a bullet with every click
  let bullet= {
    x : mouseX,
    y : height - 50
  }
  bullets.push(bullet)
}

//Shooter game requirements:
//Players, bullets, enemies, collisions, score- lose/win
//Player will move horizontal so on the x-axis
//mouseX helps make the circle move along with the cursor
//through Im clicked, we will come to know the no. of times you have clicked on the canvas
// -= means keeping the same value but just taking a little bit off
