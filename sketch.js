var form;

function preload(){
background_img = loadImage("images/back (2).jpg")
}

function setup() {
  createCanvas(500,480);
  form = new Form (displayWidth,displayHeight,10,10)
}

function draw() {
  background(background_img); 
  image(background_img,displayWidth,displayHeight,10,10);

  form.display();
}

