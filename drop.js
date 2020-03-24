class Drop {
 constructor (){
  this.x = random(width);
  this.y = random(500, 50);
  this.z = random(0, 20);
  this.length = map(this.z, 0, 36, 10, 15);
  this.yspeed = map(this.z, 0, 27, 40, 19);

 }
 
 fall (){
  this.y = this.y +this.yspeed;
  var gravity = map(this.z, 0, 24, 45, 0, 34);
  this.yspeed = this.yspeed+gravity;
  if(this.y > height ){
   this.y = random(-305, -50);
   this.yspeed = map(this.z, 0, 10, 17, 4);
  }

 }

 display(){
 var drizzle = map(this.z, 0, 20, 1, 3);
 strokeWeight(2);
 stroke("purple");
 line(this.x, this.y, this.x, this.y+ this.length);
 
 }


}