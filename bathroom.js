status="";
img="";
object=[];
function preload(){
  img = loadImage('bed1.jpg.jpg');
}
function setup(){
    canvas=createCanvas(380,380);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Status: Detecting Objects";
    image(img,380,380,100,100);
}
function modelLoaded(){
        console.log("Model Loaded!");
        status=true;
        objectDetector.detect(img,gotResult);
}
function gotResult(error,results){
    if(error){
        console.log(error);
    }
    console.log(results);
    object=results;
}
function draw(){
    if(status!=""){
        image(img,0,0,640,420);
        for (var i = 0; i < objects.length; i++)
         { document.getElementById("status").innerHTML = "Status : Objects Detected";
           fill(255, 0, 0); percent = floor(objects[i].confidence * 100);
           text(objects[i].label + " " + percent + "%", objects[i].x + 5, objects[i].y + 15);
           noFill(); stroke(255, 0, 0); rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
    }
}