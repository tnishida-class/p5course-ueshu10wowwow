// チェッカー
function setup() {
  createCanvas(200, 200);

      // BLANK[1] (hint: rectのx座標は size * i, y座標はsize * j)

}
function draw(){
  let width=200
  let size = width / 8;
  noStroke();
let i=0
let j=0
let k=i+j
while(i<8){

 while(j<8){

  //ここまでループ

  if(k%2==1 && j<3){
  fill(192,192,192)
  rect(size*i,size*j,size,size);
  fill(255,0,0)
  ellipse(size*i+size/2,size*j+size/2,size)
j+=1}

//ここまで赤丸



  else if(k%2==1 && 3<=j<=4){
  fill(192,192,192)
  rect(size*i,size*j,size,size);
  j+=1
}

//ここまでグレー


　
  else (k%2==1 && 5<=j){
  fill(192,192,192)
  rect(size*i,size*j,size,size);
  fill(0,0,0)
  ellipse(size*i+size/2,size*j+size/2,size)
j+=1}

  //ここまで黒丸
i+=1

}
}
}
