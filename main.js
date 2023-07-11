var song="";
var left_wrist_x=0;
var left_wrist_y=0;
var right_wrist_x=0;
var right_wrist_y=0;

function preload(){
loadSound("pandora-140533.mp3");
loadSound("password-infinity-123276.mp3");
loadSound("epic-cinematic-beautiful-dubstep-141372.mp3");
}

function setup(){
canvas=createCanvas(400,200);
canvas.center();
image(video,20,-30,400,200);
}

function draw(){
    
}

function modelLoaded(){

}

function gotPoses(){
if (posenet>0){

}
}

function play(){
song.play()
}

function stop(){
song.stop()
}

function pause(){
song.pause();
}