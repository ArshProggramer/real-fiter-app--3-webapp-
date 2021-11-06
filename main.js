nosex=""
nosey=""
function preload(){
clownnose=loadImage(" https://i.postimg.cc/3x3QzSGq/m.png")
}
function setup(){
 canvas=createCanvas(300,300)
 canvas.center()
 camera=createCapture(VIDEO)
 camera.hide()
 posevideo=ml5.poseNet(camera,modelloaded);
 posevideo.on("pose",gotposes)
}
function draw(){
 image(camera,0,0,300,300)
 //stroke("red")
 //fill("red")
 //circle(nosex-180,nosey-120,20)
 image(clownnose,nosex-210,nosey-110,30,30)
}
function Snapshot(){
    save('Clownfilter.png')
}
function modelloaded(){
    console.log("modelisloaded")
}
function gotposes(results){
    if (results.length>0){
        console.log(results)
        nosex=results[0].pose.nose.x
        nosey=results[0].pose.nose.y
    }
}
