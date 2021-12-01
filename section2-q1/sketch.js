// 小手調べ
function setup(){
  createCanvas(400,400);
  background(255)

    // BLANK[1]


  }
function draw(){
let  r=200
let  t=0
  while(t<10){
stroke(255,0,0)
ellipse(200,200,r)
if(5<=t){
stroke(0,0,0)
ellipse(200,200,r)

}
r=r-20
t=t+1


}

 }
