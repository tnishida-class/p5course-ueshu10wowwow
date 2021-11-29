// 最終課題を制作しよう
var x, y, vx, vy,humanX
const g = 0.5; // 重力
const vyMax = 30;
const limit =20
let startTime;
let state;


function setup(){


createCanvas(1000, 1000)

  x = random(60,440);
  y = 0;
  vx = 2;
  vy = 1.5;
  humanX=400;
  state=0


}
function humanMove(){

fill(0,128,0,200)
rect(humanX,800,20,60)
fill(0,128,0,200)
quad(humanX-3,800,humanX-3-20,800-20,humanX-3-10,800-10,humanX-3-20-10,800-20-10)
quad(humanX+3+20,800,humanX+3+20+20,800-20,humanX+3+10+20,800-10,humanX+3+20+20+10,800-20-10)
rect(humanX,800+62,8,20)
rect(humanX+12,800+62,8,20)
ellipse(humanX+10,785,15,20)

if(keyIsDown(LEFT_ARROW)){humanX-= 10; }
if(keyIsDown(RIGHT_ARROW)){humanX += 10; }

}
function back(){

  const blank=10
  for(let q=0;q<=1000;q+=blank){
    if(q%(blank*2)==0){
      for(let p=blank;p<=1000;p+=blank*2){
        noStroke()
        fill(120,82,45,20)//茶色
        rect(p,q,blank,blank)}}
    }
  }





function draw(){
  background(245, 245, 245,20);


back()


  if (state == 0) { // ゲーム開始前
    x = random(60,440);
    y = 0;
    vx = 2;
    vy = 1.5;
    humanX=400;
    state=0
    fill(0,128,0,200)
    textSize(30)
    text("クオーター を開始する", 1000 / 2, 1000 / 2);

  } else if (state == 1) { // ゲーム中


    fill(0,128,0,200)
    ellipse(x, y, 30);
    fill(255,255,255)
    textSize(10)
    text("単位",x-12,y+5)
    x += vx;
    y += vy;
    vy += g; // 重力は「速度の変化量」

   let AP=dist(humanX+5,800-22,x,y)
    if(AP<30){
      vy = -1*vy}
   if(x<0||x>1000){
    vx=-1*vx  ;

    }







    let ellapsedTime = (millis() - startTime) / 1000;
    if (ellapsedTime > limit) {
      state = 2;
    } else {
      let remainingTime = limit - ellapsedTime;
      fill(0,128,0)
      textSize(20)
      text(floor(remainingTime), 1000 / 2, 1000 / 2-50)
      textSize(30)
      fill(0,128,0,200)
      text("単位を落とすな！！",1000/2-39,1000/2+20);
      text("ダブルクリックで再履修",1000 / 2-60, 1000 / 2+50)
    }
  } else if (state == 2) { // ゲーム終了後
    fill(0,128,0,200)
    textSize(30)
    text("単位取得！！！", width / 2, height / 2);
  }


  humanMove()


}

  function mouseClicked() {
      if (state == 0) {
        startTime = millis();
        state = 1;}
    }
 function doubleClicked(){
  state=0
 }











function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
