// 練習問題「心臓の鼓動のように大きくなったり小さくなったりする円」
let count;
let cycle;
let size;
let dsize;
let v;

function setup(){
  createCanvas(200, 200);
  count = 0;
  cycle = 100;
  size=200;
  v=3;

}

function draw(){

  background(160, 192, 255);
  count = (count + v) % cycle;
  // BLANK[1]
  stroke(1)
  fill(241,91,91)
  ellipse(width / 2, height / 2,count);
  if(keyIsPressed){v=20}
  else{v=3}

}

function keyPressed(){
 if(keyCode==LEFT_ARROW){width-=10}
 else if(keyCode==RIGHT_ARROW){width+=10}
 else if(keyCode==DOWN_ARROW){height+=10}
 else if(keyCode==UP_ARROW){height-=10}
// jump作ろうとしたけど解説見てもわからななかったです。
    }


 
