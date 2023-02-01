img = ""
status = ""
objects = [];


function preload() {
    img = loadImage('https://media.istockphoto.com/photos/pet-family-portrait-picture-id1193325640?k=20&m=1193325640&s=612x612&w=0&h=P5P8t7CxA9HCvEH18SwWOneEWbbxZrqdODpZr4_M26M=');
}
function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}
function draw() {
    image(img, 0 , 0, 640, 420);
    if(status !="")
    {
        for (i = 0; i < objects.length; i++)
        {
            document.getElementById("status").innerHTMl = "Status : Object Detected";

            fill("#FF0000")
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + " " + percent + "%", objects[i] + 15, objects[i] + 15);
            noFill();
            stroke("#FF0000")
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);

        }
        
    }
   
}
function modelLoaded() {
    console.log("Model Loaded!")
    status = true;
    objectDetector.detect(img, gotResult);
}
function gotResult(error, results) {
    if (error) {
        console.log(error);
    }
    console.log(results);
    objects = results;
}






//fill("#FF0000");
//text("Dog", 85, 65);
//noFill();
//stroke("#FF0000"); 
//rect(80, 45, 250, 350 );

//fill("#FF0000");
//text("Person", 505, 75);
//noFill();
//stroke("#FF0000");
//rect(300, 60, 250, 320 );

//fill("#FF0000");
//text("Cat", 370, 370);
//noFill();
//stroke("#FF0000");
//rect(250, 150, 150, 280 );