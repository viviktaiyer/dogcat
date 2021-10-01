img="";
objects=[];
status="";

function preload(){
    img=loadImage("dog_cat.jpg");

}
function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML='Status : Detecting Objects';
    
}
function gotResults(error, results){
if(error){
    console.log(error);
}

    console.log(results);
objects=results;
}
function modelLoaded(){
    console.log("model Loaded");
    objectDetector.detect(img,gotResults)
}
function draw(){
    image(img,0,0,640,420);
    if(status!=""){
        for(i=0;i<objects;i++){
            document.getElementById("status").innerHTML='Status : Objects Detected';
            fill("#ff0000");
            percent=floor(objects[i].confidence*100);
            text(objects[i].label + " " + percent + "%",objects[i].x+15,objects[i].y+15);
            noFill();
            stroke("green");
        rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height)
        }

    }


}
