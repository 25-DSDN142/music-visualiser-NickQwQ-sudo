

function draw_one_frame(words, vocal, drum, bass, other,counter) {
  background(200);
  translate(width/2, height/2);
  colorMode(HSB, 360, 100, 100);
  strokeWeight(2);
  noFill();

  let totalBars = 180; 
  let innerRadius = 150;
  let maxLineLength = 200;

  for (let i = 0; i < totalBars; i++) {
    let angle = map(i, 0, totalBars, 0, TWO_PI);
    let value = map(other, 0, 100, 0, 1);  
    let fftValue = noise(counter * 0.01 + i) * value * maxLineLength;

    let x1 = cos(angle) * innerRadius;
    let y1 = sin(angle) * innerRadius;
    let x2 = cos(angle) * (innerRadius + fftValue);
    let y2 = sin(angle) * (innerRadius + fftValue);

    let hue = map(i, 0, totalBars, 0, 360);
    stroke(hue, 100, 100);
    line(x1, y1, x2, y2);
  }

  
  noStroke();
  fill(0);
  circle(0, 0, innerRadius * 2);
}


