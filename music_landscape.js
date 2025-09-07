

function draw_one_frame(words, vocal, drum, bass, other,counter) {
  background(150, 200, 255);
  drawMushroomHouse(100, height - 200);
  fill(255); 
  noStroke();
  ellipse(100, 100, 60, 60);
  ellipse(130, 90, 80, 80);
  ellipse(170, 100, 60, 60);

  ellipse(400, 150, 50, 50);
  ellipse(430, 140, 70, 70);
  ellipse(470, 150, 50, 50);

function drawMushroomHouse(x, y) {
  push();
  translate(x, y);

  scale(1.8); 

  
  fill(255);
  rect(-30, -60, 60, 60, 20);

  
  fill(150, 75, 0); 
  rect(-10, -30, 20, 40, 5);
  fill(255, 215, 0); 
  ellipse(5, -10, 5, 5);

  
  fill(220, 0, 0);
  ellipse(0, -70, 100, 60); 

 
  fill(255);
  ellipse(-25, -75, 15);
  ellipse(20, -78, 10);
  ellipse(0, -65, 12);

  pop();
}

  
  let grassHeight = 200;  
fill(76, 175, 80);       
rect(0, height - grassHeight, width, grassHeight);


  let tileSize = 40;
  for (let x = 0; x < width; x += tileSize) {
    fill(139, 69, 19);
    rect(x, height - tileSize, tileSize, tileSize, 8);

    
    fill(34, 139, 34); 
    ellipse(x + tileSize / 2, height - grassHeight, tileSize * 0.9, tileSize * 0.3);
  }

 }