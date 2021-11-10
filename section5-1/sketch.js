////練習問題：このプログラムを改造してEUの旗を描いてみよう
function setup(){
  createCanvas(200, 200);
  background(34,58,112);

  for(let i = 0; i < 12; i++){
    let theta = TWO_PI * i / 12;
    let a = 100 + cos(theta) * 50;
    let b = 100 + sin(theta) * 50;
   //星を置く座標
   fill(255,215,0)
   star(a,b,12)
}
}



// ヒント：section5-2 にある star 関数をここにコピーして、 draw 内で ellipse の代わりに使おう
function star(cx, cy, r){
  beginShape();    // 点つなぎを始める
  for(let i = 0; i < 5; i++){
    const theta = TWO_PI * i * 2 / 5 - HALF_PI;
    const x = cx + cos(theta) * r;
    const y = cy + sin(theta) * r;
    vertex(x, y);  // 次につなぐ点を１つ増やす
  }
  endShape(CLOSE); // 点つなぎを終わる
}
// function draw(){
// star(a,b,10)
// }どうしてこれで呼び出せない？？
