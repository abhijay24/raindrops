var raindrops = []


function setup() {
  createCanvas(600,300);
  for(var r = 0;r<500;r++){
    raindrops[r] = new Drop();
  }
  
}

function draw() {
  background(255,255,255);  
  for(var r = 0;r<raindrops.length;r++){
    raindrops[r].fall();
    raindrops[r].display();
  }
  

}