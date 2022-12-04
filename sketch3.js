var radius = 50;
var x = 110
var speed =2;
var direction=1;
let slider;
let radio;


function setup(){
  createCanvas(500,150);
  ellipseMode(RADIUS);
  colorPicker = createColorPicker('#ed225d');
  colorPicker.position(200, height + 5);
  
   slider = createSlider(0, 255, 100);
  slider.position(5, 220);
  slider.style('700px', '80px');
  
  colorPicker1 = createColorPicker('#ed225d');
  colorPicker1.position(200, height + 50);//named colorpicker1 for pacman, different color picker
  
  radio = createRadio();
  radio.option('black');
  radio.option('grey');
  radio.option('slider');
  radio.style('width', '70px');
  textAlign(CENTER);
  fill(255, 0, 0);
}

function draw(){
  background(colorPicker.color());
  let val = slider.value();
  
  //for radiobutton 
  let val1 = radio.value();
  background(val1);
  
  
x += speed * direction;
if ((x > width-radius) || (x < radius)) {
direction = -direction; // Flip direction
}
if (direction == 1) {
  
   
  fill(colorPicker1.color());//to fill pacman
arc(x, 60, radius , val, 0.52, 5.76); // Face right, instead of radius radius, used val, radius
} else {
arc(x, 60, val, radius, 3.67, 8.9); // Face left
}
  

}