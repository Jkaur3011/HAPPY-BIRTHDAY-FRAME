function preload() {
//empty
}

function setup() {
    canvas = createCanvas(900, 900); //creating new canvas
    canvas.position(350, 180); //canvas position 
    video_Camera = createCapture(VIDEO);
    video_Camera.hide();
}

function draw() {

    fill(133, 3, 111 ); //fourth  line
    stroke(133, 3, 111 );
    rect(65, 120, 30, 500);
    
    fill(133, 3, 111 ); //third line
    stroke(133, 3, 111 );
    rect(80, 635, 650, 30);

    fill(133, 3, 111 ); //second  line
    stroke(133, 3, 111 );
    rect(770, 120, 30, 500);

    fill(133, 3, 111 ); //first line
    stroke(133, 3, 111 );
    rect(80, 50, 650, 30);
    
    fill(199, 252, 157); //first circle
    stroke(199, 252, 157);
    circle(80, 65, 120); 

    fill(14, 60, 97 ); //first square
    stroke(14, 60, 97 );
    rect(46, 30, 70, 70);

    fill(199, 252, 157); //second circle
    stroke(199, 252, 157);
    circle(785, 65, 120); 

    fill(14, 60, 97 ); //second square
    stroke(14, 60, 97 );
    rect(751, 30, 70, 70);

    fill(199, 252, 157); //third circle
    stroke(199, 252, 157);
    circle(785, 650, 120); 

    fill(14, 60, 97 ); //third square
    stroke(14, 60, 97 );
    rect(751, 615, 70, 70);

    fill(199, 252, 157); //fourth circle
    stroke(199, 252, 157);
    circle(80, 650, 120); 

    fill(14, 60, 97 ); //fourth square
    stroke(14, 60, 97 );
    rect(46, 615, 70, 70);

    image(video_Camera, 130, 100, 600, 500); //capture video
}

