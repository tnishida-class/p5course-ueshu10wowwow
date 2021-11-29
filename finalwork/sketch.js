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


rect(humanX,800,20,60)
quad(humanX-3,800,humanX-3-20,800-20,humanX-3-10,800-10,humanX-3-20-10,800-20-10)
quad(humanX+3+20,800,humanX+3+20+20,800-20,humanX+3+10+20,800-10,humanX+3+20+20+10,800-20-10)
rect(humanX,800+62,8,20)
rect(humanX+12,800+62,8,20)
ellipse(humanX+10,785,15,20)

if(keyIsDown(LEFT_ARROW)){humanX-= 10; }
if(keyIsDown(RIGHT_ARROW)){humanX += 10; }

}




function draw(){
  background(160, 192, 255,180);

  if (state == 0) { // ゲーム開始前
    x = random(60,440);
    y = 0;
    vx = 2;
    vy = 1.5;
    humanX=400;
    state=0

    text("クオーター を開始する", width / 2, height / 2);

  } else if (state == 1) { // ゲーム中



    ellipse(x, y, 30);
    text("単位",x-12,y+4)
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
      text(floor(remainingTime), width / 2, height / 2)
      text("単位を落とすな！！",width/2-39,height/2+20);
      text("ダブルクリックで再履修",width / 2-60, height / 2+40)
    }
  } else if (state == 2) { // ゲーム終了後
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
