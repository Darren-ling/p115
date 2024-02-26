noseX = 0
noseY = 0

function preload(){
moustache = loadImage("moustache.png")
}
function setup(){
canvas=createCanvas(600,500);
video=createCapture(VIDEO);
video.hide();
canvas.center();
poseNet = ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}
function draw(){
image(video,0,0,600,500)
image(moustache,noseX,noseY,400,200)
}
function gotPoses(results){
    if (results.length>0){
        console.log (results);
        noseX=results[0].pose.nose.x-220;
        noseY=results[0].pose.nose.y-30;
    }
    else{
        console.log("Your code has some error");
}
}
function modelLoaded(){
    console.log("Your model is loaded sucessfully")
}
function take_snapshot(){
    save("picture1.jpeg")
}