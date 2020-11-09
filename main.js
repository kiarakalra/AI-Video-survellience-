objects=[];
status="";

function preload() 
{
    video = createVideo('video.mp4');
    video.hide();
}


function setup() 
{
    canvas = createCanvas(480,380);
    canvas.center();
}

function gotResult(error,results)
{ 
 if (error)
 {
    console.log(error);
}
    console.log(results);
    objects = results;
}

function draw() 
{
    image(video,0,0,480,380);
     if (status !="") 
     {
         objectDetector.detect(video, gotResult);
         for (i = 0; i < objects.length; i++)
         {
             document.getElementById("status").innerHTML = "status : objects detected";
             document.getElementById("number_of_objects").innerHTML = "Number of objects detected are : "+ object.length;
            
             fill("#d8b7eb");
             percent = floor(objects[i].confidence * 100);
             text(objects[i].label + " " + percent + "%", objects[i].x + 15, object[i].y + 15);
            noFill();
            stroke("#d8b7eb");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
     }
}


function start() 
{
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "status : Detection objects"; 
}



function modelLoaded() 
{
    console.log("modelLoaded!");
    status = true;
    video.loop();
    video.speed(1);
    video.volume(0);
}
