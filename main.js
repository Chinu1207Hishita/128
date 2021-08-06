song = "";
song2 = "";
var1 = "0";
var2 = "0";
var3 = "0";
var4 = "0";

function setup()
{
    canvas = createCanvas(500, 600);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function preload()
{
    song = loadSound("music.mp3");
    song2 = loadSound("music2.mp3");
}

function draw()
{
    image (video, 0, 0, 600, 500);
}

function modelLoaded()
{
    console.log("poseNet model is initialized");
}

function gotPoses(results)
{
    if(results.length>0);
}
