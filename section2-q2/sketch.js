// チェッカー
function setup() {
  createCanvas(200, 200);

      // BLANK[1] (hint: rectのx座標は size * i, y座標はsize * j)

}
function draw(){
  strokeWeight(0)
  let size=200/8
  for(let i=0;i<8;i=i+1){
    for(let j=0;j<8;j=j+1){
     let k=i+j
     if(k%2==1){
       fill(196,196,196)
       rect(size*i,size*j,size,size)
        if(j<3){
          fill(256,0,0)
          ellipse(size*i+size/2,size*j+size/2,size,size)}
        if(4<j){
          fill(0,0,0)
          ellipse(size*i+size/2,size*j+size/2,size,size)}
        }
     }
  }
}
