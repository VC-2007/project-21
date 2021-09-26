var canvas;
var music;

var sur1
var sur2
var sur3
var sur4

var box
var edges

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    sur1 = createSprite(100, 580, 200 , 20)
    sur1.shapeColor = "red"

    sur2 = createSprite(300, 580, 200 , 20)
    sur2.shapeColor = "blue"

    sur3 = createSprite(500, 580, 200 , 20)
    sur3.shapeColor = "green"

    sur4 = createSprite(700, 580, 200 , 20)
    sur4.shapeColor = "yellow"


    //create box sprite and give velocity
    box = createSprite(random(20,750),20,20,20)
    box.velocityY = 10
    box.velocityX = 10
    box.shapeColor = "white"
}

function draw() {
    background(rgb(0,0,0));
    
    
    //create edgeSprite
    edges = createEdgeSprites();
    box.bounceOff(edges)


    //add condition to check if box touching surface and make it box
    if(box.isTouching(sur1)){
        box.shapeColor = "red"
        music.play();
    }

    if(box.isTouching(sur2)){
        box.shapeColor = "blue"
        music.stop();
        box.velocityX = 0
        box.velocityY = 0
    }

    if(box.isTouching(sur3)){
        box.shapeColor = "green"
    }

    if(box.isTouching(sur4)){
        box.shapeColor = "yellow"
    }

    drawSprites()
}
