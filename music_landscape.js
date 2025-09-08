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

pop();







}


