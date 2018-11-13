function setup() {
  createCanvas(500,650);
  noStroke();
  //sky
  fill(233,150,18);
  rect(0,0,500,180);
  
  fill(218,87,41);
  rect(0,30,500,40);
  rect(0,110,500,40);
  //river
  fill(22,118,134);
  triangle(0,180,500,180,500,550);
  
  fill(234,193,67);
  ellipse(160,230,230,70);
  //bridge
  fill(202,56,35);
  triangle(0,180,660,650,0,650);
  
  fill(195,124,70);
  triangle(0,180,320,650,0,650);
  
  fill(40,57,82);
  triangle(0,180,320,650,300,650);
  triangle(0,180,430,650,360,650);
  triangle(0,180,580,650,490,650);
  
  fill(65,105,101);
  triangle(0,180,300,650,290,650);
  
  //man
  fill(35,64,68);
  rect(10,190,15,100);
  fill(25,43,45);
  rect(30,190,15,100);
  
  //body
   fill(37,63,60);
  rect(205,400,90,250,30,30,0,0);
  rect(195,410,20,110,10);
  rect(285,410,20,110,10);
}

  var p1y=370;
  var p2y=385;
  var r1=80;
  var r2=30;
  
function draw() {
  
  strokeWeight(6);
  stroke(40,57,82);
  line(80,253,80,300);
  strokeWeight(10);
  line(180,350,180,450);
  strokeWeight(20);
  line(400,550,400,650);
  
  //face
  noStroke();
  fill(190,168,119);
  ellipse(250,340,80,90);
  //*
  ellipse(252,p1y,45,r1);
  
  fill(37,63,60);
  ellipse(232,340,3,3);
  ellipse(268,340,3,3);
  ellipse(245,360,4,4);
  ellipse(255,360,4,4);
  //*
  ellipse(252,p2y,15,r2);
  
  //hand
  fill(190,168,119);
  quad(190,325,200,315,212,372,205,380);
  quad(205,380,212,372,220,430,210,430);
  
  quad(300,315,310,325,295,380,288,372);
  quad(288,372,295,380,290,430,280,430);
  
}

function touchMoved(){
  //if(touchY>370&&touchY<650){
    p1y=p1y+3;
    p2y=p2y+1;
    r1=r1+3;
    r2=r2+1;
  //}
}
