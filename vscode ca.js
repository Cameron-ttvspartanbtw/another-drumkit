let basedrum;
let snaredrum;
let Hihats;
let Ridecymbal;
let pedal;
let img;
let dBtn = [];

//this function will load all my sounds and images
function preload(){
  soundFormats('mp3', 'ogg');
  //this will load drum sound one
  basedrum = loadSound("basedrum.mp3");
  snaredrum = loadSound("snare.mp3");
  Hihats = loadSound("hiHats.mp3");
  Ridecymbal = loadSound("ridecymbal.mp3");  
  pedal = loadSound("pedal.mp3");
  img = loadImage('top down view of drums.jpg')
  
  //these are button for each drum
  dBtn[0] = new Drum(115, 200, 130);
  dBtn[1] = new Drum(245,250,110);
  dBtn[2] = new Drum(517,237,130);
  dBtn[3] = new Drum(250,370,130);
  dBtn[4] = new Drum(380,250,120)
}

//this is the canvas
function setup() {
  createCanvas(800, 800);
 
}
// this is when you click the mouse the sounds will play depending on which button u press
function draw() {
  image(img, 0, 0)
  let mx = mouseX;
  let my = mouseY;
  if (dBtn[0].collision(mx,my) == true && mouseIsPressed){
    dBtn[0].show();
    Hihats.play();  
    // Hihats.stop(5);
    
  }
   if (dBtn[1].collision(mx,my) == true && mouseIsPressed){
    dBtn[1].show();
    basedrum.play();  
    basedrum.stop(5); 
  }
    if (dBtn[2].collision(mx,my) == true && mouseIsPressed){
    dBtn[2].show();
       snaredrum.play();  
       snaredrum.stop(5);
  }
    if (dBtn[3].collision(mx,my) == true && mouseIsPressed){
    dBtn[3].show();
       Ridecymbal.play();  
    Ridecymbal.stop(5);
  }
    if (dBtn[4].collision(mx,my) == true && mouseIsPressed){
    dBtn[4].show();
      pedal.play();
      pedal.stop(5);
  }

    // dBtn[0].collision(mx, my);
    // dBtn[0].show();
    //dBtn[1].collision(mx, my);
    //dBtn[1].show();
  fill(255,0, 0)
//   for(let i=0; i < dBtn.length; i++){

    
//   }
  
  // fill(255, 50)
  // circle(115,200,130);
  // fill(255,0, 0)
  // circle(245,250,110);
  // circle(517,237,130);
    
}
//when key is pressed the sounds will play when u play these keys that are shown down below and when u press one key one sound will play and if u press the other keys other sounds will play.
function keyPressed() { 
  //keycode for the spacebar is 32 on college machine
  if (keyCode === 32){ 
    basedrum.play();  
    basedrum.stop(5);  
  }  
   else if (key == 'w') {
    snaredrum.play();  
    snaredrum.stop(7); 
   }
   else if (key == 'a') {
    Hihats.play();  
    Hihats.stop(5); 
   }
   else if (key == 's') {
    Ridecymbal.play();  
    Ridecymbal.stop(5); 
   }
   else if (key == 'd') {
    pedal.play();
    pedal.stop(5);
   }
   else {
     //catch
   }
}

 //this is when the you stop clicking the sound will play for 0.3 seconds
function mouseReleased(){
  stop(0.3);
}
 





  
