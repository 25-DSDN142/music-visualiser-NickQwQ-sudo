

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

}


