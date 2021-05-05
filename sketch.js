const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
var engine,world
var drops=[],dropsCount=100
var thunder1,thunder2,thunder3,thunder4
var count=0
var man,manimage
function preload(){
    thunder1=loadImage("images/thunderbolt/1.png")
    thunder2=loadImage("images/thunderbolt/2.png")
    thunder3=loadImage("images/thunderbolt/3.png")
    thunder4=loadImage("images/thunderbolt/4.png")
    manimage=loadAnimation("images/Walking Frame/walking_1.png","images/Walking Frame/walking_2.png",
    "images/Walking Frame/walking_3.png","images/Walking Frame/walking_4.png","images/Walking Frame/walking_5.png"
    ,"images/Walking Frame/walking_6.png","images/Walking Frame/walking_7.png","images/Walking Frame/walking_8.png")
    
}

function setup(){
   engine=Engine.create();
   world=engine.world;
   createCanvas(500,500)
   man=createSprite(250,300);
   man.addAnimation("man",manimage)
   man.scale=0.5 
   if(frameCount%100===0){
    for(var i=0;i<dropsCount;i++){
        drops.push(new Drop(random(0,400),random(0,100)))
    }
}
    
}

function draw(){
    background("black")
    Engine.update(engine)
    var rand=Math.round(random(1,4));
    if(frameCount%70===0){
        count=frameCount
        thunder=createSprite(random(10,200),random(10,30))
        switch(rand){
            case 1:thunder.addImage(thunder1);
            break;
            case 2:thunder.addImage(thunder2);
            break;
            case 3:thunder.addImage(thunder3);
            break;
            case 4:thunder.addImage(thunder4);
            break;
            default:break;

        }
        thunder.scale=0.4   
        
    if(count+10===frameCount && thunder){
        thunder.destroy()
    }
        }
    for(var i=0;i<dropsCount;i++){
        drops[i].display();                                                 
        drops[i].newDrop();
    }
    drawSprites();
}   

