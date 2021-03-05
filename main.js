function preload(){

}

function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(200,200);
    video.hide();
}

function draw(){
    image(video, 50, 50, 200, 200);
 //circle   
    let c = color(255, 204, 0);
    fill(c);
    noStroke();
    circle(40, 40, 50);

    c = color(255, 204, 0);
    fill(c);
    noStroke();
    circle(250, 40, 50);

    c = color(255, 204, 0);
    fill(c);
    noStroke();
    circle(40, 250, 50);

    c = color(255, 204, 0);
    fill(c);
    noStroke();
    circle(250, 250, 50);
//ellipse
    c = color(255,0,0);
    fill(c);
    noStroke();
    ellipse(145, 40, 170, 50)

    c = color(255,0,0);
    fill(c);
    noStroke();
    ellipse(40, 150, 50, 170)

    c = color(255,0,0);
    fill(c);
    noStroke();
    ellipse(250, 150, 50, 170)

    c = color(255,0,0);
    fill(c);
    noStroke();
    ellipse(145, 250, 170, 50)
}


