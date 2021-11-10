// 練習問題：吹き出し
// 吹き出しの位置、背景色 etc. を関数 balloon の引数で指定できるようにしてみよう
// 吹き出しにしっぽを付けてみよう
function setup(){
  createCanvas(400, 400);
  background(255);
  balloon("I love hinatazaka46!!",20,15,'skyblue');
}

function balloon(t,tx,ty,c){
  let w = textWidth(t);
  let h = textAscent() + textDescent();
  let p = 2;

  fill(c);
  push()
  stroke(c)
  rect(tx, ty, w + p * 2, h + p * 2);
  pop()
  push()
  stroke(c)
  triangle(tx,ty+2*p+h,tx+p,ty+2*p+h,tx-p,ty+3*p+h);
  pop()
  fill(255);
  text(t, p+tx, h + p+ty);


}
