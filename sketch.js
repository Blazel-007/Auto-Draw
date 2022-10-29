// Auto paint XD

let x = 200;
let y = 200;
let a = 200;
let b = 200;
let c = 200;
let d = 200;
let e = 200;
let f = 200;

function setup() {
  createCanvas(400, 400);
  background(0);
}

function draw() {
  //background(0);
  ellipseMode(CENTER);
  noStroke();
  rectMode(CENTER);
  x += random(-7, 7);
  y += random(-7, 7);
  a += random(-7, 7);
  b += random(-7, 7);
  c += random(-7, 7);
  d += random(-7, 7);
  e += random(-7, 7);
  f += random(-7, 7);
  
  let starX = random(width);
  let starY = random(height);
  fill("white");
  ellipse(starX, starY, 1, 1);
  
  fill("cyan");
  circle(x, y, 5);
  fill("yellow");
  circle(a, b, 5);
  fill("red");
  circle(c, d, 5);
  fill("lime");
  circle(e, f, 5);
  
  if(x >= 390 || x <= 10) {
     x = 200;
     }
  if(y >= 390 || y <= 10) {
     y = 200;
     }
  if(a >= 390 || a <= 10) {
     a = 200;
     }
  if(b >= 390 || b <= 10) {
     b = 200;
     }
  if(c >= 390 || c <= 10) {
     c = 200;
     }
  if(d >= 390 || d <= 10) {
     d = 200;
     }
  if(e >= 390 || e <= 10) {
     e = 200;
     }
  if(f >= 390 || x <= 10) {
     f = 200;
     }
} 

function mousePressed() {
  background(0);
  x = 200;
  y = 200;
  a = 200;
  b = 200;
  c = 200;
  d = 200;
  e = 200;
  f = 200;
}