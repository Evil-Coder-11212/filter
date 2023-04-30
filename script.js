let video;
let poseNetModel;
let posesArray;
x = 0;
y = 0;
function preload() {
  console.log("Loaded");
}

function setup() {
  createCanvas(500, 500);
  video = createCapture(VIDEO);
  video.hide();
  poseNetModel = ml5.poseNet(video, modelLoaded);
  poseNetModel.on("pose", gotPoses);
}

function gotPoses(result) {
  if (result.length > 0) {
    posesArray = result[0];
    x = posesArray.pose.nose.x;
    y = posesArray.pose.nose.y;
  }
}

function modelLoaded() {
  console.log("Loaded...");
}

function draw() {
  image(video, 0, 0, 500, 500);
  fill(255, 0, 0);
  stroke(255, 0, 0);
  circle(x - 95, y - 0, 20);
}

function saveImage() {
  save("Image");
}
