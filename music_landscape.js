let rotationAngle = 0;


function draw_one_frame(words, vocal, drum, bass, other,counter) {
  background(0);



for (let i = 0; i < 200; i++) {
  let x = noise(i, counter * 0.01) * width;
  let y = noise(i + 1000, counter * 0.01) * height;
  let alpha = map(sin(counter * 0.05 + i), -1, 1, 50, 255);
  noStroke();
  fill(255, alpha);
  ellipse(x, y, 1.5, 1.5);
}


push();
translate(width/2, height/2);
noStroke();
fill(0, 80, 90, 40); 
beginShape();
let pointsBg = 180;
let baseRadiusBg = 250;

for (let a = 0; a < TWO_PI; a += TWO_PI / pointsBg) {
  
  let wave = map(vocal, 0, 100, 20, 150);
  let r = baseRadiusBg + sin(a * 6 + counter * 0.15) * wave;
  let x = cos(a) * r;
  let y = sin(a) * r;
  vertex(x, y);
}
endShape(CLOSE);
pop();


push();
translate(width/2, height/2);
noStroke();
fill(30, 100, 100, 60);  
beginShape();
let pointsOrange = 180;
let baseRadiusOrange = 200;

for (let a = 0; a < TWO_PI; a += TWO_PI / pointsOrange) {
  let wave = map(drum, 0, 100, 10, 70); 
  let r = baseRadiusOrange + sin(a * 8 + counter * 0.04) * wave;
  let x = cos(a) * r;
  let y = sin(a) * r;
  vertex(x, y);
}
endShape(CLOSE);
pop();




push();
translate(width / 2, height / 2);

let numRays = 180;
let baseRadius = 120;
strokeWeight(2);
colorMode(HSB, 360, 100, 100);

if (counter > 0) {
  rotationAngle += 0.01; 
}
rotate(rotationAngle);

for (let i = 0; i < numRays; i++) {
  let angle = (TWO_PI / numRays) * i;

  
  let wave = map(bass, 0, 100, 0, 80);
  let dynamicRadius = baseRadius + wave * (0.5 + sin(i * 0.3 + counter * 0.15));

  let x = cos(angle) * dynamicRadius;
  let y = sin(angle) * dynamicRadius;

  stroke(map(i, 0, numRays, 0, 360), 80, 100);
  line(0, 0, x, y);

  let alpha = map(drum, 0, 100, 30, 100);  
  stroke(map(i, 0, numRays, 0, 360), 80, 100, alpha);
  line(0, 0, x, y);
}

colorMode(RGB);
pop();


push();
translate(width / 2, height / 2);
noFill();
strokeWeight(2);

let points = 180;


stroke(180, 100, 255, 150); 
beginShape();
let baseRadius1 = 300;
for (let a = 0; a < TWO_PI; a += TWO_PI / points) {
  let wave = map(drum, 0, 100, 5, 80);
  let r = baseRadius1 + sin(a * 6 + counter * 0.05) * wave;
  let x = cos(a) * r;
  let y = sin(a) * r;
  vertex(x, y);
}
endShape(CLOSE);


stroke(100, 255, 200, 120); 
beginShape();
let baseRadius2 = 380;  
for (let a = 0; a < TWO_PI; a += TWO_PI / points) {
  let wave = map(drum, 0, 100, 5, 120); 
  let r = baseRadius2 + cos(a * 8 + counter * 0.07) * wave; 
  let x = cos(a) * r;
  let y = sin(a) * r;
  vertex(x, y);
}
endShape(CLOSE);



stroke(255, 200, 100, 120); 
beginShape();
let baseRadius3 = 440;  
for (let a = 0; a < TWO_PI; a += TWO_PI / points) {
  let wave = map(drum, 0, 100, 5, 100);  
  let r = baseRadius3 + sin(a * 5 + counter * 0.03) * wave;
  let x = cos(a) * r;
  let y = sin(a) * r;
  vertex(x, y);
}
endShape(CLOSE);

pop();



push();
rectMode(CENTER);
noStroke();

let numBars = 25; 


for (let i = 0; i < numBars; i++) {
  let barHeight = map(bass, 0, 100, 10, 300) + sin(counter*0.1+i)*30;
  let hue = map(i, 0, numBars, 0, 360); 
  fill(hue, 100, 100);
  rect(50 + i*10, height - barHeight/2, 8, barHeight);
}


for (let i = 0; i < numBars; i++) {
  let barHeight = map(drum, 0, 100, 10, 300) + cos(counter*0.1+i)*30;
  let hue = map(i, 0, numBars, 0, 360); 
  fill(hue, 100, 100);
  rect(width - (50 + i*10), height - barHeight/2, 8, barHeight);
}

pop();








}


