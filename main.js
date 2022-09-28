function setup() {
    video = createCapture(VIDEO);
    video.size(550, 550);

    canvas = createCanvas(550, 550);
    canvas.position(560, 150);
    canvas.background('red');

    poseNet = ml5.posenet(vide0, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    background('#969A97');
}

function modelLoaded(){
    console.log('PoseNet is initialized!');
}

function gotPoses(){
    if(results.length > 0)
    {
        console.log(results);
    }
}